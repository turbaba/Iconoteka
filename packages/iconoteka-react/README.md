# iconoteka-react

[Iconoteka](https://beta.iconoteka.com) icons as React components — 1298
icons, seven weights, stroke and fill.

```bash
npm install iconoteka-react
```

```jsx
import { Bell, Heart } from "iconoteka-react";

<Bell />
<Bell weight="bold" variant="fill" size={32} />
<Heart className="text-red-500" />
```

## Props

| prop | type | default | |
|---|---|---|---|
| `weight` | `thin` · `ultralight` · `light` · `regular` · `medium` · `semibold` · `bold` | `regular` | stroke thickness |
| `variant` | `stroke` · `fill` | `stroke` | outline or solid |
| `size` | number · string | `24` | width and height |

Stroke and fill switch freely at any weight. Where an icon's solid form is the
same at every weight it's stored once and served for all of them, and where an
icon has no solid form the stroke renders.

Anything else is spread onto the `<svg>`. Icons paint with
`fill="currentColor"`, so they inherit the surrounding text colour.

Every icon is its own module, so bundlers drop the ones you don't import.

Named `variant` rather than `style` because `style` collides with the
reserved DOM prop. Icons whose name starts with a digit are prefixed with
`Icon` — `3dscan` becomes `Icon3dScan` — since identifiers can't start
with a number.

MIT © Oleg Turbaba
