import { h } from "vue";

const p = {"thin":{"stroke":"M3.87539 20.5L3.52539 20.15L19.1754 4.475L11.1754 4.5V4H20.0004V12.825H19.5004L19.5254 4.825L3.87539 20.5Z"},"ultralight":{"stroke":"M4.22539 20.5L3.52539 19.8L18.4504 4.85L10.7754 4.975V4H20.0004V13.225H19.0004L19.1254 5.55L4.22539 20.5Z"},"light":{"stroke":"M4.57539 20.5L3.52539 19.45L17.7754 5.225L10.4004 5.475V4H20.0004V13.6H18.5254L18.7504 6.275L4.57539 20.5Z"},"regular":{"stroke":"M4.92539 20.5L3.52539 19.1L17.0254 5.625L10.0004 5.95V4H20.0004V14H18.0254L18.3504 7L4.92539 20.5Z"},"medium":{"stroke":"M5.32539 20.5L3.52539 18.675L16.0004 6.2L10.0004 6.575V4H20.0004V14H17.4254L17.7754 8L5.32539 20.5Z"},"semibold":{"stroke":"M5.75039 20.5L3.52539 18.25L15.2254 6.55L12.6754 4H20.0004V11.325L17.4504 8.75L5.75039 20.5Z"},"bold":{"stroke":"M6.17539 20.5L3.52539 17.8L14.5754 6.75L11.8504 4H20.0004V12.15L17.2504 9.4L6.17539 20.5Z"}};
const f = null;

export default {
  name: "ArrowThinUpRight",
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
