import { h } from "vue";

const p = {"thin":{"stroke":"M4.00049 22V2H20.0005V22H4.00049ZM4.50049 21.525H19.5005V2.475H4.50049V21.525Z","fill":"M4 22V2H20V22H4Z"},"ultralight":{"stroke":"M4.00049 22V2H20.0005V22H4.00049ZM5.00049 21.025H19.0005V2.975H5.00049V21.025Z"},"light":{"stroke":"M4.00049 22V2H20.0005V22H4.00049ZM5.50049 20.55H18.5005V3.45H5.50049V20.55Z"},"regular":{"stroke":"M4.00049 22V2H20.0005V22H4.00049ZM6.00049 20.05H18.0005V3.95H6.00049V20.05Z"},"medium":{"stroke":"M4.00049 22V2H20.0005V22H4.00049ZM6.60049 19.475H17.4005V4.525H6.60049V19.475Z"},"semibold":{"stroke":"M4.00049 22V2H20.0005V22H4.00049ZM7.20049 18.925H16.8005V5.075H7.20049V18.925Z"},"bold":{"stroke":"M4.00049 22V2H20.0005V22H4.00049ZM7.80049 18.35H16.2005V5.65H7.80049V18.35Z"}};
const f = p.thin.fill;

export default {
  name: "RectangleVertical",
  props: {
    weight:  { type: String, default: "regular" },
    variant: { type: String, default: "stroke" },
    size:    { type: [Number, String], default: 24 }
  },
  setup(props, { attrs }) {
    return () => {
      const w = p[props.weight] || p.regular;
      const d = w[props.variant] || (props.variant === "fill" ? f : null) || w.stroke;
      return h(
        "svg",
        { width: props.size, height: props.size, viewBox: "0 0 24 24",
          fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attrs },
        [h("path", { d, fill: "currentColor" })]
      );
    };
  }
};
