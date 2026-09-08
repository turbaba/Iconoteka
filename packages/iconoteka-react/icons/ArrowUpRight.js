import { createElement } from "react";

const p = {"thin":{"stroke":"M7.72539 4.5V4H20.0004V16.275H19.5004L19.5254 4.825L3.87539 20.45L3.52539 20.1L19.1754 4.475L7.72539 4.5Z"},"ultralight":{"stroke":"M7.47539 4.975V4H20.0004V16.525H19.0254L19.1004 5.575L4.22539 20.45L3.52539 19.75L18.4254 4.9L7.47539 4.975Z"},"light":{"stroke":"M7.25039 5.475V4H20.0004V16.75H18.5254L18.6504 6.375L4.55039 20.45L3.52539 19.425L17.6254 5.325L7.25039 5.475Z"},"regular":{"stroke":"M7.00039 5.95V4H20.0004V17H18.0504L18.2004 7.15L4.90039 20.45L3.52539 19.075L16.8504 5.775L7.00039 5.95Z"},"medium":{"stroke":"M6.72539 6.55V4H20.0004V17.275H17.4504L17.7004 8.075L5.32539 20.45L3.52539 18.65L15.8754 6.3L6.72539 6.55Z"},"semibold":{"stroke":"M6.45039 7.125V4H20.0004V17.525H16.8754L17.1504 9.025L5.72539 20.45L3.52539 18.25L14.9504 6.825L6.45039 7.125Z"},"bold":{"stroke":"M6.17539 7.725V4H20.0004V17.8H16.2754L16.6004 10L6.15039 20.45L3.52539 17.825L13.9504 7.4L6.17539 7.725Z"}};

export default function ArrowUpRight({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
