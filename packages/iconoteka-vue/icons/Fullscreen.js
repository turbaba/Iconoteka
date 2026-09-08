import { h } from "vue";

const p = {"thin":{"stroke":"M14 21V20.525H20.5V14H21V21H14ZM14 3.475V3H21V10H20.5V3.475H14ZM10 20.525V21H3V14H3.5V20.525H10ZM10 3V3.475H3.5V10H3V3H10Z"},"ultralight":{"stroke":"M14 21V20.025H20V14H21V21H14ZM14 3.975V3H21V10H20V3.975H14ZM10 20.025V21H3V14H4V20.025H10ZM10 3V3.975H4V10H3V3H10Z"},"light":{"stroke":"M14 21V19.55H19.5V14H21V21H14ZM14 4.45V3H21V10H19.5V4.45H14ZM10 19.55V21H3V14H4.5V19.55H10ZM10 3V4.45H4.5V10H3V3H10Z"},"regular":{"stroke":"M14 21V19.05H19V14H21V21H14ZM14 4.95V3H21V10H19V4.95H14ZM10 19.05V21H3V14H5V19.05H10ZM10 3V4.95H5V10H3V3H10Z"},"medium":{"stroke":"M14 21V18.5H18.45V14H21V21H14ZM14 5.5V3H21V10H18.45V5.5H14ZM10 18.5V21H3V14H5.55V18.5H10ZM10 3V5.5H5.55V10H3V3H10Z"},"semibold":{"stroke":"M14 21V17.95H17.9V14H21V21H14ZM14 6.05V3H21V10H17.9V6.05H14ZM10 17.95V21H3V14H6.1V17.95H10ZM10 3V6.05H6.1V10H3V3H10Z"},"bold":{"stroke":"M14 21V17.4H17.35V14H21V21H14ZM14 6.6V3H21V10H17.35V6.6H14ZM10 17.4V21H3V14H6.65V17.4H10ZM10 3V6.6H6.65V10H3V3H10Z"}};
const f = null;

export default {
  name: "Fullscreen",
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
