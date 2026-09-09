// Ranking ported from the Iconoteka website so MCP results match what a
// person sees at iconoteka.com.

const SYNONYMS = {
  home: ["house"], house: ["home"],
  close: ["cross", "dismiss", "cancel"],
  search: ["find", "magnify"],
  edit: ["pen", "pencil", "write"], pen: ["pencil", "edit"],
  file: ["document", "doc"], document: ["file", "doc"],
  folder: ["directory"],
  save: ["floppy", "download"],
  share: ["send", "export"],
  user: ["person", "profile", "account"], person: ["user", "profile"],
  email: ["mail", "envelope"], mail: ["email", "envelope"],
  message: ["speech_balloon", "chat"], chat: ["speech_balloon", "message"],
  phone: ["call", "mobile"], call: ["phone", "telephone"],
  settings: ["gear", "cog", "preferences"], gear: ["settings", "cog"],
  delete: ["trash", "bin", "remove"], trash: ["delete", "bin", "garbage"],
  add: ["plus", "create", "new"], plus: ["add", "create"],
  remove: ["minus", "delete"], minus: ["remove", "subtract"],
  check: ["checkmark", "tick", "done"], tick: ["check", "checkmark"],
  warning: ["alert", "caution"], alert: ["warning", "notification"],
  info: ["information"], information: ["info"],
  star: ["favorite", "favourite", "bookmark"],
  heart: ["like", "love", "favorite"],
  lock: ["secure", "password", "private"],
  calendar: ["date", "schedule", "event"],
  clock: ["time", "timer"], time: ["clock", "schedule"],
  image: ["picture", "photo"], picture: ["image", "photo"],
  video: ["movie", "film"], movie: ["video", "film"],
  cart: ["basket", "shopping", "trolley"],
  money: ["cash", "payment", "currency"],
  chart: ["graph", "analytics", "statistics"],
  graph: ["chart", "analytics"],
  menu: ["hamburger", "burger", "bars"],
  link: ["chain", "url"],
  eye: ["view", "visible", "show"],
  refresh: ["reload", "sync", "update"],
  filter: ["funnel", "sort"],
  download: ["import", "save"], upload: ["export", "send"],
  play: ["start", "run"], pause: ["stop", "halt"],
  send: ["submit", "share"],
  copy: ["duplicate", "clone"],
  cloud: ["server", "storage"],
  wifi: ["wireless", "network", "signal"],
  battery: ["power", "charge"],
  camera: ["photo", "capture"],
  car: ["vehicle", "auto", "automobile"],
  bell: ["notification", "alarm", "ring"],
};

// Words that several icons claim, or that no icon claims outright, mapped to
// the one icon that should answer. Supplied from icons.json meta by index.js;
// an empty table just means every lookup falls through to the ranking below.
let RESOLUTIONS = Object.create(null);

export function setAliasResolutions(map) {
  RESOLUTIONS = Object.assign(Object.create(null), map || {});
}

/**
 * Levenshtein distance, capped. The previous matcher only walked the query as
 * a subsequence, so it caught a dropped letter ("shoping") but never an extra
 * one ("belll") or a swap ("calender") — the two most common typos.
 */
function editDistance(a, b) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 99;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = a[i - 1] === b[j - 1]
        ? prev[j - 1]
        : 1 + Math.min(prev[j - 1], prev[j], cur[j - 1]);
    }
    prev = cur;
  }
  return prev[b.length];
}

/** Near-miss score: 1 edit for short queries, 2 once there's room to be sure. */
function fuzzyMatch(target, q) {
  const allowed = q.length >= 7 ? 2 : 1;
  const d = editDistance(target, q);
  return d <= allowed ? (allowed - d + 1) * 20 : 0;
}

function wordMatch(segment, q) {
  return segment === q || segment.split("_").includes(q);
}

export function scoreIcon(icon, q) {
  const name     = icon.name.toLowerCase();
  const parts    = name.split("-");
  const identity = parts[0];
  const terms    = (icon.searchTerms || []).map(t => t.toLowerCase());
  const cat      = (icon.category || "").toLowerCase();

  // The icon *is* the thing asked for.
  if (name === q || identity === q)                     return 1000;

  // The word has a settled answer and this is it. Above every alias hit, so
  // the winner beats its co-claimants; it also carries icons the word was
  // never tagged on at all — nothing tags "pen" with "edit", but that is
  // still what someone typing "edit" is reaching for.
  if (RESOLUTIONS[q] === identity)                      return 960;

  // A standalone alias equal to the query: somebody deliberately tagged this
  // icon with this word. Earlier aliases were listed first, so rank them first.
  // Many icons legitimately carry the same alias: eight claim "delete". Prefer
  // the one whose identity is simplest — garbage over filter_remove, because
  // "remove a filter" is a narrower idea than the bin itself.
  const aliasAt = parts.findIndex(p => p === q);
  const idWords = identity.split("_").length;
  if (aliasAt > 0)  return 950 - Math.min(aliasAt, 20) - (idWords - 1) * 12;

  // The identity contains the query as a whole word — doc_delete for "delete".
  if (identity.split("_").includes(q))                  return 900;
  if (identity.split("_").join("") === q)               return 890;

  // A compound *alias* contains the query as a word — alarm_delete for
  // "delete". Much weaker: "delete an alarm" is not "a delete icon".
  const subAt = parts.findIndex(p => p.split("_").includes(q));
  if (subAt > 0)                                        return 700 - Math.min(subAt, 20);

  if (terms.some(t => wordMatch(t, q)))                 return 650;
  if (cat.split(" ").includes(q) || cat === q)          return 500;

  if (q.length >= 2) {
    if (identity.split("_").some(w => w.startsWith(q))) return 460;
    if (parts.some(p => p.split("_").some(w => w.startsWith(q)))) return 450;
    if (parts.some(p => p.split("_").join("").startsWith(q)))     return 445;
    if (terms.some(t => t.split("_").some(w => w.startsWith(q)))) return 430;
  }
  if (q.length >= 3) {
    const syn = SYNONYMS[q] || [];
    if (syn.some(s => parts.some(p => wordMatch(p, s)) || terms.some(t => wordMatch(t, s)))) return 400;
  }
  // Typo tolerance. Gated at 4 characters, not 7 — "belll" and "shoping" are
  // exactly the misspellings that need to survive, and both are shorter.
  if (q.length >= 4) {
    const idBest = Math.max(...identity.split("_").map(w => fuzzyMatch(w, q)), 0);
    if (idBest) return 300 + idBest;                     // typo on the identity
    const best = Math.max(
      ...parts.map(p => Math.max(...p.split("_").map(w => fuzzyMatch(w, q)))),
      ...terms.map(t => fuzzyMatch(t, q)), 0
    );
    if (best) return 200 + best;                         // typo on an alias
  }
  return 0;
}

// Multi-word queries: every word must match something; the weakest wins.
export function search(icons, query, { category, limit = 20 } = {}) {
  const q = query.toLowerCase().trim().replace(/-/g, "");
  if (!q) return [];
  const words = q.split(/\s+/).filter(Boolean);

  return icons
    .filter(i => !category || i.category.toLowerCase() === category.toLowerCase())
    .map(icon => {
      const score = words.length > 1
        ? Math.min(...words.map(w => scoreIcon(icon, w)))
        : scoreIcon(icon, q);
      return { icon, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) =>
      b.score - a.score ||
      Number(Boolean(b.icon.popular)) - Number(Boolean(a.icon.popular)) ||
      a.icon.name.localeCompare(b.icon.name))
    .slice(0, limit);
}

// Accept either the identity ("bell") or the full hyphenated name.
export function findIcon(icons, name) {
  const n = name.toLowerCase().trim().replace(/\s+/g, "_");

  // Exact full name, then the identity — the canonical ways to address an icon.
  const exact = icons.find(i => i.name.toLowerCase() === n)
             || icons.find(i => i.name.split("-")[0].toLowerCase() === n);
  if (exact) return exact;

  // A settled word goes straight to its answer. An agent reasons "I need a
  // trash icon" and calls get_icon("trash") without searching first; the
  // icon's identity happens to be "garbage", and the table knows that.
  const resolved = RESOLUTIONS[n];
  if (resolved) {
    const hit = icons.find(i => i.name.split("-")[0].toLowerCase() === resolved);
    if (hit) return hit;
  }

  // Then aliases, for words the table doesn't cover.
  const byAlias = icons.filter(i =>
    i.name.toLowerCase().split("-").slice(1).includes(n));
  if (byAlias.length === 1) return byAlias[0];

  // Several icons claim the alias ("delete" belongs to eight). Fall back to the
  // ranking search already uses, so the answer matches search_icons.
  if (byAlias.length > 1) {
    const ranked = search(icons, n, { limit: 1 });
    if (ranked.length) return ranked[0].icon;
    return byAlias[0];
  }
  return null;
}
