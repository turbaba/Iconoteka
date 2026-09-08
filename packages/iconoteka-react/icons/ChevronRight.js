import { createElement } from "react";

const p = {"thin":{"stroke":"M6.72549 21.875L6.37549 21.525L15.9005 12L6.37549 2.475L6.72549 2.125L16.6005 12L6.72549 21.875Z"},"ultralight":{"stroke":"M7.07549 21.875L6.37549 21.175L15.5755 12L6.37549 2.825L7.07549 2.125L16.9505 12L7.07549 21.875Z"},"light":{"stroke":"M7.40049 21.9001L6.37549 20.8501L15.2755 12.0001L6.37549 3.1501L7.40049 2.1001L17.3005 12.0001L7.40049 21.9001Z"},"regular":{"stroke":"M7.75049 21.9001L6.37549 20.5001L14.9505 12.0001L6.37549 3.5001L7.75049 2.1001L17.6505 12.0001L7.75049 21.9001Z"},"medium":{"stroke":"M8.17549 21.9001L6.37549 20.1001L14.5255 12.0001L6.37549 3.9001L8.17549 2.1001L18.0755 12.0001L8.17549 21.9001Z"},"semibold":{"stroke":"M8.57549 21.9001L6.37549 19.6751L14.1255 12.0001L6.37549 4.3251L8.57549 2.1001L18.4755 12.0001L8.57549 21.9001Z"},"bold":{"stroke":"M9.00049 21.9001L6.37549 19.2751L13.7005 12.0001L6.37549 4.7251L9.00049 2.1001L18.9005 12.0001L9.00049 21.9001Z"}};
const f = null;

export default function ChevronRight({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
