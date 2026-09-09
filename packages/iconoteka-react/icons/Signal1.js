import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M3.00049 17H3.50049V21H3.00049V17Z"},"ultralight":{"stroke":"M3.00049 17H3.97549V21H3.00049V17Z"},"light":{"stroke":"M3.00049 17H4.42549V21H3.00049V17Z"},"regular":{"stroke":"M3.00049 17H4.90049V21H3.00049V17Z"},"medium":{"stroke":"M3.00049 17H5.47549V21H3.00049V17Z"},"semibold":{"stroke":"M3.00049 17H6.02549V21H3.00049V17Z"},"bold":{"stroke":"M3.00049 17H6.60049V21H3.00049V17Z"}};
const f = null;

const Signal1 = forwardRef(function Signal1(
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

Signal1.displayName = "Signal1";

export default Signal1;
