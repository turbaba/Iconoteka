import { h } from "vue";

const p = {"thin":{"stroke":"M23.0005 19H1.00049V5H23.0005V19ZM22.5005 18.525V5.475H1.50049V18.525H22.5005Z","fill":"M23 19H1V5H23V19Z"},"ultralight":{"stroke":"M23.0005 19H1.00049V5H23.0005V19ZM22.0255 18.05V5.95H1.97549V18.05H22.0255Z","fill":"M23.0005 19H1.00049V5H23.0005V19Z"},"light":{"stroke":"M23.0005 19H1.00049V5H23.0005V19ZM21.5255 17.575V6.425H2.47549V17.575H21.5255Z","fill":"M23.0005 19H1.00049V5H23.0005V19Z"},"regular":{"stroke":"M23.0005 19H1.00049V5H23.0005V19ZM21.0505 17.1V6.9H2.95049V17.1H21.0505Z","fill":"M23.0005 19H1.00049V5H23.0005V19Z"},"medium":{"stroke":"M23.0005 19.1752H1.00049V4.8252H23.0005V19.1752ZM20.4505 16.6752V7.32519H3.55049V16.6752H20.4505Z","fill":"M23.0005 19.175H1.00049V4.82495H23.0005V19.175Z"},"semibold":{"stroke":"M23.0005 19.3248H1.00049V4.6748H23.0005V19.3248ZM19.8505 16.2248V7.77481H4.15049V16.2248H19.8505Z","fill":"M23.0005 19.3251H1.00049V4.67505H23.0005V19.3251Z"},"bold":{"stroke":"M23.0005 19.5H1.00049V4.5H23.0005V19.5ZM19.2505 15.8V8.2H4.75049V15.8H19.2505Z","fill":"M23.0005 19.5H1.00049V4.5H23.0005V19.5Z"}};
const f = null;

export default {
  name: "RectangleHorizontalNarrow",
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
