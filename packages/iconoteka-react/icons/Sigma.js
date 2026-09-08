import { createElement } from "react";

const p = {"thin":{"stroke":"M6.37012 21V20.575L12.0701 12L6.37012 3.425V3H18.1201V3.5H6.99512L12.6701 12L6.99512 20.5H18.1201V21H6.37012Z"},"ultralight":{"stroke":"M6.23169 21V20.1L11.9567 12L6.23169 3.9V3H18.2317V3.975H7.48169L13.1317 12L7.48169 20.025H18.2317V21H6.23169Z"},"light":{"stroke":"M6.14282 21V19.65L11.8678 12L6.14282 4.35V3H18.3928V4.425H7.99282L13.6178 12L8.01782 19.575H18.3928V21H6.14282Z"},"regular":{"stroke":"M6.00439 21V19.175L11.6794 12L6.00439 4.825V3H18.5044V4.9H8.52939L14.0794 12L8.55439 19.1H18.5044V21H6.00439Z"},"medium":{"stroke":"M5.74805 21V18.675L11.148 12L5.74805 5.325V3H18.748V5.425H9.04805L14.423 12L9.04805 18.575H18.748V21H5.74805Z"},"semibold":{"stroke":"M5.50391 21V18.175L10.5789 12L5.50391 5.825V3H19.0039V5.975H9.62891L14.7539 12L9.62891 18.025H19.0039V21H5.50391Z"},"bold":{"stroke":"M5.24756 21V17.675L10.0226 12L5.24756 6.325V3H19.2476V6.5H10.2226L15.0976 12L10.2226 17.5H19.2476V21H5.24756Z"}};

export default function Sigma({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
