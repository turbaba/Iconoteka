#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { createRequire } from "node:module";
import { search, findIcon } from "./search.js";

const require = createRequire(import.meta.url);
const data = require("iconoteka");
const ICONS = data.icons;

// Read from package.json so the reported version can never drift from the
// published one — it silently did, reporting 0.1.3 while shipping as 0.1.4.
const PKG_VERSION = require("../package.json").version;

const WEIGHTS = ["thin", "ultralight", "light", "regular", "medium", "semibold", "bold"];
const STYLES  = ["stroke", "fill"];

const identity = i => i.name.split("-")[0];

/**
 * A solid form often doesn't change with stroke weight, so those icons store
 * one fill instead of seven identical copies. Asking for it at any weight
 * returns that shared fill — it isn't missing, it's shared.
 */
const sharedFill = icon => {
  for (const w of WEIGHTS) if (icon.variants[w]?.fill) return icon.variants[w].fill;
  return null;
};

const hasFill = icon => Boolean(sharedFill(icon));

const available = icon => {
  const weights = Object.keys(icon.variants).length;
  const perWeightFill = WEIGHTS.filter(w => icon.variants[w]?.fill).length;
  const fill = perWeightFill === 0 ? "stroke only"
             : perWeightFill === weights ? "fill varies by weight"
             : "one shared fill";
  return `${weights} weights, ${fill}`;
};

function svgFor(icon, weight, style) {
  const v = icon.variants[weight];
  if (!v) return { error: `"${identity(icon)}" has no ${weight} weight. Available: ${Object.keys(icon.variants).join(", ")}` };

  let d = v[style];
  let note = "";
  if (!d && style === "fill") {
    d = sharedFill(icon);
    if (d) note = " (shared fill — this icon's solid form is the same at every weight)";
  }
  if (!d) return { error: `"${identity(icon)}" has no fill; it is a stroke-only icon. Use style "stroke".` };

  return {
    note,
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="${d}" fill="currentColor"/>\n</svg>`,
  };
}

const text = s => ({ content: [{ type: "text", text: s }] });

const server = new McpServer({ name: "iconoteka", version: PKG_VERSION });

server.registerTool("search_icons", {
  title: "Search Iconoteka icons",
  description:
    "Search the Iconoteka icon library by meaning or name. Returns ranked matches " +
    "with the weights and styles available for each. Use this before get_icon to " +
    "find the right icon name.",
  inputSchema: {
    query: z.string().describe('What the icon should depict, e.g. "notification bell" or "shopping cart"'),
    category: z.string().optional().describe("Restrict to one category, e.g. Interface, Nature, Transportation"),
    limit: z.number().int().min(1).max(50).optional().describe("Max results (default 20)"),
  },
}, async ({ query, category, limit }) => {
  const hits = search(ICONS, query, { category, limit: limit ?? 20 });
  if (!hits.length) {
    return text(
      `No icons match "${query}".\n\n` +
      `Try a broader word, or list_categories to browse. ` +
      `Missing icons can be requested at https://iconoteka.com/about.html`
    );
  }
  const lines = hits.map(({ icon, score }) =>
    `${identity(icon)}  [${icon.category}]${icon.popular ? " ★popular" : ""}  score ${score}\n` +
    `    variants: ${available(icon)}\n` +
    `    also matches: ${icon.searchTerms.slice(1, 7).join(", ")}`
  );
  return text(`${hits.length} match(es) for "${query}":\n\n${lines.join("\n\n")}`);
});

server.registerTool("get_icon", {
  title: "Get an Iconoteka icon as SVG",
  description:
    "Return paste-ready SVG markup for one icon. The path uses fill=\"currentColor\", " +
    "so it inherits the surrounding text colour. Licensed MIT — free to use, no attribution required.",
  inputSchema: {
    name: z.string().describe('Icon name from search_icons, e.g. "bell"'),
    weight: z.enum(WEIGHTS).optional().describe("Default regular"),
    style: z.enum(STYLES).optional().describe("Default stroke"),
  },
}, async ({ name, weight, style }) => {
  const icon = findIcon(ICONS, name);
  if (!icon) {
    const near = search(ICONS, name, { limit: 5 }).map(h => identity(h.icon));
    return text(
      `No icon called "${name}".` +
      (near.length ? ` Did you mean: ${near.join(", ")}?` : ` Try search_icons first.`)
    );
  }
  const w = weight ?? "regular", s = style ?? "stroke";
  const out = svgFor(icon, w, s);
  if (out.error) return text(out.error);
  return text(`${identity(icon)} — ${w} ${s}${out.note} — ${icon.category}\n\n${out.svg}`);
});

server.registerTool("list_categories", {
  title: "List Iconoteka categories",
  description: "List every category with how many icons it holds.",
  inputSchema: {},
}, async () => {
  const counts = {};
  for (const i of ICONS) counts[i.category] = (counts[i.category] || 0) + 1;
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1])
    .map(([c, n]) => `  ${String(n).padStart(4)}  ${c}`);
  return text(
    `${ICONS.length} icons across ${Object.keys(counts).length} categories ` +
    `(v${data.meta.version}), 7 weights x 2 styles:\n\n${rows.join("\n")}`
  );
});

await server.connect(new StdioServerTransport());
