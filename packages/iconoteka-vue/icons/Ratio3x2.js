import { h } from "vue";

const p = {"thin":{"stroke":"M22.5005 19.5H1.50049V4.5H22.5005V19.5ZM22.0005 19.025V5.375L2.27549 19.025H22.0005ZM2.00049 18.625L21.7255 4.975H2.00049V18.625Z","fill":"M1.9 19.5L22.5 4.825V19.5H1.9ZM22.1 4.5L1.5 19.175V4.5H22.1Z"},"ultralight":{"stroke":"M22.5005 19.5H1.50049V4.5H22.5005V19.5ZM21.5505 18.575V6.075L3.12549 18.575H21.5505ZM2.45049 17.9L20.8755 5.425H2.45049V17.9Z","fill":"M2.225 19.5L22.5 5.2V19.5H2.225ZM21.775 4.5L1.5 18.8V4.5H21.775Z"},"light":{"stroke":"M22.5005 19.5H1.50049V4.5H22.5005V19.5ZM21.1005 18.15V6.775L3.90049 18.15H21.1005ZM2.90049 17.225L20.0755 5.85H2.90049V17.225Z","fill":"M2.575 19.5L22.5 5.55V19.5H2.575ZM21.425 4.5L1.5 18.45V4.5H21.425Z"},"regular":{"stroke":"M22.5005 19.5H1.50049V4.5H22.5005V19.5ZM20.6505 17.7V7.45L4.80049 17.7H20.6505ZM3.35049 16.525L19.1505 6.3H3.35049V16.525Z","fill":"M2.9 19.5L22.5 5.925V19.5H2.9ZM21.1 4.5L1.5 18.075V4.5H21.1Z"},"medium":{"stroke":"M22.5005 19.5H1.50049V4.5H22.5005V19.5ZM20.1005 17.15V8.3L5.90049 17.15H20.1005ZM3.90049 15.675L18.1005 6.85H3.90049V15.675Z","fill":"M2.9 19.5L22.5 5.925V19.5H2.9ZM21.1 4.5L1.5 18.075V4.5H21.1Z"},"semibold":{"stroke":"M22.5005 19.5H1.50049V4.5H22.5005V19.5ZM19.5505 16.6V9.15L7.05049 16.6H19.5505ZM4.45049 14.875L16.9255 7.4H4.45049V14.875Z","fill":"M2.9 19.5L22.5 5.925V19.5H2.9ZM21.1 4.5L1.5 18.075V4.5H21.1Z"},"bold":{"stroke":"M22.5005 19.5H1.50049V4.5H22.5005V19.5ZM19.0005 16.05V9.95L8.30049 16.05H19.0005ZM5.00049 14.075L15.7255 7.95H5.00049V14.075Z","fill":"M2.9 19.5L22.5 5.925V19.5H2.9ZM21.1 4.5L1.5 18.075V4.5H21.1Z"}};

export default {
  name: "Ratio3x2",
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
