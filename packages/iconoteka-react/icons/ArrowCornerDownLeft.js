import { createElement } from "react";

const p = {"thin":{"stroke":"M2.25049 15.825L2.60049 15.475L8.25049 21.175V3H21.0005V3.475H8.75049V21.175L14.4005 15.475L14.7505 15.825L8.50049 22.075L2.25049 15.825Z"},"ultralight":{"stroke":"M2.10059 15.675L2.77559 14.975L8.00059 20.375V3H21.0006V3.95H9.00059V20.375L14.2256 14.975L14.9006 15.675L8.50059 22.075L2.10059 15.675Z"},"light":{"stroke":"M1.92529 15.5L2.95029 14.5L7.77529 19.575V3H21.0003V4.425H9.22529V19.575L14.0503 14.5L15.0753 15.5L8.50029 22.075L1.92529 15.5Z"},"regular":{"stroke":"M1.77539 15.35L3.12539 14L7.52539 18.75V3H21.0004V4.9H9.47539V18.75L13.8754 14L15.2254 15.35L8.50039 22.075L1.77539 15.35Z"},"medium":{"stroke":"M1.75049 15.325L3.55049 13.525L7.22549 17.65V3H21.0005V5.55H9.77549V17.65L13.4505 13.525L15.2505 15.325L8.50049 22.075L1.75049 15.325Z"},"semibold":{"stroke":"M3.32568 16.9H6.92568V3H21.0007V6.125H10.0757V16.9H13.6757L8.50068 22.075L3.32568 16.9Z"},"bold":{"stroke":"M2.75049 16.325H6.62549V3H21.0005V6.7H10.3755V16.325H14.2505L8.50049 22.075L2.75049 16.325Z"}};

export default function ArrowCornerDownLeft({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
