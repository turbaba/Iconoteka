import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M14.0005 20.5H3.50049V10H4.00049L3.97549 19.675L19.7005 3.95L10.0005 3.975V3.5H20.5005V14H20.0005L20.0255 4.325L4.30049 20.05L14.0005 20.025V20.5Z"},"ultralight":{"stroke":"M14.0005 20.5H3.50049V10H4.47549L4.37549 18.95L18.9755 4.35L10.0005 4.45V3.5H20.5005V14H19.5255L19.6255 5.075L5.05049 19.65L14.0005 19.55V20.5Z"},"light":{"stroke":"M14.0005 20.5H3.50049V10H4.95049L4.77549 18.225L18.2505 4.75L10.0005 4.925V3.5H20.5005V14H19.0505L19.2255 5.775L5.75049 19.25L14.0005 19.075V20.5Z"},"regular":{"stroke":"M14.0005 20.5H3.50049V10H5.42549L5.17549 17.5L17.5255 5.15L10.0005 5.4V3.5H20.5005V14H18.5755L18.8255 6.525L6.50049 18.85L14.0005 18.6V20.5Z"},"medium":{"stroke":"M14.0005 20.5H3.50049V10H5.92549L5.70049 16.6L16.6255 5.675L10.0005 5.925V3.5H20.5005V14H18.0755L18.3005 7.4L7.40049 18.325L14.0005 18.1V20.5Z"},"semibold":{"stroke":"M14.0005 20.5H3.50049V10H6.45049L6.22549 15.725L15.7755 6.175L10.0005 6.425V3.5H20.5005V14H17.5505L17.8005 8.275L8.25049 17.8L14.0005 17.6V20.5Z"},"bold":{"stroke":"M14.0005 20.5H3.50049V10H6.95049L6.75049 14.825L14.8505 6.725L10.0005 6.95V3.5H20.5005V14H17.0505L17.2755 9.15L9.15049 17.275L14.0005 17.1V20.5Z"}};
const f = null;

const ArrowDownLeftUpRight = forwardRef(function ArrowDownLeftUpRight(
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

ArrowDownLeftUpRight.displayName = "ArrowDownLeftUpRight";

export default ArrowDownLeftUpRight;
