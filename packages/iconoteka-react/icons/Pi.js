import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M5.49756 21V3H18.4976V21H17.9976V3.475H5.99756V21H5.49756Z"},"ultralight":{"stroke":"M5.32251 21V3H18.6725V21H17.6725V3.975H6.32251V21H5.32251Z"},"light":{"stroke":"M5.17261 21V3H18.8226V21H17.3226V4.45H6.67261V21H5.17261Z"},"regular":{"stroke":"M4.99756 21V3H18.9976V21H16.9976V4.95H6.99756V21H4.99756Z"},"medium":{"stroke":"M4.79004 21V3H19.215V21H16.54V5.5H7.46504V21H4.79004Z"},"semibold":{"stroke":"M5.08252 21V3H19.9075V21H16.5825V6.05H8.40752V21H5.08252Z"},"bold":{"stroke":"M4.875 21V3H20.125V21H16.125V6.6H8.875V21H4.875Z"}};
const f = null;

const Pi = forwardRef(function Pi(
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

Pi.displayName = "Pi";

export default Pi;
