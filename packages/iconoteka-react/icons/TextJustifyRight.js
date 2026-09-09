import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M21 3.475H3V3H21V3.475ZM21 21H9V20.525H21V21ZM21 15.175H3V14.7H21V15.175ZM21 9.3H3V8.825H21V9.3Z"},"ultralight":{"stroke":"M21 3.925H3V3H21V3.925ZM21 21H9V20.075H21V21ZM21 15.325H3V14.4H21V15.325ZM21 9.6H3V8.675H21V9.6Z"},"light":{"stroke":"M21 4.35H3V3H21V4.35ZM21 21H9V19.65H21V21ZM21 15.45H3V14.1H21V15.45ZM21 9.9H3V8.55H21V9.9Z"},"regular":{"stroke":"M21 4.8H3V3H21V4.8ZM21 21H9V19.2H21V21ZM21 15.6H3V13.8H21V15.6ZM21 10.2H3V8.4H21V10.2Z"},"medium":{"stroke":"M21 5.275H3V3H21V5.275ZM21 21H9V18.725H21V21ZM21 15.775H3V13.5H21V15.775ZM21 10.5H3V8.225H21V10.5Z"},"semibold":{"stroke":"M21 6H3V3H21V6ZM21 21H9V18H21V21ZM21 13.5H3V10.5H21V13.5Z"},"bold":{"stroke":"M21 6.6H3V3H21V6.6ZM21 21H9V17.4H21V21ZM21 13.8H3V10.2H21V13.8Z"}};
const f = null;

const TextJustifyRight = forwardRef(function TextJustifyRight(
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

TextJustifyRight.displayName = "TextJustifyRight";

export default TextJustifyRight;
