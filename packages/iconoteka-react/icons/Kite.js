import { createElement } from "react";

const p = {"thin":{"stroke":"M12.0005 0.675L2.6005 9.65L12.0005 23.15L21.4005 9.65L12.0005 0.675ZM12.0005 0L22.0505 9.6L12.0005 24L1.9505 9.6L12.0005 0Z","fill":"M12 0L22.05 9.6L12 24L1.95001 9.6L12 0Z"},"ultralight":{"stroke":"M12.0005 1.325L3.2255 9.725L12.0005 22.3L20.7755 9.725L12.0005 1.325ZM12.0005 0L22.0505 9.6L12.0005 24L1.9505 9.6L12.0005 0Z"},"light":{"stroke":"M12.0005 2L3.8505 9.775L12.0005 21.45L20.1505 9.775L12.0005 2ZM12.0005 0L22.0505 9.6L12.0005 24L1.9505 9.6L12.0005 0Z"},"regular":{"stroke":"M12.0005 2.65L4.4755 9.85L12.0005 20.625L19.5255 9.85L12.0005 2.65ZM12.0005 0L22.0505 9.6L12.0005 24L1.9505 9.6L12.0005 0Z"},"medium":{"stroke":"M12.0005 3.425L5.2005 9.925L12.0005 19.65L18.8005 9.925L12.0005 3.425ZM12.0005 0L22.0505 9.6L12.0005 24L1.9505 9.6L12.0005 0Z"},"semibold":{"stroke":"M12.0005 4.175L5.9255 10L12.0005 18.7L18.0755 10L12.0005 4.175ZM12.0005 0L22.0505 9.6L12.0005 24L1.9505 9.6L12.0005 0Z"},"bold":{"stroke":"M12.0005 4.95L6.6505 10.05L12.0005 17.75L17.3505 10.05L12.0005 4.95ZM12.0005 0L22.0505 9.6L12.0005 24L1.9505 9.6L12.0005 0Z"}};
const f = p.thin.fill;

export default function Kite({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
