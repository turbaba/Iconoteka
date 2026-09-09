import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M21.0005 21H3.00049V3H3.50049V20.525H21.0005V21ZM5.50049 5.575C12.6255 5.575 18.4505 11.4 18.4505 18.5H17.9505C17.9505 11.65 12.3505 6.05 5.50049 6.05V5.575Z"},"ultralight":{"stroke":"M21.0005 21H3.00049V3H3.97549V20.05H21.0005V21ZM6.00049 5.425C12.9505 5.425 18.6255 11.1 18.6255 18H17.6255C17.6255 11.6 12.4005 6.375 6.00049 6.375V5.425Z"},"light":{"stroke":"M21.0005 21H3.00049V3H4.47549V19.575H21.0005V21ZM6.50049 5.25C13.2505 5.25 18.7755 10.775 18.7755 17.5H17.3255C17.3255 11.55 12.4505 6.675 6.50049 6.675V5.25Z"},"regular":{"stroke":"M21.0005 21H3.00049V3H4.95049V19.1H21.0005V21ZM7.00049 5.1C13.5755 5.1 18.9505 10.475 18.9505 17H17.0005C17.0005 11.5 12.5005 7 7.00049 7V5.1Z"},"medium":{"stroke":"M21.0005 21H3.00049V3H5.55049V18.5H21.0005V21ZM7.57549 5.1C13.8755 5.1 18.9755 10.175 18.9755 16.425H16.5005C16.5005 11.5 12.5005 7.525 7.57549 7.525V5.1Z"},"semibold":{"stroke":"M21.0005 21H3.00049V3H6.15049V17.9H21.0005V21ZM8.17549 5.1C14.2005 5.1 18.9755 9.9 18.9755 15.875H16.0005C16.0005 11.525 12.5255 8.025 8.17549 8.025V5.1Z"},"bold":{"stroke":"M21.0005 21H3.00049V3H6.75049V17.3H21.0005V21ZM8.75049 5.1C14.5005 5.1 19.0005 9.6 19.0005 15.3H15.5005C15.5005 11.525 12.5255 8.55 8.75049 8.55V5.1Z"}};
const f = null;

const Angle = forwardRef(function Angle(
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

Angle.displayName = "Angle";

export default Angle;
