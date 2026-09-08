import { h } from "vue";

const p = {"thin":{"stroke":"M2.50049 20.5V3.5H21.5005V20.5H2.50049ZM3.00049 19.65L20.6755 3.975H3.00049V19.65ZM3.30049 20.025H21.0005V4.325L3.30049 20.025Z","fill":"M2.85 20.5L21.5 3.85V20.5H2.85ZM21.15 3.5L2.5 20.15V3.5H21.15Z"},"ultralight":{"stroke":"M2.50049 20.5V3.5H21.5005V20.5H2.50049ZM3.45049 18.9L19.9005 4.425H3.45049V18.9ZM4.07549 19.575H20.5505V5.075L4.07549 19.575Z","fill":"M3.225 20.5L21.5 4.175V20.5H3.225ZM20.775 3.5L2.5 19.825V3.5H20.775Z"},"light":{"stroke":"M2.50049 20.5V3.5H21.5005V20.5H2.50049ZM3.90049 18.15L19.1505 4.85H3.90049V18.15ZM4.85049 19.15H20.1005V5.85L4.85049 19.15Z","fill":"M3.6 20.5L21.5 4.525V20.5H3.6ZM20.4 3.5L2.5 19.475V3.5H20.4Z"},"regular":{"stroke":"M2.50049 20.5V3.5H21.5005V20.5H2.50049ZM4.35049 17.425L18.3505 5.3H4.35049V17.425ZM5.65049 18.7H19.6505V6.575L5.65049 18.7Z","fill":"M3.975 20.5L21.5 4.85V20.5H3.975ZM20.025 3.5L2.5 19.15V3.5H20.025Z"},"medium":{"stroke":"M2.50049 20.5V3.5H21.5005V20.5H2.50049ZM4.90049 16.525L17.4255 5.85H4.90049V16.525ZM6.57549 18.15H19.1005V7.475L6.57549 18.15Z","fill":"M3.975 20.5L21.5 4.85V20.5H3.975ZM20.025 3.5L2.5 19.15V3.5H20.025Z"},"semibold":{"stroke":"M2.50049 20.5V3.5H21.5005V20.5H2.50049ZM5.45049 15.65L16.4755 6.4H5.45049V15.65ZM7.52549 17.6H18.5505V8.35L7.52549 17.6Z","fill":"M3.975 20.5L21.5 4.85V20.5H3.975ZM20.025 3.5L2.5 19.15V3.5H20.025Z"},"bold":{"stroke":"M2.50049 20.5V3.5H21.5005V20.5H2.50049ZM6.00049 14.775L15.5005 6.95H6.00049V14.775ZM8.50049 17.05H18.0005V9.225L8.50049 17.05Z","fill":"M3.975 20.5L21.5 4.85V20.5H3.975ZM20.025 3.5L2.5 19.15V3.5H20.025Z"}};
const f = null;

export default {
  name: "Ratio5x4",
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
