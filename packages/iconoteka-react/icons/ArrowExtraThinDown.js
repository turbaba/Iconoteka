import { createElement } from "react";

const p = {"thin":{"stroke":"M15.5005 19.8251L12.0005 23.3251L8.50049 19.8251L8.85049 19.4751L11.7505 22.4001V0.975098H12.2505V22.4001L15.1505 19.4751L15.5005 19.8251Z"},"ultralight":{"stroke":"M15.5005 19.8251L12.0005 23.3251L8.50049 19.8251L9.17549 19.1501L11.5005 21.6501V0.975098H12.5005V21.6501L14.8255 19.1501L15.5005 19.8251Z"},"light":{"stroke":"M15.1757 20.1501L12.0007 23.3251L8.82568 20.1501H11.2507V0.975098H12.7507V20.1501H15.1757Z"},"regular":{"stroke":"M15.5005 19.8251L12.0005 23.3251L8.50049 19.8251H11.0005V0.975098H13.0005V19.8251H15.5005Z"},"medium":{"stroke":"M16.2505 19.0751L12.0005 23.3251L7.75049 19.0751H10.7005V0.975098H13.3005V19.0751H16.2505Z"},"semibold":{"stroke":"M17.0005 18.3251L12.0005 23.3251L7.00049 18.3251H10.3755V0.975098H13.6255V18.3251H17.0005Z"},"bold":{"stroke":"M17.7505 17.5751L12.0005 23.3251L6.25049 17.5751H10.0755V0.975098H13.9255V17.5751H17.7505Z"}};

export default function ArrowExtraThinDown({ weight = "regular", variant = "stroke", size = 24, ...rest }) {
  const w = p[weight] || p.regular;
  const d = w[variant] || w.stroke || w.fill;
  return createElement(
    "svg",
    { width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
}
