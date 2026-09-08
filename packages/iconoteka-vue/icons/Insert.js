import { h } from "vue";

const p = {"thin":{"stroke":"M2.85049 2.5L12.0005 11.6L21.1505 2.5L21.5005 2.85L12.0005 12.3L2.50049 2.85L2.85049 2.5ZM3.00049 21V20.5H21.0005V21H3.00049Z"},"ultralight":{"stroke":"M3.20049 2.5L12.0005 11.3L20.8005 2.5L21.5005 3.2L12.0005 12.675L2.50049 3.2L3.20049 2.5ZM3.00049 21V20.025H21.0005V21H3.00049Z"},"light":{"stroke":"M3.55049 2.5L12.0005 11.025L20.4505 2.5L21.5005 3.525L12.0005 13.025L2.50049 3.525L3.55049 2.5ZM3.00049 21V19.525H21.0005V21H3.00049Z"},"regular":{"stroke":"M3.90049 2.5L12.0005 10.725L20.1005 2.5L21.5005 3.875L12.0005 13.4L2.50049 3.875L3.90049 2.5ZM3.00049 21V19.05H21.0005V21H3.00049Z"},"medium":{"stroke":"M4.30049 2.5L12.0005 10.3L19.7005 2.5L21.5005 4.275L12.0005 13.8L2.50049 4.275L4.30049 2.5ZM3.00049 21V18.475H21.0005V21H3.00049Z"},"semibold":{"stroke":"M4.72549 2.5L12.0005 9.9L19.2755 2.5L21.5005 4.7L12.0005 14.2L2.50049 4.7L4.72549 2.5ZM3.00049 21V17.875H21.0005V21H3.00049Z"},"bold":{"stroke":"M5.12549 2.5L12.0005 9.475L18.8755 2.5L21.5005 5.1L12.0005 14.6L2.50049 5.1L5.12549 2.5ZM3.00049 21V17.3H21.0005V21H3.00049Z"}};

export default {
  name: "Insert",
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
