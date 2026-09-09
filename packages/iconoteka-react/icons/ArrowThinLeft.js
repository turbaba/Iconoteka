import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M6.90039 18.25L0.650391 12L6.90039 5.75L7.25039 6.1L1.57539 11.75H23.0004V12.25H1.57539L7.25039 17.9L6.90039 18.25Z"},"ultralight":{"stroke":"M7.17539 18.5251L0.650391 12.0001L7.17539 5.4751L7.87539 6.1751L2.40039 11.5001H23.0004V12.5001H2.40039L7.87539 17.8251L7.17539 18.5251Z"},"light":{"stroke":"M7.45039 18.8002L0.650391 12.0002L7.45039 5.2002L8.50039 6.2502L3.17539 11.2752H23.0004V12.7252H3.17539L8.50039 17.7502L7.45039 18.8002Z"},"regular":{"stroke":"M7.72539 19.0748L0.650391 11.9998L7.72539 4.9248L9.12539 6.3248L4.02539 11.0248H23.0004V12.9748H4.02539L9.12539 17.6748L7.72539 19.0748Z"},"medium":{"stroke":"M7.67539 19.0251L0.650391 12.0001L7.67539 4.9751L9.50039 6.8001L5.07539 10.7251H23.0004V13.2751H5.07539L9.50039 17.2001L7.67539 19.0251Z"},"semibold":{"stroke":"M5.82539 17.1752L0.650391 12.0002L5.82539 6.8252V10.4252H23.0004V13.5752H5.82539V17.1752Z"},"bold":{"stroke":"M6.40039 17.75L0.650391 12L6.40039 6.25V10.125H23.0004V13.875H6.40039V17.75Z"}};
const f = null;

const ArrowThinLeft = forwardRef(function ArrowThinLeft(
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

ArrowThinLeft.displayName = "ArrowThinLeft";

export default ArrowThinLeft;
