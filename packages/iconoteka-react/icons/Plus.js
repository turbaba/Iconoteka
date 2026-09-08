import { createElement } from "react";

const p = {"thin":{"stroke":"M21.5 11.75V12.225H12.25V21.5H11.75V12.225H2.5V11.75H11.75V2.5H12.25V11.75H21.5Z"},"ultralight":{"stroke":"M21.5 11.5V12.475H12.5V21.5H11.5V12.475H2.5V11.5H11.5V2.5H12.5V11.5H21.5Z"},"light":{"stroke":"M21.5 11.275V12.725H12.75V21.5H11.25V12.725H2.5V11.275H11.25V2.5H12.75V11.275H21.5Z"},"regular":{"stroke":"M21.5 11.025V12.975H13V21.5H11V12.975H2.5V11.025H11V2.5H13V11.025H21.5Z"},"medium":{"stroke":"M21.5 10.725V13.275H13.3V21.5H10.7V13.275H2.5V10.725H10.7V2.5H13.3V10.725H21.5Z"},"semibold":{"stroke":"M21.5 10.45V13.55H13.625V21.5H10.375V13.55H2.5V10.45H10.375V2.5H13.625V10.45H21.5Z"},"bold":{"stroke":"M21.5 10.15V13.85H13.925V21.5H10.075V13.85H2.5V10.15H10.075V2.5H13.925V10.15H21.5Z"}};

export default function Plus({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
