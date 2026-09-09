import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M21.0005 3V21H3.00049V3H21.0005ZM3.50049 20.175L20.2005 3.475H3.50049V20.175ZM3.82549 20.525H20.5005V3.85L3.82549 20.525Z","fill":"M3 20.65V3H20.65L3 20.65ZM21 3.35V21H3.35L21 3.35Z"},"ultralight":{"stroke":"M21.0005 3V21H3.00049V3H21.0005ZM3.95049 19.4L19.4505 3.925H3.95049V19.4ZM4.60049 20.075H20.0505V4.625L4.60049 20.075Z","fill":"M3 20.3V3H20.3L3 20.3ZM21 3.7V21H3.7L21 3.7Z"},"light":{"stroke":"M21.0005 3V21H3.00049V3H21.0005ZM4.40049 18.65L18.6755 4.35H4.40049V18.65ZM5.32549 19.65H19.6005V5.375L5.32549 19.65Z","fill":"M3 19.95V3H19.95L3 19.95ZM21 4.05V21H4.05L21 4.05Z"},"regular":{"stroke":"M21.0005 3V21H3.00049V3H21.0005ZM4.85049 17.875L17.9255 4.8H4.85049V17.875ZM6.10049 19.2H19.1505V6.15L6.10049 19.2Z","fill":"M3 19.6V3H19.6L3 19.6ZM21 4.4V21H4.4L21 4.4Z"},"medium":{"stroke":"M21.0005 3V21H3.00049V3H21.0005ZM5.40049 16.95L17.0005 5.35H5.40049V16.95ZM7.00049 18.65H18.6005V7.05L7.00049 18.65Z","fill":"M3 19.6V3H19.6L3 19.6ZM21 4.4V21H4.4L21 4.4Z"},"semibold":{"stroke":"M21.0005 3V21H3.00049V3H21.0005ZM5.95049 16.05L16.1005 5.9H5.95049V16.05ZM7.90049 18.1H18.0505V7.95L7.90049 18.1Z","fill":"M3 19.6V3H19.6L3 19.6ZM21 4.4V21H4.4L21 4.4Z"},"bold":{"stroke":"M21.0005 3V21H3.00049V3H21.0005ZM6.50049 15.125L15.1755 6.45H6.50049V15.125ZM8.80049 17.55H17.5005V8.85L8.80049 17.55Z","fill":"M3 19.6V3H19.6L3 19.6ZM21 4.4V21H4.4L21 4.4Z"}};
const f = null;

const Ratio1x1 = forwardRef(function Ratio1x1(
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

Ratio1x1.displayName = "Ratio1x1";

export default Ratio1x1;
