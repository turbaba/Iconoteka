import { createElement } from "react";

const p = {"thin":{"stroke":"M4.00098 22.475V2H20.001V22.475L12.001 17.85L4.00098 22.475ZM4.50098 21.65L12.001 17.3L19.501 21.65V2.475H4.50098V21.65Z","fill":"M4 22.475V2H20V22.475L12 17.85L4 22.475Z"},"ultralight":{"stroke":"M4.00098 22.475V2H20.001V22.475L12.001 17.85L4.00098 22.475ZM5.00098 20.8L12.001 16.725L19.001 20.8V2.95H5.00098V20.8Z"},"light":{"stroke":"M4.00098 22.475V2H20.001V22.475L12.001 17.85L4.00098 22.475ZM5.50098 19.925L12.001 16.175L18.501 19.925V3.45H5.50098V19.925Z"},"regular":{"stroke":"M4.00098 22.475V2H20.001V22.475L12.001 17.85L4.00098 22.475ZM6.00098 19.075L12.001 15.6L18.001 19.075V3.925H6.00098V19.075Z"},"medium":{"stroke":"M4.00098 22.475V2H20.001V22.475L12.001 17.85L4.00098 22.475ZM6.57598 18.1L12.001 14.95L17.426 18.1V4.5H6.57598V18.1Z"},"semibold":{"stroke":"M4.00098 22.475V2H20.001V22.475L12.001 17.85L4.00098 22.475ZM7.12598 17.1L12.001 14.275L16.876 17.1V5.075H7.12598V17.1Z"},"bold":{"stroke":"M4.00098 22.475V2H20.001V22.475L12.001 17.85L4.00098 22.475ZM7.70098 16.125L12.001 13.625L16.301 16.125V5.65H7.70098V16.125Z"}};

export default function Bookmark({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
