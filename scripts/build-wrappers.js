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

const react = (name, paths) => `import { createElement } from "react";

const p = ${JSON.stringify(paths)};

export default function ${name}({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
`;

const vue = (name, paths) => `import { h } from "vue";

const p = ${JSON.stringify(paths)};

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
      const d = w[props.variant] || w.stroke || w.fill;
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

const svelte = (name, paths) => `<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = ${JSON.stringify(paths)};

  $: w = p[weight] || p.regular;
  $: d = w[variant] || w.stroke || w.fill;
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
    version: VERSION,
    description: `Iconoteka icons as ${extra.label} components — 1298 icons, 7 weights, 2 styles`,
    license: "MIT",
    author: "turbaba",
    homepage: "https://beta.iconoteka.com",
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

[Iconoteka](https://beta.iconoteka.com) icons as ${label} components — 1298
icons, 7 weights, 2 styles.

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

Anything else is spread onto the \`<svg>\`. Icons paint with
\`fill="currentColor"\`, so they inherit the surrounding text colour.

Every icon is its own module, so bundlers drop the ones you don't import.

Named \`variant\` rather than \`style\` because \`style\` collides with the
reserved DOM prop. Icons whose name starts with a digit are prefixed with
\`Icon\` — \`3dscan\` becomes \`Icon3dScan\` — since identifiers can't start
with a number.

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

  for (const icon of DATA.icons) {
    const identity = icon.name.split("-")[0];
    const name     = componentName(identity);
    const paths    = variantData(icon);
    if (!Object.keys(paths).length) continue;

    fs.writeFileSync(path.join(iconDir, `${name}.${t.ext}`), t.emit(name, paths));
    exports.push(`export { default as ${name} } from "./icons/${name}.${t.ext}";`);
    names.push(name);
  }

  fs.writeFileSync(path.join(base, "index.js"), exports.join("\n") + "\n");

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
