import { createElement } from "react";

const p = {"thin":{"stroke":"M17.1004 14.5248L16.7504 14.8748L12.0004 10.0998L7.25039 14.8748L6.90039 14.5248L12.0004 9.4248L17.1004 14.5248Z"},"ultralight":{"stroke":"M17.1004 14.3251L16.4254 15.0251L12.0004 10.5751L7.57539 15.0251L6.90039 14.3251L12.0004 9.2251L17.1004 14.3251Z"},"light":{"stroke":"M17.1004 14.1498L16.0754 15.1748L12.0004 11.0248L7.92539 15.1748L6.90039 14.1498L12.0004 9.0498L17.1004 14.1498Z"},"regular":{"stroke":"M17.1004 13.9501L15.7504 15.3251L12.0004 11.5001L8.25039 15.3251L6.90039 13.9501L12.0004 8.8501L17.1004 13.9501Z"},"medium":{"stroke":"M17.1004 13.7748L15.4254 15.4748L12.0004 11.9748L8.57539 15.4748L6.90039 13.7748L12.0004 8.6748L17.1004 13.7748Z"},"semibold":{"stroke":"M17.1004 13.6L15.0754 15.65L12.0004 12.45L8.92539 15.65L6.90039 13.6L12.0004 8.5L17.1004 13.6Z"},"bold":{"stroke":"M17.1004 13.4252L14.7504 15.8002L12.0004 12.9252L9.25039 15.8002L6.90039 13.4252L12.0004 8.3252L17.1004 13.4252Z"}};
const f = null;

export default function ChevronSmallUp({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
