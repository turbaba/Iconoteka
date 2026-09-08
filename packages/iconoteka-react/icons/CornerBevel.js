import { createElement } from "react";

const p = {"thin":{"stroke":"M20.5005 21V10.875L13.1005 3.475H3.00049V3H13.3005L21.0005 10.7V21H20.5005Z"},"ultralight":{"stroke":"M20.0005 21V11.075L12.9005 3.975H3.00049V3H13.3005L21.0005 10.7V21H20.0005Z"},"light":{"stroke":"M19.5005 21V11.275L12.7005 4.45H3.00049V3H13.3005L21.0005 10.7V21H19.5005Z"},"regular":{"stroke":"M19.0005 21V11.475L12.5005 4.95H3.00049V3H13.3005L21.0005 10.7V21H19.0005Z"},"medium":{"stroke":"M18.3755 21V11.725L12.2505 5.575H3.00049V3H13.3005L21.0005 10.7V21H18.3755Z"},"semibold":{"stroke":"M17.7755 21V11.975L11.9755 6.175H3.00049V3H13.3005L21.0005 10.7V21H17.7755Z"},"bold":{"stroke":"M17.1505 21V12.225L11.7255 6.8H3.00049V3H13.3005L21.0005 10.7V21H17.1505Z"}};
const f = null;

export default function CornerBevel({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
