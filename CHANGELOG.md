# Changelog

Library versions use the `02.00.08` form.

## 02.00.12 — 9 Sep 2026

- Icons now answer to the words developers actually type. `icons.json` carries
  a new `meta.aliasResolutions` table: 191 words mapped to the one icon that
  should answer them, so `trash` reaches `garbage` and `edit` reaches `pen`.
  Most were settled by resolving both sides to the same source glyph; seven
  contested ones by hand.
- The React, Vue and Svelte packages export those 191 words as components —
  `<Edit/>`, `<Deploy/>`, `<Terminal/>` — 3 213 alias exports in all. Each is
  the same module as the icon it names, so it adds nothing to a bundle.
- The MCP server resolves settled words directly, and ranks them above every
  other claimant in search. A word can now point at an icon that never carried
  it as a keyword.

## 02.00.11 — 9 Sep 2026

- Published to npm without a git tag, so the `meta.cdn` URL inside it points at
  a tag that does not exist. Use 02.00.12.

## 02.00.10 — 8 Sep 2026

- Restored the `morda` keyword on `face_big_smile`. It was removed in 02.00.06
  as an unrecognised token; it's deliberate and personal, like `dasha`, `dida`
  and `dora` on the heart.

## 02.00.09 — 7 Sep 2026

- Removed the white background rectangle from every SVG. It was a Figma export
  artifact — 15 286 of them across 14 942 files — and put a white box behind
  the icon on any non-white background.
- Paths now ship `fill="currentColor"` instead of `fill="black"`, so an icon
  inherits the surrounding text colour. Matches how Heroicons, Phosphor and
  Material Symbols ship.

`icons.json` is unaffected: the build only ever extracted the `<path>` data.

## 02.00.08 — 7 Sep 2026

- `meta.popular` lists the curated selection by icon identity, so consumers get
  it from `icons.json` alone — `scripts/popular.json` is repo-only.
- `meta.categories` added.

## 02.00.07 — 7 Sep 2026

- **"Popular" is no longer a category.** It was a duplicate of 38 icons that
  already live in other categories — 428 duplicated SVGs, and every consumer
  iterating `icons` got those 38 twice.
- Those icons now carry `"popular": true` on their real entry. The curated
  selection lives in `scripts/popular.json`, keyed by icon identity.
- `icons.json` is 1 298 entries (the Popular duplicates are no longer double-counted) and 14 942
  shapes, matching the published figures.
- `meta.cdn` now pins the release tag instead of `@main`, which jsDelivr
  caches for up to 7 days.

**Migration:** anything filtering `category === "Popular"` should read the
`popular` flag instead. Category lists drop from 24 to 23.

## 02.00.06 — 5 Sep 2026

- Fixed malformed search keywords across the library: `flowe` → `flower`,
  `gamedie` → `game_die`, `nofly` → `no_fly`, `wayout` → `way_out`,
  `firstaid` → `first_aid`, `halfmoon` → `half_moon`, `tincan` → `tin_can`,
  `number1` → `number_1`, `type7` → `type_7`, `leafs` → `leaves`
- Removed truncated and non-word keywords: `slider_hor`, `sliders_hor`,
  `foreverness`, `arrow_in_circled`, `homeplant`
- Added UK spelling variants as search-only aliases, with US spelling still
  primary: `colour`, `colours`, `colourful`, `centre`, `centred`, `catalogue`,
  `dialogue`, `favourite`, `defence`, `organise`, `organisation`,
  `jewellery`, `harbour`, `aeroplane`, `programme`
- 542 SVGs renamed, `icons.json` rebuilt

## 02.00.05 — 3 Sep 2026

- Reverted `displayName` formatting to the previous behaviour

## 02.00.04 — 2 Sep 2026

- Fixed the cloud family weight progression — broken ultralight masters meant
  the ultralight and thin weights were near-identical
- Naming cleanup across 24 keyword defects
- Real display names in `icons.json`

## 02.00.00 — Sep 2026

Version 2 release. Fully reworked icon library — 1 298 icons, 7 weights in 2
styles, new website, Figma plugin, MIT license, GitHub repository.

## Earlier

| Date | Version | Icons | Weights | |
|---|---|---|---|---|
| 26 Aug 2026 | | 1 298 | 7 weights, 2 styles | Every icon redrawn from scratch as clean vectors |
| 15 Mar 2021 | 1.0.2 | 1 040 | 4 weights, 2 styles | Updated icons |
| 17 Jun 2019 | 1.0.1 | 388 | 4 weights, 2 styles | iconoteka.com launched |
| 14 Jun 2019 | | 388 | 4 weights, 2 styles | Public beta released |
| 9 Mar 2019 | 1.0.0 | 237 | 4 weights, 2 styles | Global rework, revisions, Sport and Nature added |
| 28 Jul 2018 | 0.2.0 | 716 | 4 weights, 2 styles | Bold stroke and fill, rework |
| 3 Jun 2018 | 0.1.4 | 715 | 4 weights, 2 styles | Bold stroke and fill styles |
| 24 Apr 2018 | 0.1.3 | 309 | 2 weights | New categories added |
| 4 Mar 2018 | 0.1.2 | 227 | 2 weights | All icons categorised |
| 3 Mar 2018 | 0.1.1 | 226 | 2 weights | First public version |
| 20 Sep 2017 | | 13 | | Started the project |
| 24 May 2016 | | 3 | | Idea was born |
