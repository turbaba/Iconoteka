import { createElement } from "react";

const p = {"thin":{"stroke":"M8.17529 21.75L1.92529 15.5L8.17529 9.25L8.52529 9.6L2.82529 15.25H20.5003V3H21.0003V15.725H2.80029L8.52529 21.4L8.17529 21.75Z"},"ultralight":{"stroke":"M8.32529 21.9L1.92529 15.5L8.32529 9.1L9.02529 9.775L3.60029 15.025H20.0253V3H21.0003V15.975H3.60029L9.02529 21.225L8.32529 21.9Z"},"light":{"stroke":"M8.50029 22.075L1.92529 15.5L8.50029 8.925L9.50029 9.95L4.37529 14.825H19.5253V3H21.0003V16.25H4.40029L9.50029 21.05L8.50029 22.075Z"},"regular":{"stroke":"M8.65029 22.225L1.92529 15.5L8.65029 8.775L10.0003 10.125L5.17529 14.6H19.0503V3H21.0003V16.5H5.25029L10.0003 20.875L8.65029 22.225Z"},"medium":{"stroke":"M8.65029 22.225L1.92529 15.5L8.65029 8.775L10.4253 10.55L6.30029 14.275H18.4503V3H21.0003V16.775H6.35029L10.4253 20.45L8.65029 22.225Z"},"semibold":{"stroke":"M7.10029 20.675L1.92529 15.5L7.10029 10.325V14.025H17.8503V3H21.0003V17.125H7.10029V20.675Z"},"bold":{"stroke":"M7.67529 21.25L1.92529 15.5L7.67529 9.75V13.65H17.2503V3H21.0003V17.35H7.67529V21.25Z"}};
const f = null;

export default function ArrowTipDownLeft({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
