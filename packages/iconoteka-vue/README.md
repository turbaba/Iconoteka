# iconoteka-vue

[Iconoteka](https://beta.iconoteka.com) icons as Vue components — 1298
icons in 7 weights, stroke throughout and fill on 954 of them.

```bash
npm install iconoteka-vue
```

```vue
<script setup>
import { Bell } from "iconoteka-vue";
</script>

<template>
  <Bell />
  <Bell weight="bold" variant="fill" :size="32" />
</template>
```

## Props

| prop | type | default | |
|---|---|---|---|
| `weight` | `thin` · `ultralight` · `light` · `regular` · `medium` · `semibold` · `bold` | `regular` | stroke thickness |
| `variant` | `stroke` · `fill` | `stroke` | outline or solid |

Not every icon has a fill at every weight — 817 do at all seven, 137 at some.
Asking for a fill that doesn't exist falls back to the stroke rather than
rendering nothing.
| `size` | number · string | `24` | width and height |

Anything else is spread onto the `<svg>`. Icons paint with
`fill="currentColor"`, so they inherit the surrounding text colour.

Every icon is its own module, so bundlers drop the ones you don't import.

Named `variant` rather than `style` because `style` collides with the
reserved DOM prop. Icons whose name starts with a digit are prefixed with
`Icon` — `3dscan` becomes `Icon3dScan` — since identifiers can't start
with a number.

MIT © Oleg Turbaba
