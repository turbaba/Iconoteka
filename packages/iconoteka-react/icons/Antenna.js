import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M21 3V21H20.5V3H21ZM14.675 8H15.175V21H14.675V8ZM8.825 13H9.325V21H8.825V13ZM3 17H3.5V21H3V17Z"},"ultralight":{"stroke":"M21 3V21H20.025V3H21ZM14.35 8H15.325V21H14.35V8ZM8.65 13H9.625V21H8.65V13ZM3 17H3.975V21H3V17Z"},"light":{"stroke":"M21 3V21H19.575V3H21ZM14.05 8H15.475V21H14.05V8ZM8.5 13H9.925V21H8.5V13ZM3 17H4.425V21H3V17Z"},"regular":{"stroke":"M21 3V21H19.1V3H21ZM13.725 8H15.625V21H13.725V8ZM8.325 13H10.225V21H8.325V13ZM3 17H4.9V21H3V17Z"},"medium":{"stroke":"M21 3V21H18.575V3H21ZM13.375 8H15.8V21H13.375V8ZM8.15 13H10.6V21H8.15V13ZM3 17H5.425V21H3V17Z"},"semibold":{"stroke":"M21 3V21H18.025V3H21ZM13.025 8H16V21H13.025V8ZM8 13H10.95V21H8V13ZM3 17H5.975V21H3V17Z"},"bold":{"stroke":"M21 3V21H17.5V3H21ZM12.675 8H16.175V21H12.675V8ZM7.825 13H11.325V21H7.825V13ZM3 17H6.5V21H3V17Z"}};
const f = null;

const Antenna = forwardRef(function Antenna(
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

Antenna.displayName = "Antenna";

export default Antenna;
