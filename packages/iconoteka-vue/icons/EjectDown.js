import { h } from "vue";

const p = {"thin":{"stroke":"M3.10049 11.875L12.0005 20.8L20.9005 11.875L21.2505 12.225L12.0005 21.5L2.75049 12.225L3.10049 11.875ZM3.00049 3H21.0005V3.475H3.00049V3Z"},"ultralight":{"stroke":"M3.45049 11.525L12.0005 20.15L20.5505 11.525L21.2505 12.225L12.0005 21.5L2.75049 12.225L3.45049 11.525ZM3.00049 3H21.0005V3.975H3.00049V3Z"},"light":{"stroke":"M3.80049 11.2L12.0005 19.475L20.2005 11.2L21.2505 12.225L12.0005 21.5L2.75049 12.225L3.80049 11.2ZM3.00049 3H21.0005V4.45H3.00049V3Z"},"regular":{"stroke":"M4.15049 10.85L12.0005 18.825L19.8505 10.85L21.2505 12.225L12.0005 21.5L2.75049 12.225L4.15049 10.85ZM3.00049 3H21.0005V4.95H3.00049V3Z"},"medium":{"stroke":"M4.57549 10.4L12.0005 17.975L19.4255 10.4L21.2505 12.225L12.0005 21.5L2.75049 12.225L4.57549 10.4ZM3.00049 3H21.0005V5.55H3.00049V3Z"},"semibold":{"stroke":"M5.02549 9.975L12.0005 17.1L18.9755 9.975L21.2505 12.225L12.0005 21.5L2.75049 12.225L5.02549 9.975ZM3.00049 3H21.0005V6.15H3.00049V3Z"},"bold":{"stroke":"M5.45049 9.525L12.0005 16.25L18.5505 9.525L21.2505 12.225L12.0005 21.5L2.75049 12.225L5.45049 9.525ZM3.00049 3H21.0005V6.75H3.00049V3Z"}};

export default {
  name: "EjectDown",
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
