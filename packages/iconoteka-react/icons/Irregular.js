import { createElement } from "react";

const p = {"thin":{"stroke":"M17.3755 6.575L3.50049 2.875V20.525H21.1005L17.3755 6.575ZM17.8005 6.2L21.7505 21H3.00049V2.25L17.8005 6.2Z","fill":"M17.8 6.2L21.75 21H3V2.25L17.8 6.2Z"},"ultralight":{"stroke":"M17.0005 6.975L3.97549 3.5V20.05H20.4755L17.0005 6.975ZM17.8005 6.2L21.7505 21H3.00049V2.25L17.8005 6.2Z"},"light":{"stroke":"M16.6005 7.35L4.47549 4.125V19.575H19.8505L16.6005 7.35ZM17.8005 6.2L21.7505 21H3.00049V2.25L17.8005 6.2Z"},"regular":{"stroke":"M16.2005 7.75L4.95049 4.75V19.1H19.2255L16.2005 7.75ZM17.8005 6.2L21.7505 21H3.00049V2.25L17.8005 6.2Z"},"medium":{"stroke":"M15.7005 8.2L5.55049 5.5V18.525H18.4505L15.7005 8.2ZM17.8005 6.2L21.7505 21H3.00049V2.25L17.8005 6.2Z"},"semibold":{"stroke":"M15.2005 8.65L6.15049 6.25V17.975H17.7005L15.2005 8.65ZM17.8005 6.2L21.7505 21H3.00049V2.25L17.8005 6.2Z"},"bold":{"stroke":"M14.7005 9.1L6.75049 6.975V17.4H16.9255L14.7005 9.1ZM17.8005 6.2L21.7505 21H3.00049V2.25L17.8005 6.2Z"}};
const f = p.thin.fill;

export default function Irregular({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
