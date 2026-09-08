import { h } from "vue";

const p = {"thin":{"stroke":"M20.1505 20.5L4.47549 4.825L4.50049 8.95H4.00049V4H8.95049V4.5L4.82549 4.475L20.5005 20.15L20.1505 20.5Z"},"ultralight":{"stroke":"M19.7755 20.5L4.82549 5.55L4.97549 8.95H4.00049V4H8.95049V4.975L5.55049 4.825L20.5005 19.775L19.7755 20.5Z"},"light":{"stroke":"M19.4255 20.5L5.70049 6.775L4.00049 8.475V4H8.47549L6.77549 5.7L20.5005 19.45L19.4255 20.5Z"},"regular":{"stroke":"M19.1005 20.5L5.77549 7.15L4.00049 8.95V4H8.95049L7.17549 5.775L20.5005 19.125L19.1005 20.5Z"},"medium":{"stroke":"M18.6755 20.5L6.10049 7.9L4.00049 10V4H10.0005L7.90049 6.1L20.5005 18.7L18.6755 20.5Z"},"semibold":{"stroke":"M18.2755 20.5L6.42549 8.65L5.75049 9.3L4.00049 11.075V4H11.0755L8.65049 6.425L20.5005 18.275L18.2755 20.5Z"},"bold":{"stroke":"M17.8505 20.5L6.75049 9.375L4.00049 12.125V4H12.1255L9.40049 6.725L20.5005 17.85L17.8505 20.5Z"}};

export default {
  name: "ArrowExtraThinUpLeft",
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
