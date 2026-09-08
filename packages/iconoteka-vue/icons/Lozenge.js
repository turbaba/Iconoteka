import { h } from "vue";

const p = {"thin":{"stroke":"M12.0005 0.775L2.60049 12L12.0005 23.225L21.4005 12L12.0005 0.775ZM12.0005 0L22.0505 12L12.0005 24L1.95049 12L12.0005 0Z","fill":"M12 0L22.05 12L12 24L1.95 12L12 0Z"},"ultralight":{"stroke":"M12.0005 1.5L3.20049 12L12.0005 22.5L20.8005 12L12.0005 1.5ZM12.0005 0L22.0505 12L12.0005 24L1.95049 12L12.0005 0Z"},"light":{"stroke":"M12.0005 2.225L3.82549 12L12.0005 21.775L20.1755 12L12.0005 2.225ZM12.0005 0L22.0505 12L12.0005 24L1.95049 12L12.0005 0Z"},"regular":{"stroke":"M12.0005 2.975L4.42549 12L12.0005 21.025L19.5755 12L12.0005 2.975ZM12.0005 0L22.0505 12L12.0005 24L1.95049 12L12.0005 0Z"},"medium":{"stroke":"M12.0005 3.825L5.15049 12L12.0005 20.175L18.8505 12L12.0005 3.825ZM12.0005 0L22.0505 12L12.0005 24L1.95049 12L12.0005 0Z"},"semibold":{"stroke":"M12.0005 4.7L5.90049 12L12.0005 19.3L18.1005 12L12.0005 4.7ZM12.0005 0L22.0505 12L12.0005 24L1.95049 12L12.0005 0Z"},"bold":{"stroke":"M12.0005 5.575L6.62549 12L12.0005 18.425L17.3755 12L12.0005 5.575ZM12.0005 0L22.0505 12L12.0005 24L1.95049 12L12.0005 0Z"}};
const f = p.thin.fill;

export default {
  name: "Lozenge",
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
