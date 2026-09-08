import { h } from "vue";

const p = {"thin":{"stroke":"M3.85049 3.5L19.5255 19.175L19.5005 15.05H20.0005V20H15.0505V19.5L19.1755 19.525L3.50049 3.85L3.85049 3.5Z"},"ultralight":{"stroke":"M4.22549 3.5L19.1755 18.45L19.0255 15.05H20.0005V20H15.0505V19.025L18.4505 19.175L3.50049 4.225L4.22549 3.5Z"},"light":{"stroke":"M4.57549 3.5L18.3005 17.225L20.0005 15.525V20H15.5255L17.2255 18.3L3.50049 4.55L4.57549 3.5Z"},"regular":{"stroke":"M4.90049 3.5L18.2255 16.85L20.0005 15.05V20H15.0505L16.8505 18.2L3.50049 4.875L4.90049 3.5Z"},"medium":{"stroke":"M5.32549 3.5L17.9005 16.1L20.0005 14V20H14.0005L16.1005 17.9L3.50049 5.3L5.32549 3.5Z"},"semibold":{"stroke":"M5.72549 3.5L17.5755 15.35L18.2505 14.7L20.0005 12.925V20H12.9255L15.3505 17.575L3.50049 5.725L5.72549 3.5Z"},"bold":{"stroke":"M6.15049 3.5L17.2755 14.6L20.0005 11.875V20H11.8755L14.6255 17.25L3.50049 6.15L6.15049 3.5Z"}};
const f = null;

export default {
  name: "ArrowExtraThinDownRight",
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
