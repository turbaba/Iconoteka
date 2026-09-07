# Iconoteka

A universal, open-source library of precisely designed pictograms.

[Website](https://beta.iconoteka.com) · [Figma Plugin](https://www.figma.com/community/plugin/1675995752572535073/iconoteka) · [License](LICENSE)

| | |
|---|---|
| **1 298** icons | from rapid prototyping to real-world wayfinding systems |
| **7** weights | Thin, Ultralight, Light, Regular, Medium, Semibold, Bold |
| **2** styles | stroke and fill, across every weight |
| **14 942** shapes | complete coverage for almost any use case |
| **23** categories | Arrows, Interface, Hardware, Nature, Transportation, … |

## Install

```bash
npm install iconoteka
```

Or pull `icons.json` straight from the CDN:

```
https://cdn.jsdelivr.net/gh/turbaba/Iconoteka@02.00.08/icons.json
```

Pin the tag rather than `@main` — jsDelivr caches branch URLs for up to 7 days.

## Usage

`icons.json` holds one entry per icon with every variant nested inside:

```json
{
  "name": "leaf-ecology-nature-natural-leaves-eco-green-organic-plant-wind",
  "displayName": "Leaf",
  "searchTerms": ["leaf", "ecology", "nature", "natural", "leaves"],
  "category": "Nature",
  "variants": {
    "regular": { "stroke": "M12 2.5…", "fill": "M12 2.5…" }
  }
}
```

The first segment of `name` is the icon's identity; the rest are search-only
aliases. A curated selection carries `"popular": true`, and `meta` lists the
same set by identity:

```json
"meta": {
  "version": "02.00.08",
  "count": 1298,
  "categories": 23,
  "popular": ["ai", "alert", "bank_card", "bell", "…"]
}
```

Popular is a flag, not a category — no icon or file is stored twice. Weights are keyed `thin`, `ultralight`, `light`, `regular`, `medium`,
`semibold`, `bold`, each with `stroke` and/or `fill` holding an SVG path.

Raw SVGs live under `Icons/{Category}/`, named
`{keywords}-{weight}-{style}.svg` — weight is one of `t u l r m s b`, style is
`f` (fill) or `s` (stroke).

Rebuild `icons.json` from the SVGs with:

```bash
node scripts/build.js
```

## Design

**24-point grid** — every icon is built on a 24px grid, so straight lines stay
crisp at 24, 48, 96px and beyond, and the set sits comfortably alongside other
popular libraries.

**Advanced optics** — deliberate overshoots, density-based weight modularity
and optical stroke compensation throughout.

**Bracketing system** — preserves structural integrity across all seven
weights. Unlike stroke-based sets that simply scale outlines, legibility and
visual balance hold at both extremes.

**System architecture** — a structured metaphor hierarchy, a 5° geometric angle
rule, tiered corner rounding and modular components keep the library
consistent at production scale.

**Universality** — geometric construction and high visual clarity keep the
icons legible across products and industries that demand contrast and
structural consistency.

## License

MIT — see [LICENSE](LICENSE). Free for personal and commercial use, including
in closed-source products. No permission needed, no fee. Credit isn't
required, though it's always appreciated.

## Author

Built by [Oleg Turbaba](https://turbaba.com), Brand Design Director at
[Clay Global](https://clay.global) — a multidisciplinary designer working at
the intersection of brand identity, digital products and visual experiences.

For enquiries, collaborations, interviews or sponsorships:
[olegturbaba@gmail.com](mailto:olegturbaba@gmail.com)

[Instagram](https://www.instagram.com/turbaba/) ·
[LinkedIn](https://www.linkedin.com/in/oleg-turbaba-35438828/) ·
[Behance](https://www.behance.net/turbaba)

Sharing your work? Mention [@iconoteka](https://www.instagram.com/iconoteka/)
on Instagram, LinkedIn or [X](https://x.com/iconoteka).
