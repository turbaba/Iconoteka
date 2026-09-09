import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M14.0005 20.025V20.5H3.50049V10H4.00049V20.025H14.0005ZM20.5005 3.5V14H20.0005V3.975H10.0005V3.5H20.5005Z"},"ultralight":{"stroke":"M14.0005 19.525V20.5H3.50049V10H4.50049V19.55L14.0005 19.525ZM20.5005 3.5V14H19.5005V4.45L10.0005 4.475V3.5H20.5005Z"},"light":{"stroke":"M14.0005 19.05V20.5H3.50049V10H5.00049L4.97549 19.05H14.0005ZM20.5005 3.5V14H19.0005L19.0255 4.95H10.0005V3.5H20.5005Z"},"regular":{"stroke":"M14.0005 18.55V20.5H3.50049V10H5.50049L5.47549 18.575L14.0005 18.55ZM20.5005 3.5V14H18.5005L18.5255 5.425L10.0005 5.45V3.5H20.5005Z"},"medium":{"stroke":"M14.0005 17.975V20.5H3.50049V10H6.07549L6.05049 18L14.0005 17.975ZM20.5005 3.5V14H17.9255L17.9505 6L10.0005 6.025V3.5H20.5005Z"},"semibold":{"stroke":"M14.0005 17.375V20.5H3.50049V10H6.67549L6.62549 17.425L14.0005 17.375ZM20.5005 3.5V14H17.3255L17.3755 6.575L10.0005 6.625V3.5H20.5005Z"},"bold":{"stroke":"M14.0005 16.8V20.5H3.50049V10H7.25049L7.20049 16.85L14.0005 16.8ZM20.5005 3.5V14H16.7505L16.8005 7.15L10.0005 7.2V3.5H20.5005Z"}};
const f = null;

const ChevronDownLeftUpRight = forwardRef(function ChevronDownLeftUpRight(
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

ChevronDownLeftUpRight.displayName = "ChevronDownLeftUpRight";

export default ChevronDownLeftUpRight;
