import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M10.0505 3.6498L1.92549 11.7498H23.3255V12.2498H1.92549L10.0505 20.3498L9.70049 20.6998L1.00049 11.9998L9.70049 3.2998L10.0505 3.6498Z"},"ultralight":{"stroke":"M10.5505 3.825L2.80049 11.5H23.3255V12.5H2.80049L10.5505 20.175L9.87549 20.875L1.00049 12L9.87549 3.125L10.5505 3.825Z"},"light":{"stroke":"M11.0755 4.0001L3.62549 11.2751H23.3255V12.7251H3.62549L11.0755 20.0001L10.0255 21.0251L1.00049 12.0001L10.0255 2.9751L11.0755 4.0001Z"},"regular":{"stroke":"M11.5755 4.1748L4.50049 11.0248H23.3255V12.9748H4.50049L11.5755 19.8248L10.2005 21.1998L1.00049 11.9998L10.2005 2.7998L11.5755 4.1748Z"},"medium":{"stroke":"M12.2005 4.4001L5.55049 10.7251H23.3255V13.2751H5.55049L12.2005 19.6001L10.4005 21.4001L1.00049 12.0001L10.4005 2.6001L12.2005 4.4001Z"},"semibold":{"stroke":"M12.8005 4.6498L6.57549 10.4498H23.3255V13.5498H6.57549L12.8005 19.3498L10.5755 21.5748L1.00049 11.9998L10.5755 2.4248L12.8005 4.6498Z"},"bold":{"stroke":"M13.4255 4.8751L7.65049 10.1501H23.3255V13.8501H7.65049L13.4255 19.1251L10.7755 21.7751L1.00049 12.0001L10.7755 2.2251L13.4255 4.8751Z"}};
const f = null;

const ArrowLeft = forwardRef(function ArrowLeft(
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

ArrowLeft.displayName = "ArrowLeft";

export default ArrowLeft;
