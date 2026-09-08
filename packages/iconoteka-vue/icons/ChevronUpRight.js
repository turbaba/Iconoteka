import { h } from "vue";

const p = {"thin":{"stroke":"M19.0005 19H18.5005V5.5H5.00049V5H19.0005V19Z"},"ultralight":{"stroke":"M19.0005 19H18.0005V5.975H5.00049V5H19.0005V19Z"},"light":{"stroke":"M19.0005 19H17.4755L17.5255 6.425L5.00049 6.475V5H19.0005V19Z"},"regular":{"stroke":"M19.0005 19H16.9755L17.0255 6.9L5.00049 6.95V5H19.0005V19Z"},"medium":{"stroke":"M19.0005 19H16.3755L16.4255 7.525L5.00049 7.55V5H19.0005V19Z"},"semibold":{"stroke":"M19.0005 19H15.8005V8.125L5.00049 8.15V5H19.0005V19Z"},"bold":{"stroke":"M19.0005 19H15.2005V8.75H5.00049V5H19.0005V19Z"}};

export default {
  name: "ChevronUpRight",
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
