import { createElement } from "react";

const p = {"thin":{"stroke":"M21.0005 12.425H3.00049V12.05H21.0005V12.425ZM21.0005 3.5H3.00049V3H21.0005V3.5ZM21.0005 21H3.00049V20.75H21.0005V21Z"},"ultralight":{"stroke":"M21.0005 12.85H3.00049V11.95H21.0005V12.85ZM21.0005 4.225H3.00049V3H21.0005V4.225ZM21.0005 21H3.00049V20.45H21.0005V21Z"},"light":{"stroke":"M21.0005 13.275H3.00049V11.875H21.0005V13.275ZM21.0005 4.95H3.00049V3H21.0005V4.95ZM21.0005 21H3.00049V20.125H21.0005V21Z"},"regular":{"stroke":"M21.0005 13.7H3.00049V11.775H21.0005V13.7ZM21.0005 5.675H3.00049V3H21.0005V5.675ZM21.0005 21H3.00049V19.825H21.0005V21Z"},"medium":{"stroke":"M21.0005 14.05H3.00049V11.6H21.0005V14.05ZM21.0005 6.35H3.00049V3H21.0005V6.35ZM21.0005 21H3.00049V19.4H21.0005V21Z"},"semibold":{"stroke":"M21.0005 14.375H3.00049V11.45H21.0005V14.375ZM21.0005 7.025H3.00049V3H21.0005V7.025ZM21.0005 21H3.00049V18.975H21.0005V21Z"},"bold":{"stroke":"M21.0005 14.725H3.00049V11.275H21.0005V14.725ZM21.0005 7.7H3.00049V3H21.0005V7.7ZM21.0005 21H3.00049V18.55H21.0005V21Z"}};
const f = null;

export default function LineWeight({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
