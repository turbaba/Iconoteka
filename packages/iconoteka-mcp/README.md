# iconoteka-mcp

MCP server for [Iconoteka](https://iconoteka.com) — let an AI assistant
search 1 300 icons and hand back paste-ready SVG.

Ask for "a notification bell, medium weight" and the assistant returns the real
icon, rather than inventing a path or reaching for whatever library it happens
to remember.

## Setup

**Claude Code**

```bash
claude mcp add iconoteka -- npx -y iconoteka-mcp
```

**Claude Desktop / Cursor / Zed** — add to the MCP config:

```json
{
  "mcpServers": {
    "iconoteka": {
      "command": "npx",
      "args": ["-y", "iconoteka-mcp"]
    }
  }
}
```

No API key, no network calls at runtime — the icon data ships with the package.

## Tools

**`search_icons`** — find icons by meaning or name. Returns ranked matches with
the weights and styles each one has, plus its other keywords.

```
search_icons({ query: "notification bell" })
→ bell  [Interface] ★popular  score 900
      variants: thin:fill+stroke … bold:fill+stroke
      also matches: notification, notify, reminder, ring, sound
```

Optional `category` and `limit`. Ranking mirrors the website, so results match
what a person sees at iconoteka.com.

**`get_icon`** — SVG markup for one icon.

```
get_icon({ name: "bell", weight: "medium", style: "fill" })
→ <svg width="24" height="24" viewBox="0 0 24 24" …>
    <path d="M12 22.25C10.375…" fill="currentColor"/>
  </svg>
```

`weight` is `thin` `ultralight` `light` `regular` `medium` `semibold` `bold`
(default `regular`); `style` is `stroke` or `fill` (default `stroke`). The path
uses `currentColor`, so it inherits the surrounding text colour.

Most icons have all 14 variants; some have 7 or 8. Ask for one that doesn't
exist and the server tells you which are available.

**`list_categories`** — all 23 categories with icon counts.

## Support

Iconoteka is a free, open-source library created and maintained by one person.
Support its future development through a monthly
[Patreon](https://www.patreon.com/c/iconoteka) subscription or a one-time
[Ko-fi](https://ko-fi.com/iconoteka) donation.

## License

MIT — both this server and the icons. Free for personal and commercial use,
including closed-source. No attribution required.

The Iconoteka name and logo are not covered by the MIT grant.
