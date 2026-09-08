import { h } from "vue";

const p = {"thin":{"stroke":"M19.0005 5V19H5.00049V18.5H18.5005V5H19.0005Z"},"ultralight":{"stroke":"M19.0005 5V19H5.00049V18.025H18.0005V5H19.0005Z"},"light":{"stroke":"M19.0005 5V19H5.00049V17.525L17.5255 17.575L17.4755 5H19.0005Z"},"regular":{"stroke":"M19.0005 5V19H5.00049V17.05L17.0255 17.1L16.9755 5H19.0005Z"},"medium":{"stroke":"M19.0005 5V19H5.00049V16.45L16.4255 16.475L16.3755 5H19.0005Z"},"semibold":{"stroke":"M19.0005 5V19H5.00049V15.85L15.8005 15.875V5H19.0005Z"},"bold":{"stroke":"M19.0005 5V19H5.00049V15.25H15.2005V5H19.0005Z"}};

export default {
  name: "ChevronDownRight",
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
