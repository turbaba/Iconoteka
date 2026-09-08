import { createElement } from "react";

const p = {"thin":{"stroke":"M11.8755 3.1L12.2255 2.75L21.5005 12L12.2255 21.25L11.8755 20.9L20.8005 12L11.8755 3.1ZM3.00049 3H3.50049V21H3.00049V3Z"},"ultralight":{"stroke":"M11.5255 3.45L12.2255 2.75L21.5005 12L12.2255 21.25L11.5255 20.55L20.1505 12L11.5255 3.45ZM3.00049 3H4.00049V21H3.00049V3Z"},"light":{"stroke":"M11.2005 3.8L12.2255 2.75L21.5005 12L12.2255 21.25L11.2005 20.2L19.4755 12L11.2005 3.8ZM3.00049 3H4.50049V21H3.00049V3Z"},"regular":{"stroke":"M10.8505 4.15L12.2255 2.75L21.5005 12L12.2255 21.25L10.8505 19.85L18.8255 12L10.8505 4.15ZM3.00049 3H5.00049V21H3.00049V3Z"},"medium":{"stroke":"M10.4255 4.575L12.2255 2.75L21.5005 12L12.2255 21.25L10.4255 19.425L17.9755 12L10.4255 4.575ZM3.00049 3H5.60049V21H3.00049V3Z"},"semibold":{"stroke":"M10.0005 5L12.2255 2.75L21.5005 12L12.2255 21.25L9.97549 19L17.1005 12L10.0005 5ZM3.00049 3H6.20049V21H3.00049V3Z"},"bold":{"stroke":"M9.57549 5.425L12.2255 2.75L21.5005 12L12.2255 21.25L9.55049 18.575L16.2505 12L9.57549 5.425ZM3.00049 3H6.80049V21H3.00049V3Z"}};
const f = null;

export default function EjectRight({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
