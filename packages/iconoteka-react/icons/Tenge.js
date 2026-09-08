import { createElement } from "react";

const p = {"thin":{"stroke":"M11.9985 21V6.65H5.24854V6.15H18.7485V6.65H12.4985V21H11.9985ZM5.24854 3.5V3H18.7485V3.5H5.24854Z"},"ultralight":{"stroke":"M11.6736 21V7.375H5.17358V6.45H18.8236V7.375H12.6736V21H11.6736ZM5.17358 3.925V3H18.8236V3.925H5.17358Z"},"light":{"stroke":"M11.3235 21V8.125H5.07349V6.75H18.9235V8.125H12.8235V21H11.3235ZM5.07349 4.375V3H18.9235V4.375H5.07349Z"},"regular":{"stroke":"M10.9985 21V8.85H4.99854V7.05H18.9985V8.85H12.9985V21H10.9985ZM4.99854 4.8V3H18.9985V4.8H4.99854Z"},"medium":{"stroke":"M10.6648 21V9.675H4.83984V7.375H19.1648V9.675H13.3398V21H10.6648ZM4.83984 5.325V3H19.1648V5.325H4.83984Z"},"semibold":{"stroke":"M10.8317 21V10.525H5.15674V7.675H19.8317V10.525H14.1567V21H10.8317ZM5.15674 5.825V3H19.8317V5.825H5.15674Z"},"bold":{"stroke":"M10.498 21V11.35H4.99805V8H19.998V11.35H14.498V21H10.498ZM4.99805 6.35V3H19.998V6.35H4.99805Z"}};
const f = null;

export default function Tenge({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
