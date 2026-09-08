import { h } from "vue";

const p = {"thin":{"stroke":"M20.5005 3.475H3.50049V20.525H20.5005V3.475ZM21.0005 3V21H3.00049V3H21.0005Z","fill":"M21 3V21H3V3H21Z"},"ultralight":{"stroke":"M20.0005 3.975H4.00049V20.025H20.0005V3.975ZM21.0005 3V21H3.00049V3H21.0005Z"},"light":{"stroke":"M19.5005 4.45H4.50049V19.55H19.5005V4.45ZM21.0005 3V21H3.00049V3H21.0005Z"},"regular":{"stroke":"M19.0005 4.95H5.00049V19.05H19.0005V4.95ZM21.0005 3V21H3.00049V3H21.0005Z"},"medium":{"stroke":"M18.4005 5.525H5.60049V18.475H18.4005V5.525ZM21.0005 3V21H3.00049V3H21.0005Z"},"semibold":{"stroke":"M17.8005 6.075H6.20049V17.925H17.8005V6.075ZM21.0005 3V21H3.00049V3H21.0005Z"},"bold":{"stroke":"M17.2005 6.65H6.80049V17.35H17.2005V6.65ZM21.0005 3V21H3.00049V3H21.0005Z"}};

export default {
  name: "Square",
  props: {
    weight:  { type: String, default: "regular" },
    variant: { type: String, default: "stroke" },
    size:    { type: [Number, String], default: 24 }
  },
  setup(props, { attrs }) {
    return () => {
      const w = p[props.weight] || p.regular;
      const d = w[props.variant] || w.stroke || w.fill;
      return h(
        "svg",
        { width: props.size, height: props.size, viewBox: "0 0 24 24",
          fill: "none", xmlns: "http://www.w3.org/2000/svg", ...attrs },
        [h("path", { d, fill: "currentColor" })]
      );
    };
  }
};
