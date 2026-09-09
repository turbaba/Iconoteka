import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M9.50078 18.3249L0.925781 9.7499L1.27578 9.3999L9.50078 17.6249L22.7258 4.3999L23.0758 4.7499L9.50078 18.3249Z"},"ultralight":{"stroke":"M9.50078 18.6749L0.925781 10.0999L1.62578 9.3999L9.50078 17.2999L22.3758 4.3999L23.0758 5.0999L9.50078 18.6749Z"},"light":{"stroke":"M9.50078 19.0249L0.925781 10.4499L1.95078 9.3999L9.50078 16.9999L22.0508 4.3999L23.0758 5.4499L9.50078 19.0249Z"},"regular":{"stroke":"M9.50078 19.3749L0.925781 10.7999L2.30078 9.3999L9.50078 16.6749L21.7008 4.3999L23.0758 5.7999L9.50078 19.3749Z"},"medium":{"stroke":"M9.50078 19.7749L0.925781 11.1999L2.72578 9.3999L9.50078 16.2499L21.2758 4.3999L23.0758 6.1999L9.50078 19.7749Z"},"semibold":{"stroke":"M9.50078 20.1999L0.925781 11.6249L3.12578 9.3999L9.50078 15.8499L20.8758 4.3999L23.0758 6.6249L9.50078 20.1999Z"},"bold":{"stroke":"M9.50078 20.5999L0.925781 12.0249L3.55078 9.3999L9.50078 15.4249L20.4508 4.3999L23.0758 7.0249L9.50078 20.5999Z"}};
const f = null;

const Checkmark = forwardRef(function Checkmark(
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

Checkmark.displayName = "Checkmark";

export default Checkmark;
