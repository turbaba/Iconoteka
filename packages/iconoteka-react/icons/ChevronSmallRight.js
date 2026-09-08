import { createElement } from "react";

const p = {"thin":{"stroke":"M9.47549 6.8999L14.5755 11.9999L9.47549 17.0999L9.12549 16.7499L13.9005 11.9999L9.12549 7.2499L9.47549 6.8999Z"},"ultralight":{"stroke":"M9.67559 6.8999L14.7756 11.9999L9.67559 17.0999L8.97559 16.4249L13.4256 11.9999L8.97559 7.5749L9.67559 6.8999Z"},"light":{"stroke":"M9.85068 6.8999L14.9507 11.9999L9.85068 17.0999L8.82568 16.0749L12.9757 11.9999L8.82568 7.9249L9.85068 6.8999Z"},"regular":{"stroke":"M10.0503 6.8999L15.1503 11.9999L10.0503 17.0999L8.67529 15.7499L12.5003 11.9999L8.67529 8.2499L10.0503 6.8999Z"},"medium":{"stroke":"M10.2254 6.8999L15.3254 11.9999L10.2254 17.0999L8.52539 15.4249L12.0254 11.9999L8.52539 8.5749L10.2254 6.8999Z"},"semibold":{"stroke":"M10.4006 6.8999L15.5006 11.9999L10.4006 17.0999L8.35059 15.0749L11.5506 11.9999L8.35059 8.9249L10.4006 6.8999Z"},"bold":{"stroke":"M10.5757 6.8999L15.6757 11.9999L10.5757 17.0999L8.20068 14.7499L11.0757 11.9999L8.20068 9.2499L10.5757 6.8999Z"}};

export default function ChevronSmallRight({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
