import { createElement } from "react";

const p = {"thin":{"stroke":"M17.5005 0H18.0005V24H17.5005V0ZM6.00049 24V0H6.50049V24H6.00049Z"},"ultralight":{"stroke":"M17.0005 0H18.0005V24H17.0005V0ZM6.00049 24V0H7.00049V24H6.00049Z"},"light":{"stroke":"M16.5005 0H18.0005V24H16.5005V0ZM6.00049 24V0H7.50049V24H6.00049Z"},"regular":{"stroke":"M16.0005 0H18.0005V24H16.0005V0ZM6.00049 24V0H8.00049V24H6.00049Z"},"medium":{"stroke":"M15.6755 0H18.3255V24H15.6755V0ZM5.67549 24V0H8.32549V24H5.67549Z"},"semibold":{"stroke":"M15.3755 0H18.6755V24H15.3755V0ZM5.32549 24V0H8.62549V24H5.32549Z"},"bold":{"stroke":"M15.0505 0H19.0005V24H15.0505V0ZM5.00049 24V0H8.95049V24H5.00049Z"}};

export default function Pause({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
