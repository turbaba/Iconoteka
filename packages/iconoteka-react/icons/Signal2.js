import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M8.82549 13H9.32549V21H8.82549V13ZM3.00049 17H3.50049V21H3.00049V17Z"},"ultralight":{"stroke":"M8.67549 13H9.62549V21H8.67549V13ZM3.00049 17H3.97549V21H3.00049V17Z"},"light":{"stroke":"M8.50049 13H9.95049V21H8.50049V13ZM3.00049 17H4.42549V21H3.00049V17Z"},"regular":{"stroke":"M8.35049 13H10.2505V21H8.35049V13ZM3.00049 17H4.90049V21H3.00049V17Z"},"medium":{"stroke":"M8.17549 13H10.6005V21H8.17549V13ZM3.00049 17H5.42549V21H3.00049V17Z"},"semibold":{"stroke":"M8.00049 13H10.9755V21H8.00049V13ZM3.00049 17H5.97549V21H3.00049V17Z"},"bold":{"stroke":"M7.82549 13H11.3255V21H7.82549V13ZM3.00049 17H6.50049V21H3.00049V17Z"}};
const f = null;

const Signal2 = forwardRef(function Signal2(
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

Signal2.displayName = "Signal2";

export default Signal2;
