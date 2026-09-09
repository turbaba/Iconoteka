import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M8.17529 2.25L8.52529 2.6L2.80029 8.275H21.0003V21H20.5003V8.75H2.82529L8.52529 14.4L8.17529 14.75L1.92529 8.5L8.17529 2.25Z"},"ultralight":{"stroke":"M8.32529 2.1001L9.02529 2.7751L3.60029 8.0251H21.0003V21.0001H20.0253V8.9751H3.60029L9.02529 14.2251L8.32529 14.9001L1.92529 8.5001L8.32529 2.1001Z"},"light":{"stroke":"M8.50029 1.9248L9.50029 2.9498L4.40029 7.7498H21.0003V20.9998H19.5253V9.1748H4.37529L9.50029 14.0498L8.50029 15.0748L1.92529 8.4998L8.50029 1.9248Z"},"regular":{"stroke":"M8.65029 1.7749L10.0003 3.1249L5.25029 7.4999H21.0003V20.9999H19.0503V9.3999H5.17529L10.0003 13.8749L8.65029 15.2249L1.92529 8.4999L8.65029 1.7749Z"},"medium":{"stroke":"M8.65029 1.7749L10.4253 3.5499L6.35029 7.2249H21.0003V20.9999H18.4503V9.7249H6.30029L10.4253 13.4499L8.65029 15.2249L1.92529 8.4999L8.65029 1.7749Z"},"semibold":{"stroke":"M7.10029 3.3252V6.8752H21.0003V21.0002H17.8503V9.9752H7.10029V13.6752L1.92529 8.5002L7.10029 3.3252Z"},"bold":{"stroke":"M7.67529 2.75V6.65H21.0003V21H17.2503V10.35H7.67529V14.25L1.92529 8.5L7.67529 2.75Z"}};
const f = null;

const ArrowTipUpLeft = forwardRef(function ArrowTipUpLeft(
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

ArrowTipUpLeft.displayName = "ArrowTipUpLeft";

export default ArrowTipUpLeft;
