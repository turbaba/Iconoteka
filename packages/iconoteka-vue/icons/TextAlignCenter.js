import { h } from "vue";

const p = {"thin":{"stroke":"M18 20.525V21H6V20.525H18ZM21 14.7V15.175H3V14.7H21ZM18 8.825V9.3H6V8.825H18ZM21 3V3.475H3V3H21Z"},"ultralight":{"stroke":"M18 20.075V21H6V20.075H18ZM21 14.4V15.325H3V14.4H21ZM18 8.675V9.6H6V8.675H18ZM21 3V3.925H3V3H21Z"},"light":{"stroke":"M18 19.65V21H6V19.65H18ZM21 14.1V15.45H3V14.1H21ZM18 8.55V9.9H6V8.55H18ZM21 3V4.35H3V3H21Z"},"regular":{"stroke":"M18 19.2V21H6V19.2H18ZM21 13.8V15.6H3V13.8H21ZM18 8.4V10.2H6V8.4H18ZM21 3V4.8H3V3H21Z"},"medium":{"stroke":"M18 18.725V21H6V18.725H18ZM21 13.5V15.775H3V13.5H21ZM18 8.225V10.5H6V8.225H18ZM21 3V5.275H3V3H21Z"},"semibold":{"stroke":"M21 18V21H3V18H21ZM18 10.5V13.5H6V10.5H18ZM21 3V6H3V3H21Z"},"bold":{"stroke":"M21 17.4V21H3V17.4H21ZM18 10.2V13.8H6V10.2H18ZM21 3V6.6H3V3H21Z"}};
const f = null;

export default {
  name: "TextAlignCenter",
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
