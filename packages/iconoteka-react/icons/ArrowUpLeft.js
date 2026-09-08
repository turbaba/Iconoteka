import { createElement } from "react";

const p = {"thin":{"stroke":"M16.2755 4.5L4.82549 4.475L20.4755 20.1L20.1255 20.45L4.47549 4.825L4.50049 16.275H4.00049V4H16.2755V4.5Z"},"ultralight":{"stroke":"M16.5255 4.975L5.57549 4.9L20.4755 19.75L19.7755 20.45L4.90049 5.575L4.97549 16.525H4.00049V4H16.5255V4.975Z"},"light":{"stroke":"M16.7505 5.475L6.37549 5.325L20.4755 19.425L19.4505 20.45L5.35049 6.375L5.47549 16.75H4.00049V4H16.7505V5.475Z"},"regular":{"stroke":"M17.0005 5.95L7.15049 5.775L20.4755 19.075L19.1005 20.45L5.80049 7.15L5.95049 17H4.00049V4H17.0005V5.95Z"},"medium":{"stroke":"M17.2755 6.55L8.12549 6.3L20.4755 18.65L18.6755 20.45L6.30049 8.075L6.55049 17.275H4.00049V4H17.2755V6.55Z"},"semibold":{"stroke":"M17.5505 7.125L9.05049 6.825L20.4755 18.25L18.2755 20.45L6.85049 9.025L7.12549 17.525H4.00049V4H17.5505V7.125Z"},"bold":{"stroke":"M17.8255 7.725L10.0505 7.4L20.4755 17.825L17.8505 20.45L7.40049 10L7.72549 17.8H4.00049V4H17.8255V7.725Z"}};

export default function ArrowUpLeft({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
