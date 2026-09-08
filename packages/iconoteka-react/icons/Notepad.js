import { createElement } from "react";

const p = {"thin":{"stroke":"M3.00049 21V3H16.4255L21.0005 7.575V21H3.00049ZM3.50049 20.525H20.5005V7.75L16.2255 3.475H3.50049V20.525Z","fill":"M3 21V3H16.425L21 7.575V21H3Z"},"ultralight":{"stroke":"M3.00049 21V3H16.4255L21.0005 7.575V21H3.00049ZM4.00049 20.05H20.0005V7.95L16.0005 3.95H4.00049V20.05Z"},"light":{"stroke":"M3.00049 21V3H16.4255L21.0005 7.575V21H3.00049ZM4.50049 19.55H19.5005V8.15L15.8005 4.45H4.50049V19.55Z"},"regular":{"stroke":"M3.00049 21V3H16.4255L21.0005 7.575V21H3.00049ZM5.00049 19.075H19.0005V8.35L15.5755 4.925H5.00049V19.075Z"},"medium":{"stroke":"M3.00049 21V3H16.4255L21.0005 7.575V21H3.00049ZM5.57549 18.475H18.4255V8.6L15.3505 5.525H5.57549V18.475Z"},"semibold":{"stroke":"M3.00049 21V3H16.4255L21.0005 7.6V21H3.00049ZM6.17549 17.9H17.8255V8.825L15.1255 6.1H6.17549V17.9Z"},"bold":{"stroke":"M3.00049 21V3H16.4255L21.0005 7.6V21H3.00049ZM6.75049 17.3H17.2505V9.075L14.9005 6.7H6.75049V17.3Z"}};
const f = p.thin.fill;

export default function Notepad({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
