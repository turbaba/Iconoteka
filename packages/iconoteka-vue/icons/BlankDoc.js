import { h } from "vue";

const p = {"thin":{"stroke":"M4.00049 22V2H15.4255L20.0005 6.575V22H4.00049ZM4.50049 21.525H19.5005V6.75L15.2255 2.475H4.50049V21.525Z","fill":"M4 22V2H15.425L20 6.575V22H4Z"},"ultralight":{"stroke":"M4.00049 22V2H15.4255L20.0005 6.575V22H4.00049ZM5.00049 21.05H19.0005V6.95L15.0005 2.95H5.00049V21.05Z"},"light":{"stroke":"M4.00049 22V2H15.4255L20.0005 6.575V22H4.00049ZM5.50049 20.55H18.5005V7.15L14.8005 3.45H5.50049V20.55Z"},"regular":{"stroke":"M4.00049 22V2H15.4255L20.0005 6.575V22H4.00049ZM6.00049 20.075H18.0005V7.35L14.5755 3.925H6.00049V20.075Z"},"medium":{"stroke":"M4.00049 22V2H15.4255L20.0005 6.575V22H4.00049ZM6.57549 19.5H17.4255V7.6L14.3505 4.5H6.57549V19.5Z"},"semibold":{"stroke":"M4.00049 22V2H15.4255L20.0005 6.575V22H4.00049ZM7.12549 18.925H16.8755V7.825L14.1005 5.075H7.12549V18.925Z"},"bold":{"stroke":"M4.00049 22V2H15.4255L20.0005 6.575V22H4.00049ZM7.70049 18.35H16.3005V8.075L13.8755 5.65H7.70049V18.35Z"}};

export default {
  name: "BlankDoc",
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
