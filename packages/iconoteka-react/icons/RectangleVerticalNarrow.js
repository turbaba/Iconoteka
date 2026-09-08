import { createElement } from "react";

const p = {"thin":{"stroke":"M5.00049 23.5V0.5H19.0005V23.5H5.00049ZM5.50049 23.025H18.5005V0.975H5.50049V23.025Z","fill":"M5 23.5V0.5H19V23.5H5Z"},"ultralight":{"stroke":"M5.00049 23.5V0.5H19.0005V23.5H5.00049ZM5.97549 22.55H18.0255V1.45H5.97549V22.55Z","fill":"M5.00049 23.5V0.5H19.0005V23.5H5.00049Z"},"light":{"stroke":"M5.00049 23.5V0.5H19.0005V23.5H5.00049ZM6.47549 22.075H17.5255V1.925H6.47549V22.075Z","fill":"M5.00049 23.5V0.5H19.0005V23.5H5.00049Z"},"regular":{"stroke":"M5.00049 23.5V0.5H19.0005V23.5H5.00049ZM6.95049 21.6H17.0505V2.4H6.95049V21.6Z","fill":"M5.00049 23.5V0.5H19.0005V23.5H5.00049Z"},"medium":{"stroke":"M4.8255 23.5V0.5H19.1755V23.5H4.8255ZM7.4005 21.025H16.6005V2.975H7.4005V21.025Z","fill":"M4.8255 23.5V0.5H19.1755V23.5H4.8255Z"},"semibold":{"stroke":"M4.67548 23.5V0.5H19.3255V23.5H4.67548ZM7.85048 20.425H16.1505V3.575H7.85048V20.425Z","fill":"M4.67548 23.5V0.5H19.3255V23.5H4.67548Z"},"bold":{"stroke":"M4.50049 23.5V0.5H19.5005V23.5H4.50049ZM8.30049 19.85H15.7005V4.15H8.30049V19.85Z","fill":"M4.50049 23.5V0.5H19.5005V23.5H4.50049Z"}};

export default function RectangleVerticalNarrow({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
