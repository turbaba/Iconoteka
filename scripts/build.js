#!/usr/bin/env node

/**
 * Iconoteka build script
 *
 * File naming convention:
 *   /icons/{Category}/{name-parts-weight-style}.svg
 *
 *   e.g. /icons/People/user-identity-person-personal-b-f.svg
 *
 * Weight letters:  t=thin  u=ultralight  l=light  r=regular  m=medium  s=semibold  b=bold
 * Style letters:   f=fill  s=stroke
 *
 * Output: icons.json grouped as one entry per icon with all 14 variants nested inside
 */

const fs            = require("fs");
const path          = require("path");

const ICONS_DIR = path.join(__dirname, "../icons");
const OUTPUT    = path.join(__dirname, "../icons.json");
const WATCH     = process.argv.includes("--watch");

// ── Maps ─────────────────────────────────────────────────────────────────────

const WEIGHT_MAP = {
  t: "thin",
  u: "ultralight",
  l: "light",
  r: "regular",
  m: "medium",
  s: "semibold",
  b: "bold",
};

const STYLE_MAP = {
  f: "fill",
  s: "stroke",
};

const WEIGHT_ORDER = ["thin", "ultralight", "light", "regular", "medium", "semibold", "bold"];

// ── Helpers ───────────────────────────────────────────────────────────────────

function extractPath(svgContent) {
  const match = svgContent.match(/<path[^>]*\sd="([^"]+)"/);
  return match ? match[1] : null;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ── Display-name rules ────────────────────────────────────────────────────────
// Canonical source for icon labels. Previously lived in the website's index.html,
// which meant the plugin (reading displayName from icons.json) never saw them.
// Keep these here so every consumer gets the same label.
const HYPHENATE_MAP = {
  "up_left":"up-left","up_right":"up-right","up_down":"up-down","down_left":"down-left",
  "down_right":"down-right","left_up":"left-up","left_down":"left-down","left_right":"left-right",
  "right_up":"right-up","right_down":"right-down","north_east":"north-east","north_west":"north-west",
  "south_east":"south-east","south_west":"south-west","wi_fi":"wi-fi","see_through":"see-through",
  "up_to_date":"up-to-date","t_shirt":"t-shirt","x_ray":"x-ray","add_on":"add-on","top_up":"top-up","auto_renew":"auto-renew",
};

const CAPITALIZE_MAP = {
  "zoom_in":"Zoom In",
  "ai":"AI","ar":"AR","vr":"VR","mr":"MR","tv":"TV","pc":"PC","id":"ID","zip":"ZIP","qr":"QR",
  "nfc":"NFC","url":"URL","gps":"GPS","dna":"DNA","ocr":"OCR","llm":"LLM","ml":"ML","iot":"IoT",
  "sim":"SIM","esim":"eSIM","lte":"LTE","gsm":"GSM","usb":"USB","usba":"USB A","usbb":"USB-B","usbc":"USB-C",
  "hdmi":"HDMI","ssd":"SSD","hdd":"HDD","lan":"LAN","vpn":"VPN","cpu":"CPU","gpu":"GPU",
  "html":"HTML","css":"CSS","sql":"SQL","svg":"SVG","eps":"EPS","mp4":"MP4","hd":"HD","hq":"HQ",
  "fps":"FPS","ios":"iOS","atm":"ATM","otp":"OTP","2fa":"2FA","az":"A-Z","cta":"CTA","ui":"UI",
  "ux":"UX","qa":"QA","cv":"CV","cc":"CC","dm":"DM","im":"IM","sos":"SOS","suv":"SUV","uav":"UAV",
  "ev":"EV","ac":"AC","fm":"FM","am":"AM","pm":"PM","ir":"IR","fx":"FX","cw":"CW","ccw":"CCW","wc":"WC",
  "tm":"TM","www":"WWW","sms":"SMS","nlp":"NLP","tldr":"TLDR","nsfw":"NSFW","dnd":"DnD",
  "nba":"NBA","nfl":"NFL","nhl":"NHL","mlb":"MLB","mrt":"MRT","cmd":"CMD","ctrl":"CTRL",
  "otf":"OTF","ttf":"TTF","woff":"WOFF","asl":"ASL","wcag":"WCAG","ada":"ADA","cnd":"CnD",
  "api":"API","sdk":"SDK","ram":"RAM","usd":"USD","eur":"EUR","gbp":"GBP","jpy":"JPY","krw":"KRW",
  "rub":"RUB","amd":"AMD","azn":"AZN","gel":"GEL","kzt":"KZT","mnt":"MNT","uah":"UAH","inr":"INR",
  "php":"PHP","try":"TRY","sar":"SAR","nis":"NIS","thb":"THB","btc":"BTC","eth":"ETH","bnb":"BNB",
  "sol":"SOL","xrp":"XRP","trx":"TRX","usdt":"USDT","usdc":"USDC","3d":"3D","toc":"TOC","faq":"FAQ",
  "kpi":"KPI","vip":"VIP","vod":"VOD","rw":"RW","ff":"FF","fwd":"FWD","daw":"DAW","eq":"EQ",
  "cd":"CD","ip":"IP","uk":"UK","irn":"IRN","pa":"PA","sku":"SKU","pvc":"PVC","hdpe":"HDPE",
  "ldpe":"LDPE","pp":"PP","ps":"PS","wpa":"WPA","xyz":"XYZ","nvme":"NVMe","lidar":"LiDAR",
  "aids":"AIDS","hiv":"HIV","api":"API","x_ray":"X-ray","avi":"AVI","mpeg":"MPEG","mov":"MOV","fr":"FR","wifi":"Wi-Fi","wi_fi":"Wi-Fi","defi":"DeFi","top_up":"Top-Up","lol":"LOL","ipad":"iPad","hifi":"Hi-Fi","rmb":"RMB","lmb":"LMB","mmb":"MMB","iphone":"iPhone","fpv":"FPV","macos":"macOS","mv":"MV","a_z":"A-Z","ne":"NE","auto_renew":"Auto-Renew",
};

const LOWERCASE_WORDS = new Set(['of','in','at','to','an','the','and','or','but','for','with','by','from','as','into','via','per']);

function formatSegment(seg) {
  if (CAPITALIZE_MAP[seg]) return CAPITALIZE_MAP[seg];
  if (HYPHENATE_MAP[seg]) {
    return HYPHENATE_MAP[seg].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-');
  }
  const parts = seg.split('_');
  const result = [];
  let i = 0;
  while (i < parts.length) {
    // Try to match longest combo starting at i
    let matched = false;
    for (let j = parts.length; j > i + 1; j--) {
      const combo = parts.slice(i, j).join('_');
      if (HYPHENATE_MAP[combo]) {
        const hyphenated = HYPHENATE_MAP[combo].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-');
        result.push(hyphenated);
        i = j;
        matched = true;
        break;
      }
    }
    if (!matched) {
      const w = parts[i];
      const isFirst = result.length === 0;
      if (!isFirst && LOWERCASE_WORDS.has(w)) {
        result.push(w);
      } else {
        result.push(CAPITALIZE_MAP[w] || (w.charAt(0).toUpperCase() + w.slice(1)));
      }
      i++;
    }
  }
  return result.join(' ');
}

function parseFilename(filename) {
  // Remove .svg
  const base = filename.replace(/\.svg$/i, "");
  const parts = base.split("-");

  // Last part = style (f or s)
  // Second to last = weight (t/u/l/r/m/s/b)
  // Everything before = icon name parts
  const styleLetter  = parts[parts.length - 1];
  const weightLetter = parts[parts.length - 2];
  const nameParts    = parts.slice(0, parts.length - 2);

  const weight = WEIGHT_MAP[weightLetter];
  const style  = STYLE_MAP[styleLetter];

  if (!weight || !style) return null;

  return {
    fullName:    nameParts.join("-"),
    displayName: formatSegment(nameParts[0]),
    searchTerms: nameParts,
    weight,
    style,
  };
}

// ── Build ─────────────────────────────────────────────────────────────────────

function build() {
  if (!fs.existsSync(ICONS_DIR)) {
    console.error(`❌  /icons/ folder not found`);
    process.exit(1);
  }

  // Map: fullName → icon entry
  const iconsMap = {};

  // Walk category subfolders
  const categories = fs.readdirSync(ICONS_DIR).filter(f => {
    return fs.statSync(path.join(ICONS_DIR, f)).isDirectory();
  });

  if (categories.length === 0) {
    console.warn("⚠️  No category folders found in /icons/");
  }

  for (const category of categories) {
    const catDir = path.join(ICONS_DIR, category);
    const files  = fs.readdirSync(catDir)
      .filter(f => f.toLowerCase().endsWith(".svg"))
      .sort();

    for (const file of files) {
      const parsed = parseFilename(file);
      if (!parsed) {
        console.warn(`⚠️  Skipping ${file} — couldn't parse weight/style`);
        continue;
      }

      const svgContent = fs.readFileSync(path.join(catDir, file), "utf8");
      const svgPath    = extractPath(svgContent);

      if (!svgPath) {
        console.warn(`⚠️  Skipping ${file} — no <path d="..."> found`);
        continue;
      }

      const { fullName, displayName, searchTerms, weight, style } = parsed;
      const key = `${category}__${fullName}`;

      // Create entry if first time seeing this icon
      if (!iconsMap[key]) {
        iconsMap[key] = {
          name:        fullName,
          displayName,
          searchTerms,
          category,
          variants: {},
        };
      }

      // Add variant
      if (!iconsMap[key].variants[weight]) {
        iconsMap[key].variants[weight] = {};
      }
      iconsMap[key].variants[weight][style] = svgPath;
    }
  }

  // Convert map to sorted array
  const icons = Object.values(iconsMap).sort((a, b) =>
    a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
  );

  // Sort variants by weight order
  for (const icon of icons) {
    const sorted = {};
    for (const w of WEIGHT_ORDER) {
      if (icon.variants[w]) sorted[w] = icon.variants[w];
    }
    icon.variants = sorted;
  }

  // Version comes from package.json — bump "version" there for a release
  const version = require("../package.json").version;

  const output = {
    meta: {
      version,
      count:     icons.length,
      updatedAt: new Date().toISOString(),
      cdn:       `https://cdn.jsdelivr.net/gh/turbaba/Iconoteka@${version}/icons.json`,
    },
    icons,
  };

  fs.writeFileSync(OUTPUT, JSON.stringify(output, null, 2));
  console.log(`✅  Built icons.json — ${icons.length} unique icons across ${categories.length} categories`);
}

// ── Watch ─────────────────────────────────────────────────────────────────────

if (WATCH) {
  try {
    const chokidar = require("chokidar");
    console.log("👀  Watching /icons/ for changes…");
    build();
    chokidar.watch(ICONS_DIR, { ignoreInitial: true }).on("all", (e, f) => {
      console.log(`  → ${e}: ${path.basename(f)}`);
      build();
    });
  } catch {
    console.error("⚠️  Run: npm install");
    process.exit(1);
  }
} else {
  build();
}
