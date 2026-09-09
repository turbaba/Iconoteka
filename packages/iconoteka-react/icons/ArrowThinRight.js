import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M17.1005 18.25L16.7505 17.9L22.4255 12.25H1.00049V11.75H22.4255L16.7505 6.1L17.1005 5.75L23.3505 12L17.1005 18.25Z"},"ultralight":{"stroke":"M16.8255 18.5251L16.1255 17.8251L21.6005 12.5001H1.00049V11.5001H21.6005L16.1255 6.1751L16.8255 5.4751L23.3505 12.0001L16.8255 18.5251Z"},"light":{"stroke":"M16.5505 18.8002L15.5005 17.7502L20.8255 12.7252H1.00049V11.2752H20.8255L15.5005 6.2502L16.5505 5.2002L23.3505 12.0002L16.5505 18.8002Z"},"regular":{"stroke":"M16.2755 19.0748L14.8755 17.6748L19.9755 12.9748H1.00049V11.0248H19.9755L14.8755 6.3248L16.2755 4.9248L23.3505 11.9998L16.2755 19.0748Z"},"medium":{"stroke":"M16.3255 19.0251L14.5005 17.2001L18.9255 13.2751H1.00049V10.7251H18.9255L14.5005 6.8001L16.3255 4.9751L23.3505 12.0001L16.3255 19.0251Z"},"semibold":{"stroke":"M18.1755 17.1752V13.5752H1.00049V10.4252H18.1755V6.8252L23.3505 12.0002L18.1755 17.1752Z"},"bold":{"stroke":"M17.6005 17.75V13.875H1.00049V10.125H17.6005V6.25L23.3505 12L17.6005 17.75Z"}};
const f = null;

const ArrowThinRight = forwardRef(function ArrowThinRight(
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

ArrowThinRight.displayName = "ArrowThinRight";

export default ArrowThinRight;
