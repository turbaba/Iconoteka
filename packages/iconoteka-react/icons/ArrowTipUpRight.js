import { createElement } from "react";

const p = {"thin":{"stroke":"M15.8255 2.25L22.0755 8.5L15.8255 14.75L15.4755 14.4L21.1755 8.75H3.50049V21H3.00049V8.275H21.2005L15.4755 2.6L15.8255 2.25Z"},"ultralight":{"stroke":"M15.6755 2.1001L22.0755 8.5001L15.6755 14.9001L14.9755 14.2251L20.4005 8.9751H3.97549V21.0001H3.00049V8.0251H20.4005L14.9755 2.7751L15.6755 2.1001Z"},"light":{"stroke":"M15.5005 1.9248L22.0755 8.4998L15.5005 15.0748L14.5005 14.0498L19.6255 9.1748H4.47549V20.9998H3.00049V7.7498H19.6005L14.5005 2.9498L15.5005 1.9248Z"},"regular":{"stroke":"M15.3505 1.7749L22.0755 8.4999L15.3505 15.2249L14.0005 13.8749L18.8255 9.3999H4.95049V20.9999H3.00049V7.4999H18.7505L14.0005 3.1249L15.3505 1.7749Z"},"medium":{"stroke":"M15.3505 1.7749L22.0755 8.4999L15.3505 15.2249L13.5755 13.4499L17.7005 9.7249H5.55049V20.9999H3.00049V7.2249H17.6505L13.5755 3.5499L15.3505 1.7749Z"},"semibold":{"stroke":"M16.9005 3.3252L22.0755 8.5002L16.9005 13.6752V9.9752H6.15049V21.0002H3.00049V6.8752H16.9005V3.3252Z"},"bold":{"stroke":"M16.3255 2.75L22.0755 8.5L16.3255 14.25V10.35H6.75049V21H3.00049V6.65H16.3255V2.75Z"}};

export default function ArrowTipUpRight({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
