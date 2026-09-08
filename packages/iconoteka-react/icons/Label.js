import { createElement } from "react";

const p = {"thin":{"stroke":"M0.500977 19V5H19.976L24.001 12L19.976 19H0.500977ZM1.00098 18.525H19.676L23.426 12L19.676 5.475H1.00098V18.525Z","fill":"M0.5 19V5H19.975L24 12L19.975 19H0.5Z"},"ultralight":{"stroke":"M0.500977 19V5H19.976L24.001 12L19.976 19H0.500977ZM1.47598 18.05H19.401L22.876 12L19.401 5.95H1.47598V18.05Z","fill":"M0.5 19V5H19.975L24 12L19.975 19H0.5Z"},"light":{"stroke":"M0.500977 19V5H19.976L24.001 12L19.976 19H0.500977ZM1.97598 17.575H19.101L22.301 12L19.101 6.425H1.97598V17.575Z","fill":"M0.5 19V5H19.975L24 12L19.975 19H0.5Z"},"regular":{"stroke":"M0.500977 19V5H19.976L24.001 12L19.976 19H0.500977ZM2.45098 17.1H18.826L21.751 12L18.826 6.9H2.45098V17.1Z","fill":"M0.5 19V5H19.975L24 12L19.975 19H0.5Z"},"medium":{"stroke":"M0.500977 19.25V4.75H19.826L24.001 12L19.826 19.25H0.500977ZM3.05098 16.75H18.326L21.051 12L18.326 7.25H3.05098V16.75Z","fill":"M0.5 19.25V4.75H19.825L24 12L19.825 19.25H0.5Z"},"semibold":{"stroke":"M0.500977 19.5V4.5H19.701L24.001 12L19.701 19.5H0.500977ZM3.65098 16.4H17.851L20.376 12L17.851 7.6H3.65098V16.4Z","fill":"M0.5 19.5V4.5H19.7L24 12L19.7 19.5H0.5Z"},"bold":{"stroke":"M0.500977 19.75V4.25H19.551L24.001 12L19.551 19.75H0.500977ZM4.25098 16.05H17.351L19.676 12L17.351 7.95H4.25098V16.05Z","fill":"M0.5 19.75V4.25H19.55L24 12L19.55 19.75H0.5Z"}};
const f = null;

export default function Label({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
