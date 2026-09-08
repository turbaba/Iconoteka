import { createElement } from "react";

const p = {"thin":{"stroke":"M15.6254 8.375V15.6H8.40039V15.1L15.1504 15.125L15.1254 8.375H15.6254Z"},"ultralight":{"stroke":"M15.6504 8.4V15.6H8.42539L8.40039 14.625L14.6754 14.65V8.375L15.6504 8.4Z"},"light":{"stroke":"M15.6004 8.375V15.575H8.40039V14.125L14.2254 14.175L14.1504 8.375H15.6004Z"},"regular":{"stroke":"M15.6254 8.375V15.6H8.42539L8.40039 13.675L13.7504 13.725L13.7004 8.375H15.6254Z"},"medium":{"stroke":"M15.6254 8.375V15.6H8.42539L8.40039 13.2L13.3004 13.275L13.2504 8.375H15.6254Z"},"semibold":{"stroke":"M15.6254 8.375V15.6H8.42539L8.40039 12.725L12.8254 12.8L12.7504 8.375H15.6254Z"},"bold":{"stroke":"M15.6254 8.375V15.6H8.40039V12.25L12.3754 12.35L12.2754 8.375H15.6254Z"}};
const f = null;

export default function ChevronSmallDownRight({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
