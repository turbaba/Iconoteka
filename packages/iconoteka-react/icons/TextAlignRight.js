import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M9 20.525H21V21H9V20.525ZM3 14.7H21V15.175H3V14.7ZM9 8.825H21V9.3H9V8.825ZM3 3H21V3.475H3V3Z"},"ultralight":{"stroke":"M9 20.075H21V21H9V20.075ZM3 14.4H21V15.325H3V14.4ZM9 8.675H21V9.6H9V8.675ZM3 3H21V3.925H3V3Z"},"light":{"stroke":"M9 19.65H21V21H9V19.65ZM3 14.1H21V15.45H3V14.1ZM9 8.55H21V9.9H9V8.55ZM3 3H21V4.35H3V3Z"},"regular":{"stroke":"M9 19.2H21V21H9V19.2ZM3 13.8H21V15.6H3V13.8ZM9 8.4H21V10.2H9V8.4ZM3 3H21V4.8H3V3Z"},"medium":{"stroke":"M9 18.725H21V21H9V18.725ZM3 13.5H21V15.775H3V13.5ZM9 8.225H21V10.5H9V8.225ZM3 3H21V5.275H3V3Z"},"semibold":{"stroke":"M3 18H21V21H3V18ZM9 10.5H21V13.5H9V10.5ZM3 3H21V6H3V3Z"},"bold":{"stroke":"M3 17.4H21V21H3V17.4ZM9 10.2H21V13.8H9V10.2ZM3 3H21V6.6H3V3Z"}};
const f = null;

const TextAlignRight = forwardRef(function TextAlignRight(
  { weight = "regular", variant = "stroke", size = 24, ...rest }, ref
) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { ref, width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
});

TextAlignRight.displayName = "TextAlignRight";

export default TextAlignRight;
