import { createElement } from "react";

const p = {"thin":{"stroke":"M19.0755 3.475H4.92549L1.85049 20.525H22.1505L19.0755 3.475ZM19.5005 3L22.7505 21H1.25049L4.50049 3H19.5005Z","fill":"M19.525 3L22.75 21H1.25L4.475 3H19.525Z"},"ultralight":{"stroke":"M18.6755 3.975H5.32549L2.45049 20.025H21.5505L18.6755 3.975ZM19.5005 3L22.7505 21H1.25049L4.50049 3H19.5005Z"},"light":{"stroke":"M18.2505 4.45H5.75049L3.02549 19.55H20.9755L18.2505 4.45ZM19.5255 3L22.7505 21H1.25049L4.47549 3H19.5255Z"},"regular":{"stroke":"M17.8505 4.95H6.15049L3.62549 19.05H20.3755L17.8505 4.95ZM19.5255 3L22.7505 21H1.25049L4.47549 3H19.5255Z"},"medium":{"stroke":"M17.3255 5.525H6.67549L4.32549 18.475H19.6755L17.3255 5.525ZM19.5255 3L22.7505 21H1.25049L4.47549 3H19.5255Z"},"semibold":{"stroke":"M16.8005 6.075H7.20049L5.02549 17.925H18.9755L16.8005 6.075ZM19.5005 3L22.7505 21H1.25049L4.50049 3H19.5005Z"},"bold":{"stroke":"M16.2755 6.65H7.72549L5.72549 17.35H18.2755L16.2755 6.65ZM19.5005 3L22.7505 21H1.25049L4.50049 3H19.5005Z"}};
const f = p.thin.fill;

export default function Trapezium({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
