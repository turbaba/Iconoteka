import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M3.5 7V21H3V7H3.5ZM9.325 2V21H8.825V2H9.325ZM15.175 12V21H14.675V12H15.175ZM21 7V21H20.5V7H21Z"},"ultralight":{"stroke":"M3.975 7V21H3V7H3.975ZM9.625 2V21H8.675V2H9.625ZM15.325 12V21H14.375V12H15.325ZM21 7V21H20.025V7H21Z"},"light":{"stroke":"M4.425 7V21H3V7H4.425ZM9.95 2V21H8.5V2H9.95ZM15.5 12V21H14.05V12H15.5ZM21 7V21H19.575V7H21Z"},"regular":{"stroke":"M4.9 7V21H3V7H4.9ZM10.25 2V21H8.35V2H10.25ZM15.65 12V21H13.75V12H15.65ZM21 7V21H19.1V7H21Z"},"medium":{"stroke":"M5.475 7V21H3V7H5.475ZM10.65 2V21H8.175V2H10.65ZM15.825 12V21H13.35V12H15.825ZM21 7V21H18.525V7H21Z"},"semibold":{"stroke":"M6.175 11V21H3V11H6.175ZM13.575 2V21H10.425V2H13.575ZM21 6V21H17.825V6H21Z"},"bold":{"stroke":"M6.8 11V21H3V11H6.8ZM13.9 2V21H10.1V2H13.9ZM21 6V21H17.2V6H21Z"}};
const f = null;

const ChartBar = forwardRef(function ChartBar(
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

ChartBar.displayName = "ChartBar";

export default ChartBar;
