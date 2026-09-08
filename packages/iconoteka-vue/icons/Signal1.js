import { h } from "vue";

const p = {"thin":{"stroke":"M3.00049 17H3.50049V21H3.00049V17Z"},"ultralight":{"stroke":"M3.00049 17H3.97549V21H3.00049V17Z"},"light":{"stroke":"M3.00049 17H4.42549V21H3.00049V17Z"},"regular":{"stroke":"M3.00049 17H4.90049V21H3.00049V17Z"},"medium":{"stroke":"M3.00049 17H5.47549V21H3.00049V17Z"},"semibold":{"stroke":"M3.00049 17H6.02549V21H3.00049V17Z"},"bold":{"stroke":"M3.00049 17H6.60049V21H3.00049V17Z"}};

export default {
  name: "Signal1",
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
