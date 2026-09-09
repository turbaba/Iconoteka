import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M21.7505 15.825L15.5005 22.075L9.25049 15.825L9.60049 15.475L15.2505 21.175V3.475H3.00049V3H15.7505V21.175L21.4005 15.475L21.7505 15.825Z"},"ultralight":{"stroke":"M21.9005 15.675L15.5005 22.075L9.10049 15.675L9.77549 14.975L15.0005 20.375V3.95H3.00049V3H16.0005V20.375L21.2255 14.975L21.9005 15.675Z"},"light":{"stroke":"M22.0755 15.5L15.5005 22.075L8.92549 15.5L9.95049 14.5L14.7755 19.575V4.425H3.00049V3H16.2255V19.575L21.0505 14.5L22.0755 15.5Z"},"regular":{"stroke":"M22.2255 15.35L15.5005 22.075L8.77549 15.35L10.1255 14L14.5255 18.75V4.9H3.00049V3H16.4755V18.75L20.8755 14L22.2255 15.35Z"},"medium":{"stroke":"M22.2505 15.325L15.5005 22.075L8.75049 15.325L10.5505 13.525L14.2255 17.65V5.55H3.00049V3H16.7755V17.65L20.4505 13.525L22.2505 15.325Z"},"semibold":{"stroke":"M20.6755 16.9L15.5005 22.075L10.3255 16.9H13.9255V6.125H3.00049V3H17.0755V16.9H20.6755Z"},"bold":{"stroke":"M21.2505 16.325L15.5005 22.075L9.75049 16.325H13.6255V6.7H3.00049V3H17.3755V16.325H21.2505Z"}};
const f = null;

const ArrowCornerDownRight = forwardRef(function ArrowCornerDownRight(
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

ArrowCornerDownRight.displayName = "ArrowCornerDownRight";

export default ArrowCornerDownRight;
