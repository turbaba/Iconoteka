import { h } from "vue";

const p = {"thin":{"stroke":"M8.82549 13H9.32549V21H8.82549V13ZM3.00049 17H3.50049V21H3.00049V17Z"},"ultralight":{"stroke":"M8.67549 13H9.62549V21H8.67549V13ZM3.00049 17H3.97549V21H3.00049V17Z"},"light":{"stroke":"M8.50049 13H9.95049V21H8.50049V13ZM3.00049 17H4.42549V21H3.00049V17Z"},"regular":{"stroke":"M8.35049 13H10.2505V21H8.35049V13ZM3.00049 17H4.90049V21H3.00049V17Z"},"medium":{"stroke":"M8.17549 13H10.6005V21H8.17549V13ZM3.00049 17H5.42549V21H3.00049V17Z"},"semibold":{"stroke":"M8.00049 13H10.9755V21H8.00049V13ZM3.00049 17H5.97549V21H3.00049V17Z"},"bold":{"stroke":"M7.82549 13H11.3255V21H7.82549V13ZM3.00049 17H6.50049V21H3.00049V17Z"}};

export default {
  name: "Signal2",
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
