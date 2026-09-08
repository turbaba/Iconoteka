import { createElement } from "react";

const p = {"thin":{"stroke":"M23.2505 6.675L12.2755 17.65L1.45049 6.8L1.50049 14.825H1.00049V6H9.82549V6.475L1.80049 6.45L12.2755 16.95L22.9005 6.325L23.2505 6.675Z"},"ultralight":{"stroke":"M23.2505 7L12.2755 17.975L1.85049 7.525L1.97549 15.05H1.00049V6H10.0505L10.0755 6.975L2.52549 6.85L12.2755 16.625L22.5755 6.325L23.2505 7Z"},"light":{"stroke":"M23.2505 7.325L12.2755 18.325L2.25049 8.3L2.42549 15.275L1.00049 15.3V6H10.3005L10.2755 7.425L3.22549 7.25L12.2755 16.3L22.2255 6.325L23.2505 7.325Z"},"regular":{"stroke":"M23.2505 7.65L12.2755 18.65L2.67549 9.05L2.90049 15.5H1.00049V6H10.5005V7.9L3.97549 7.675L12.2755 15.975L21.9005 6.325L23.2505 7.65Z"},"medium":{"stroke":"M23.2505 8.125L12.3005 19.1L3.20049 10L3.37549 15.5H1.00049V6H10.5005V8.35L4.95049 8.175L12.3005 15.5L21.4505 6.325L23.2505 8.125Z"},"semibold":{"stroke":"M23.2505 8.575L12.3005 19.55L3.52549 10.775L1.00049 13.3V6H8.32549L5.77549 8.525L12.3005 15.025L21.0005 6.325L23.2505 8.575Z"},"bold":{"stroke":"M23.2505 9.05L12.3255 20L3.70049 11.4L2.57549 12.55L1.00049 14.125V6H9.12549L6.42549 8.675L12.3255 14.55L20.5505 6.325L23.2505 9.05Z"}};
const f = null;

export default function CallMissed({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
