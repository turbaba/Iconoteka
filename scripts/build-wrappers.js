#!/usr/bin/env node

/**
 * Generates the framework wrapper packages from icons.json.
 *
 *   packages/iconoteka-react/    React    (createElement, no JSX build step)
 *   packages/iconoteka-vue/      Vue 3    (render fn, no SFC build step)
 *   packages/iconoteka-svelte/   Svelte   (.svelte source, as Svelte libs ship)
 *
 * One file per icon so bundlers can tree-shake — importing Bell must not pull
 * in the other 1297. Each file carries all 7 weights x 2 styles (~5.7 kB), so
 * switching weight is a prop, not a different import.
 *
 * Run:  node scripts/build-wrappers.js
 */

const fs   = require("fs");
const path = require("path");

const ROOT     = path.join(__dirname, "..");
const DATA     = require(path.join(ROOT, "icons.json"));
const PKG      = require(path.join(ROOT, "packages/iconoteka/package.json"));
const VERSION  = PKG.version;
const WRAPPER_VERSION = "0.1.4";  // wrappers version independently of the data

const WEIGHTS = ["thin","ultralight","light","regular","medium","semibold","bold"];

// ── Naming ────────────────────────────────────────────────────────────────────

/** bank_card -> BankCard ; 3dscan -> Icon3dScan (identifiers can't start with a digit) */
function componentName(identity) {
  const pascal = identity
    .split("_")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
  return /^[0-9]/.test(pascal) ? "Icon" + pascal : pascal;
}

/**
 * A solid form usually doesn't change with stroke weight, so those icons store
 * one fill rather than seven identical copies. Returns the weight key holding
 * that shared fill, or null when the fill genuinely varies per weight.
 */
function sharedFillWeight(icon) {
  const withFill = WEIGHTS.filter(w => icon.variants[w] && icon.variants[w].fill);
  if (!withFill.length) return null;
  const weights = WEIGHTS.filter(w => icon.variants[w]);
  return withFill.length < weights.length ? withFill[0] : null;
}

function variantData(icon) {
  const out = {};
  for (const w of WEIGHTS) {
    const v = icon.variants[w];
    if (!v) continue;
    const entry = {};
    if (v.stroke) entry.stroke = v.stroke;
    if (v.fill)   entry.fill   = v.fill;
    if (Object.keys(entry).length) out[w] = entry;
  }
  return out;
}

// ── Emitters ──────────────────────────────────────────────────────────────────

const react = (name, paths, shared) => `import { createElement } from "react";

const p = ${JSON.stringify(paths)};
const f = ${shared ? `p.${shared}.fill` : "null"};

export default function ${name}({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
`;

const vue = (name, paths, shared) => `import { h } from "vue";

const p = ${JSON.stringify(paths)};
const f = ${shared ? `p.${shared}.fill` : "null"};

export default {
  name: ${JSON.stringify(name)},
  props: {
    weight:  { type: String, default: "regular" },
    variant: { type: String, default: "stroke" },
    size:    { type: [Number, String], default: 24 }
  },
  setup(props, { attrs }) {
    return () => {
      const w = p[props.weight] || p.regular;
      const d = w[props.variant] || (props.variant === "fill" ? f : null) || w.stroke;
      return h(
        "svg",
        { width: props.size, height: props.size, viewBox: "0 0 24 24",
          fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attrs },
        [h("path", { d, fill: "currentColor" })]
      );
    };
  }
};
`;

const svelte = (name, paths, shared) => `<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = ${JSON.stringify(paths)};
  const f = ${shared ? `p.${shared}.fill` : "null"};

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
`;

// ── Package scaffolding ───────────────────────────────────────────────────────

const TYPES = `import type { SVGProps } from "react";

export type IconWeight =
  | "thin" | "ultralight" | "light" | "regular"
  | "medium" | "semibold" | "bold";

export type IconVariant = "stroke" | "fill";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "style"> {
  /** Stroke thickness. Default "regular". */
  weight?: IconWeight;
  /** Outline or solid. Default "stroke". */
  variant?: IconVariant;
  /** Width and height in px. Default 24. */
  size?: number | string;
}

export declare const __icons: readonly string[];
`;

function manifest(pkgName, extra) {
  return {
    name: pkgName,
    version: WRAPPER_VERSION,
    description: `Iconoteka icons as ${extra.label} components — 1298 icons, 7 weights, stroke and fill`,
    license: "MIT",
    author: "turbaba",
    homepage: "https://iconoteka.com",
    repository: {
      type: "git",
      url: "git+https://github.com/turbaba/Iconoteka.git",
      directory: `packages/${pkgName}`
    },
    keywords: ["icons","iconoteka","svg", extra.label.toLowerCase(), "design-system"],
    type: "module",
    sideEffects: false,
    ...extra.fields,
    files: ["icons", "index.js", "index.d.ts", "README.md", "LICENSE"],
    peerDependencies: extra.peer,
    engines: { node: ">=18" }
  };
}

function readme(pkgName, label, usage) {
  return `# ${pkgName}

[Iconoteka](https://iconoteka.com) icons as ${label} components — 1298
icons, seven weights, stroke and fill.

\`\`\`bash
npm install ${pkgName}
\`\`\`

${usage}

## Props

| prop | type | default | |
|---|---|---|---|
| \`weight\` | \`thin\` · \`ultralight\` · \`light\` · \`regular\` · \`medium\` · \`semibold\` · \`bold\` | \`regular\` | stroke thickness |
| \`variant\` | \`stroke\` · \`fill\` | \`stroke\` | outline or solid |
| \`size\` | number · string | \`24\` | width and height |

Where an icon's solid form is the same at every weight it's stored once and
served for all of them. Where an icon has no solid form, the stroke renders.

Anything else is spread onto the \`<svg>\`. Icons paint with
\`fill="currentColor"\`, so they inherit the surrounding text colour.

Every icon is its own module, so bundlers drop the ones you don't import.

## Names

Each icon exports under its own name, plus any keyword that belongs to it
alone — so \`Settings\` reaches the gear, \`Close\` the cross, and
\`Notification\` the bell. Both names import the same module, so using either
costs the same.

Keywords shared by several icons stay search-only: \`delete\` belongs to eight
icons, so there is no \`Delete\` component. Search for those on
[iconoteka.com](https://iconoteka.com) and use the name it shows.

Named \`variant\` rather than \`style\` because \`style\` collides with the
reserved DOM prop. Icons whose name starts with a digit are prefixed with
\`Icon\` — \`3dscan\` becomes \`Icon3dScan\` — since identifiers can't start
with a number.

## Support

Iconoteka is a free, open-source library created and maintained by one person.
Support its future development through a monthly
[Patreon](https://www.patreon.com/c/iconoteka) subscription or a one-time
[Ko-fi](https://ko-fi.com/iconoteka) donation.

MIT © Oleg Turbaba
`;
}

// ── Build ─────────────────────────────────────────────────────────────────────

const TARGETS = [
  { dir: "iconoteka-react", label: "React", ext: "js", emit: react,
    peer: { react: ">=17" },
    fields: { main: "./index.js", module: "./index.js", types: "./index.d.ts",
              exports: { ".": { types: "./index.d.ts", default: "./index.js" },
                          "./icons/*": "./icons/*" } },
    usage: '```jsx\nimport { Bell, Heart } from "iconoteka-react";\n\n<Bell />\n<Bell weight="bold" variant="fill" size={32} />\n<Heart className="text-red-500" />\n```' },

  { dir: "iconoteka-vue", label: "Vue", ext: "js", emit: vue,
    peer: { vue: ">=3" },
    fields: { main: "./index.js", module: "./index.js", types: "./index.d.ts",
              exports: { ".": { types: "./index.d.ts", default: "./index.js" },
                          "./icons/*": "./icons/*" } },
    usage: '```vue\n<script setup>\nimport { Bell } from "iconoteka-vue";\n</script>\n\n<template>\n  <Bell />\n  <Bell weight="bold" variant="fill" :size="32" />\n</template>\n```' },

  { dir: "iconoteka-svelte", label: "Svelte", ext: "svelte", emit: svelte,
    peer: { svelte: ">=4" },
    fields: { svelte: "./index.js", main: "./index.js", types: "./index.d.ts",
              exports: { ".": { types: "./index.d.ts", svelte: "./index.js", default: "./index.js" },
                          "./icons/*": "./icons/*" } },
    usage: '```svelte\n<script>\n  import { Bell } from "iconoteka-svelte";\n</script>\n\n<Bell />\n<Bell weight="bold" variant="fill" size={32} />\n```' }
];

const LICENSE = fs.readFileSync(path.join(ROOT, "LICENSE"), "utf8");

for (const t of TARGETS) {
  const base    = path.join(ROOT, "packages", t.dir);
  const iconDir = path.join(base, "icons");
  fs.rmSync(iconDir, { recursive: true, force: true });
  fs.mkdirSync(iconDir, { recursive: true });

  const exports = [];
  const names   = [];
  const taken   = new Set();

  for (const icon of DATA.icons) {
    const identity = icon.name.split("-")[0];
    const name     = componentName(identity);
    const paths    = variantData(icon);
    if (!Object.keys(paths).length) continue;

    fs.writeFileSync(path.join(iconDir, `${name}.${t.ext}`), t.emit(name, paths, sharedFillWeight(icon)));
    exports.push(`export { default as ${name} } from "./icons/${name}.${t.ext}";`);
    names.push(name);
    taken.add(name);
  }

  // Alias exports. Someone reaching for <Trash/> shouldn't need to know the
  // icon's identity is "garbage". An ES module can't export the same name
  // twice, so an alias can only become a component if exactly one icon answers
  // to it: either it's claimed by a single icon, or icons.json settles it.
  const owners = new Map();
  for (const icon of DATA.icons) {
    const identity = icon.name.split("-")[0];
    for (const a of icon.name.split("-").slice(1)) {
      if (!owners.has(a)) owners.set(a, new Set());
      owners.get(a).add(identity);
    }
  }
  const identities  = new Set(DATA.icons.map(i => i.name.split("-")[0]));
  const resolutions = (DATA.meta && DATA.meta.aliasResolutions) || {};

  // A settled word may name an icon that never claimed it — nothing tags "pen"
  // with "edit" — so walk the table as well as the claimed aliases.
  const candidates = new Set([...owners.keys(), ...Object.keys(resolutions)]);
  const aliasLines = [];
  let settled = 0;
  for (const alias of [...candidates].sort()) {
    if (identities.has(alias)) continue;          // already an icon's own name
    const resolved = resolutions[alias];
    const claimed  = owners.get(alias);
    let identity;
    if (resolved) {
      identity = resolved;
      if (!claimed || claimed.size > 1) settled++;
    } else if (claimed && claimed.size === 1) {
      identity = [...claimed][0];
    } else {
      continue;                                   // ambiguous and unsettled
    }
    const aliasName = componentName(alias);
    if (taken.has(aliasName)) continue;           // would collide with a real export
    taken.add(aliasName);
    const target = componentName(identity);
    aliasLines.push(`export { default as ${aliasName} } from "./icons/${target}.${t.ext}";`);
    names.push(aliasName);
  }

  fs.writeFileSync(
    path.join(base, "index.js"),
    exports.join("\n") + "\n\n// Aliases — additional names for the icons above.\n" +
    aliasLines.join("\n") + "\n"
  );
  console.log(`    + ${aliasLines.length} alias exports (${settled} from the resolution table)`);

  const decls = names
    .map(n => `export declare const ${n}: ${t.label === "React"
      ? "(props: IconProps) => JSX.Element"
      : "any"};`)
    .join("\n");
  fs.writeFileSync(path.join(base, "index.d.ts"), TYPES + "\n" + decls + "\n");

  fs.writeFileSync(
    path.join(base, "package.json"),
    JSON.stringify(manifest(t.dir, { label: t.label, fields: t.fields, peer: t.peer }), null, 2) + "\n"
  );
  fs.writeFileSync(path.join(base, "README.md"), readme(t.dir, t.label, t.usage));
  fs.writeFileSync(path.join(base, "LICENSE"), LICENSE);

  console.log(`✅  ${t.dir} — ${names.length} components`);
}
