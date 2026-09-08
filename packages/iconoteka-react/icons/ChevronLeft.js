import { createElement } from "react";

const p = {"thin":{"stroke":"M17.3003 21.875L7.42529 12L17.3003 2.125L17.6503 2.475L8.12529 12L17.6503 21.525L17.3003 21.875Z"},"ultralight":{"stroke":"M16.9507 21.875L7.07568 12L16.9507 2.125L17.6507 2.825L8.45068 12L17.6507 21.175L16.9507 21.875Z"},"light":{"stroke":"M16.6256 21.9001L6.72559 12.0001L16.6256 2.1001L17.6506 3.1501L8.75059 12.0001L17.6506 20.8501L16.6256 21.9001Z"},"regular":{"stroke":"M16.2755 21.9001L6.37549 12.0001L16.2755 2.1001L17.6505 3.5001L9.07549 12.0001L17.6505 20.5001L16.2755 21.9001Z"},"medium":{"stroke":"M15.8507 21.9001L5.95068 12.0001L15.8507 2.1001L17.6507 3.9001L9.50068 12.0001L17.6507 20.1001L15.8507 21.9001Z"},"semibold":{"stroke":"M15.4503 21.9001L5.55029 12.0001L15.4503 2.1001L17.6503 4.3251L9.90029 12.0001L17.6503 19.6751L15.4503 21.9001Z"},"bold":{"stroke":"M15.0255 21.9001L5.12549 12.0001L15.0255 2.1001L17.6505 4.7251L10.3255 12.0001L17.6505 19.2751L15.0255 21.9001Z"}};

export default function ChevronLeft({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
