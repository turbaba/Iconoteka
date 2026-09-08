import { createElement } from "react";

const p = {"thin":{"stroke":"M15.5005 4.1748L15.1505 4.5248L12.2505 1.5998V23.0248H11.7505V1.5998L8.85049 4.5248L8.50049 4.1748L12.0005 0.674805L15.5005 4.1748Z"},"ultralight":{"stroke":"M15.5005 4.1748L14.8255 4.8498L12.5005 2.3498V23.0248H11.5005V2.3498L9.17549 4.8498L8.50049 4.1748L12.0005 0.674805L15.5005 4.1748Z"},"light":{"stroke":"M15.1754 3.8498H12.7504V23.0248H11.2504V3.8498H8.82544L12.0004 0.674805L15.1754 3.8498Z"},"regular":{"stroke":"M15.5005 4.1748H13.0005V23.0248H11.0005V4.1748H8.50049L12.0005 0.674805L15.5005 4.1748Z"},"medium":{"stroke":"M16.2505 4.92481H13.3005V23.0248H10.7005V4.92481H7.75049L12.0005 0.674805L16.2505 4.92481Z"},"semibold":{"stroke":"M17.0005 5.6748H13.6255V23.0248H10.3755V5.6748H7.00049L12.0005 0.674805L17.0005 5.6748Z"},"bold":{"stroke":"M17.7505 6.42481H13.9255V23.0248H10.0755V6.42481H6.25049L12.0005 0.674805L17.7505 6.42481Z"}};
const f = null;

export default function ArrowExtraThinUp({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
