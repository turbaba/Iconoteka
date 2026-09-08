import { createElement } from "react";

const p = {"thin":{"stroke":"M21.5005 21.15L21.1505 21.5L11.6505 12L21.1505 2.5L21.5005 2.85L12.3505 12L21.5005 21.15ZM3.00049 21V3H3.50049V21H3.00049Z"},"ultralight":{"stroke":"M21.5005 20.8L20.8005 21.5L11.3005 12L20.8005 2.5L21.5005 3.2L12.6505 12L21.5005 20.8ZM3.00049 21V3H4.00049V21H3.00049Z"},"light":{"stroke":"M21.5005 20.45L20.4755 21.5L10.9505 12L20.4755 2.5L21.5005 3.55L12.9755 12L21.5005 20.45ZM3.00049 21V3H4.50049V21H3.00049Z"},"regular":{"stroke":"M21.5005 20.1L20.1255 21.5L10.6005 12L20.1255 2.5L21.5005 3.9L13.2755 12L21.5005 20.1ZM3.00049 21V3H5.00049V21H3.00049Z"},"medium":{"stroke":"M21.5005 19.65L19.6755 21.5L10.1505 12L19.6755 2.5L21.5005 4.35L13.6755 12L21.5005 19.65ZM3.00049 21V3H5.62549V21H3.00049Z"},"semibold":{"stroke":"M21.5005 19.225L19.2505 21.5L9.72549 12L19.2505 2.5L21.5005 4.775L14.1005 12L21.5005 19.225ZM3.00049 21V3H6.22549V21H3.00049Z"},"bold":{"stroke":"M21.5005 18.775L18.8005 21.5L9.27549 12L18.8005 2.5L21.5005 5.225L14.5005 12L21.5005 18.775ZM3.00049 21V3H6.85049V21H3.00049Z"}};

export default function First({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
