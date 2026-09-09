import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M2.00049 20V3H8.45049L10.4505 5H22.0005V20H2.00049ZM2.50049 19.525H21.5005V5.475H10.2505L8.25049 3.475H2.50049V19.525Z","fill":"M2 20V3H8.45L10.45 5H22V20H2Z"},"ultralight":{"stroke":"M2.00049 20V3H8.62549L10.6255 5H22.0005V20H2.00049ZM3.00049 19.025H21.0005V5.975H10.2005L8.20049 3.975H3.00049V19.025Z"},"light":{"stroke":"M2.00049 20V3H8.77549L10.7755 5H22.0005V20H2.00049ZM3.50049 18.55H20.5005V6.45H10.1755L8.17549 4.45H3.50049V18.55Z"},"regular":{"stroke":"M2.00049 20V3H8.95049L10.9505 5H22.0005V20H2.00049ZM4.00049 18.05H20.0005V6.95H10.1255L8.12549 4.95H4.00049V18.05Z"},"medium":{"stroke":"M2.00049 20V3H9.35049L11.3505 5H22.0005V20H2.00049ZM4.57549 17.475H19.4255V7.525H10.3005L8.30049 5.525H4.57549V17.475Z"},"semibold":{"stroke":"M2.00049 20V3H9.75049L11.7505 5H22.0005V20H2.00049ZM5.12549 16.925H18.8755V8.075H10.4755L8.47549 6.075H5.12549V16.925Z"},"bold":{"stroke":"M2.00049 20V3H10.1505L12.1505 5H22.0005V20H2.00049ZM5.70049 16.35H18.3005V8.65H10.6505L8.65049 6.65H5.70049V16.35Z"}};
const f = p.thin.fill;

const Folder = forwardRef(function Folder(
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

Folder.displayName = "Folder";

export default Folder;
