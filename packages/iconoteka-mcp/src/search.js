// Ranking ported from the Iconoteka website so MCP results match what a
// person sees at beta.iconoteka.com.

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

function fuzzyMatch(str, q) {
  let si = 0, qi = 0, score = 0, consecutive = 0;
  while (si < str.length && qi < q.length) {
    if (str[si] === q[qi]) { score += 1 + consecutive; consecutive++; qi++; }
    else consecutive = 0;
    si++;
  }
  return qi === q.length ? score : 0;
}

function wordMatch(segment, q) {
  return segment === q || segment.split("_").includes(q);
}

export function scoreIcon(icon, q) {
  const name  = icon.name.toLowerCase();
  const parts = name.split("-");
  const terms = (icon.searchTerms || []).map(t => t.toLowerCase());
  const cat   = (icon.category || "").toLowerCase();

  if (name === q || parts[0] === q)                              return 1000;
  if (parts.some(p => wordMatch(p, q)))                          return 900;
  if (parts.some(p => p.split("_").join("") === q))              return 890;
  if (terms.some(t => wordMatch(t, q)))                          return 850;
  if (cat.split(" ").includes(q) || cat === q)                   return 500;

  if (q.length >= 2) {
    if (parts.some(p => p.split("_").some(w => w.startsWith(q)))) return 450;
    if (parts.some(p => p.split("_").join("").startsWith(q)))     return 445;
    if (terms.some(t => t.split("_").some(w => w.startsWith(q)))) return 430;
  }
  if (q.length >= 3) {
    const syn = SYNONYMS[q] || [];
    if (syn.some(s => parts.some(p => wordMatch(p, s)) || terms.some(t => wordMatch(t, s)))) return 400;
  }
  if (q.length >= 7) {
    const best = Math.max(
      ...parts.map(p => Math.max(...p.split("_").map(w => fuzzyMatch(w, q)))),
      ...terms.map(t => fuzzyMatch(t, q)), 0
    );
    if (best > q.length * 0.9) return 200 + best;
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
    .sort((a, b) => b.score - a.score || a.icon.name.localeCompare(b.icon.name))
    .slice(0, limit);
}

// Accept either the identity ("bell") or the full hyphenated name.
export function findIcon(icons, name) {
  const n = name.toLowerCase().trim();
  return icons.find(i => i.name.toLowerCase() === n)
      || icons.find(i => i.name.split("-")[0].toLowerCase() === n)
      || null;
}
