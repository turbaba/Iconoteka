import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M21 20.525V21H3V3H3.5V20.525H21ZM20.65 15L15.425 9.775L12.1 13.1L6.325 7.325L6.675 6.975L12.1 12.4L15.425 9.075L21 14.65V15H20.65Z"},"ultralight":{"stroke":"M21 20.05V21H3V3H3.975V20.05H21ZM20.325 15L15.475 10.15L12.225 13.375L6.475 7.65L7.15 6.975L12.225 12.05L15.45 8.8L21 14.325V15H20.325Z"},"light":{"stroke":"M21 19.575V21H3V3H4.475V19.575H21ZM19.975 15L15.5 10.55L12.325 13.675L6.65 7.975L7.65 6.975L12.35 11.675L15.5 8.55L21 14.025V15H19.975Z"},"regular":{"stroke":"M21 19.1V21H3V3H4.95V19.1H21ZM19.65 15L15.55 10.925L12.45 13.95L6.8 8.3L8.125 6.975L12.475 11.325L15.525 8.275L21 13.7V15H19.65Z"},"medium":{"stroke":"M21 18.475V21H3V3H5.575V18.475H21ZM19.275 14.675L15.7 11.1L12.85 13.925L7.3 8.35L9 6.65L12.875 10.55L15.7 7.725L21 13V14.675H19.275Z"},"semibold":{"stroke":"M21 17.875V21H3V3H6.175V17.875H21ZM18.9 14.325L15.85 11.3L13.275 13.875L7.8 8.4L9.875 6.35L13.3 9.75L15.875 7.175L21 12.275V14.325H18.9Z"},"bold":{"stroke":"M21 17.25V21H3V3H6.8V17.25H21ZM18.525 14L16 11.475L13.675 13.85L8.3 8.45L10.75 6.025L13.7 8.975L16.05 6.625L21 11.575V14H18.525Z"}};
const f = null;

const ChartDown = forwardRef(function ChartDown(
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

ChartDown.displayName = "ChartDown";

export default ChartDown;
