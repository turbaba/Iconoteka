import { h } from "vue";

const p = {"thin":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM21.5005 19.525V4.475H2.50049V19.525H21.5005Z","fill":"M22 20H2V4H22V20Z"},"ultralight":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM21.0005 19.025V4.975H3.00049V19.025H21.0005Z"},"light":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM20.5005 18.55V5.45H3.50049V18.55H20.5005Z"},"regular":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM20.0005 18.05V5.95H4.00049V18.05H20.0005Z"},"medium":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM19.4255 17.475V6.525H4.57549V17.475H19.4255Z"},"semibold":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM18.8255 16.875V7.125H5.17549V16.875H18.8255Z"},"bold":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM18.2505 16.3V7.7H5.75049V16.3H18.2505Z"}};
const f = p.thin.fill;

export default {
  name: "RectangleHorizontal",
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
