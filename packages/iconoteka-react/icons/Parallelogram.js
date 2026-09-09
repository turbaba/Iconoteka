import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M22.1255 3.475H4.90048L1.87548 20.525H18.8505L22.1255 3.475ZM22.7255 3L19.2755 21H1.27548L4.47548 3H22.7255Z","fill":"M22.725 3L19.275 21H1.27499L4.47499 3H22.725Z"},"ultralight":{"stroke":"M21.5505 3.95H5.30048L2.45048 20.05H18.4505L21.5505 3.95ZM22.7255 3L19.2755 21H1.27548L4.47548 3H22.7255Z"},"light":{"stroke":"M20.9505 4.425H5.70048L3.02548 19.575H18.0505L20.9505 4.425ZM22.7255 3L19.2755 21H1.27548L4.47548 3H22.7255Z"},"regular":{"stroke":"M20.3755 4.9H6.12548L3.60048 19.1H17.6505L20.3755 4.9ZM22.7255 3L19.2755 21H1.27548L4.47548 3H22.7255Z"},"medium":{"stroke":"M19.6505 5.475H6.65048L4.32548 18.525H17.1505L19.6505 5.475ZM22.7255 3L19.2755 21H1.27548L4.47548 3H22.7255Z"},"semibold":{"stroke":"M18.9005 6.075H7.15048L5.05048 17.925H16.6255L18.9005 6.075ZM22.7255 3L19.2755 21H1.27548L4.47548 3H22.7255Z"},"bold":{"stroke":"M18.1505 6.65H7.67548L5.77548 17.35H16.1005L18.1505 6.65ZM22.7255 3L19.2755 21H1.27548L4.47548 3H22.7255Z"}};
const f = p.thin.fill;

const Parallelogram = forwardRef(function Parallelogram(
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

Parallelogram.displayName = "Parallelogram";

export default Parallelogram;
