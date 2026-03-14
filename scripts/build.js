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
const { execSync }  = require("child_process");

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
    displayName: capitalize(nameParts[0]),
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

  // Version: 02.00.{git commit count}
  let commitCount = "00";
  try {
    commitCount = execSync("git rev-list --count HEAD", { cwd: __dirname }).toString().trim();
  } catch {
    console.warn("⚠️  Could not get git commit count, using 00");
  }
  const version = `02.00.${commitCount}`;

  const output = {
    meta: {
      version,
      count:     icons.length,
      updatedAt: new Date().toISOString(),
      cdn:       "https://cdn.jsdelivr.net/gh/turbaba/iconoteka@main/icons.json",
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
