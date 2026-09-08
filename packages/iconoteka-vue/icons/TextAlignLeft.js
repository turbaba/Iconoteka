import { h } from "vue";

const p = {"thin":{"stroke":"M15 20.525V21H3V20.525H15ZM21 14.7V15.175H3V14.7H21ZM15 8.825V9.3H3V8.825H15ZM21 3V3.475H3V3H21Z"},"ultralight":{"stroke":"M15 20.075V21H3V20.075H15ZM21 14.4V15.325H3V14.4H21ZM15 8.675V9.6H3V8.675H15ZM21 3V3.925H3V3H21Z"},"light":{"stroke":"M15 19.65V21H3V19.65H15ZM21 14.1V15.45H3V14.1H21ZM15 8.55V9.9H3V8.55H15ZM21 3V4.35H3V3H21Z"},"regular":{"stroke":"M15 19.2V21H3V19.2H15ZM21 13.8V15.6H3V13.8H21ZM15 8.4V10.2H3V8.4H15ZM21 3V4.8H3V3H21Z"},"medium":{"stroke":"M15 18.725V21H3V18.725H15ZM21 13.5V15.775H3V13.5H21ZM15 8.225V10.5H3V8.225H15ZM21 3V5.275H3V3H21Z"},"semibold":{"stroke":"M21 18V21H3V18H21ZM15 10.5V13.5H3V10.5H15ZM21 3V6H3V3H21Z"},"bold":{"stroke":"M21 17.4V21H3V17.4H21ZM15 10.2V13.8H3V10.2H15ZM21 3V6.6H3V3H21Z"}};
const f = null;

export default {
  name: "TextAlignLeft",
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
