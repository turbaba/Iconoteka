import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M5.75049 6.9248L12.0005 0.674805L18.2505 6.9248L17.9005 7.2748L12.2505 1.5998V23.0248H11.7505V1.5998L6.10049 7.2748L5.75049 6.9248Z"},"ultralight":{"stroke":"M5.47559 7.1998L12.0006 0.674805L18.5256 7.1998L17.8256 7.8998L12.5006 2.4248V23.0248H11.5006V2.4248L6.17559 7.8998L5.47559 7.1998Z"},"light":{"stroke":"M5.20044 7.4748L12.0004 0.674805L18.8004 7.4748L17.7754 8.49981L12.7504 3.2498V23.0248H11.2504V3.2498L6.22544 8.49981L5.20044 7.4748Z"},"regular":{"stroke":"M4.92554 7.7498L12.0005 0.674805L19.0755 7.7498L17.7005 9.1248L13.0005 4.0748V23.0248H11.0005V4.0748L6.30054 9.1248L4.92554 7.7498Z"},"medium":{"stroke":"M4.97559 7.69981L12.0006 0.674805L19.0256 7.69981L17.2256 9.49981L13.3006 5.1248V23.0248H10.7006V5.1248L6.77559 9.49981L4.97559 7.69981Z"},"semibold":{"stroke":"M6.82544 5.8498L12.0004 0.674805L17.1754 5.8498H13.6004V23.0248H10.4004V5.8498H6.82544Z"},"bold":{"stroke":"M6.25049 6.42481L12.0005 0.674805L17.7505 6.42481H13.9005V23.0248H10.1005V6.42481H6.25049Z"}};
const f = null;

const ArrowThinUp = forwardRef(function ArrowThinUp(
  { weight = "regular", variant = "stroke", size = 24, ...rest }, ref
) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { ref, width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
});

ArrowThinUp.displayName = "ArrowThinUp";

export default ArrowThinUp;
