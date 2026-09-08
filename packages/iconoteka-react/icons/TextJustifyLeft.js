import { createElement } from "react";

const p = {"thin":{"stroke":"M3 3.475V3H21V3.475H3ZM3 21V20.525H15V21H3ZM3 15.175V14.7H21V15.175H3ZM3 9.3V8.825H21V9.3H3Z"},"ultralight":{"stroke":"M3 3.925V3H21V3.925H3ZM3 21V20.075H15V21H3ZM3 15.325V14.4H21V15.325H3ZM3 9.6V8.675H21V9.6H3Z"},"light":{"stroke":"M3 4.35V3H21V4.35H3ZM3 21V19.65H15V21H3ZM3 15.45V14.1H21V15.45H3ZM3 9.9V8.55H21V9.9H3Z"},"regular":{"stroke":"M3 4.8V3H21V4.8H3ZM3 21V19.2H15V21H3ZM3 15.6V13.8H21V15.6H3ZM3 10.2V8.4H21V10.2H3Z"},"medium":{"stroke":"M3 5.275V3H21V5.275H3ZM3 21V18.725H15V21H3ZM3 15.775V13.5H21V15.775H3ZM3 10.5V8.225H21V10.5H3Z"},"semibold":{"stroke":"M3 6V3H21V6H3ZM3 21V18H15V21H3ZM3 13.5V10.5H21V13.5H3Z"},"bold":{"stroke":"M3 6.6V3H21V6.6H3ZM3 21V17.4H15V21H3ZM3 13.8V10.2H21V13.8H3Z"}};
const f = null;

export default function TextJustifyLeft({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
