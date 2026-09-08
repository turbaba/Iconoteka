import { h } from "vue";

const p = {"thin":{"stroke":"M1.00049 18.5H23.0005V18.975H1.00049V18.5ZM1.00049 5H23.0005V5.475H1.00049V5Z"},"ultralight":{"stroke":"M1.00049 18H23.0005V18.975H1.00049V18ZM1.00049 5H23.0005V5.975H1.00049V5Z"},"light":{"stroke":"M1.00049 17.525H23.0005V18.975H1.00049V17.525ZM1.00049 5H23.0005V6.45H1.00049V5Z"},"regular":{"stroke":"M1.00049 17.025H23.0005V18.975H1.00049V17.025ZM1.00049 5H23.0005V6.95H1.00049V5Z"},"medium":{"stroke":"M1.00049 16.4H23.0005V18.975H1.00049V16.4ZM1.00049 5H23.0005V7.575H1.00049V5Z"},"semibold":{"stroke":"M1.00049 15.8H23.0005V18.975H1.00049V15.8ZM1.00049 5H23.0005V8.175H1.00049V5Z"},"bold":{"stroke":"M1.00049 15.175H23.0005V18.975H1.00049V15.175ZM1.00049 5H23.0005V8.8H1.00049V5Z"}};
const f = null;

export default {
  name: "Drag",
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
