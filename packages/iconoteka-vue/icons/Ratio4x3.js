import { h } from "vue";

const p = {"thin":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM21.5005 19.525V4.8L2.82549 19.525H21.5005ZM2.50049 19.175L21.1505 4.475H2.50049V19.175Z","fill":"M2.375 20L22 4.325V20H2.375ZM21.625 4L2 19.675V4H21.625Z"},"ultralight":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM21.0505 19.075V5.5L3.67549 19.075H21.0505ZM2.95049 18.5L20.3255 4.925H2.95049V18.5Z","fill":"M2.775 20L22 4.65V20H2.775ZM21.225 4L2 19.35V4H21.225Z"},"light":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM20.6005 18.65V6.225L4.47549 18.65H20.6005ZM3.40049 17.775L19.5005 5.35H3.40049V17.775Z","fill":"M3.15 20L22 4.95V20H3.15ZM20.85 4L2 19.05V4H20.85Z"},"regular":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM20.1505 18.2V6.9L5.32549 18.2H20.1505ZM3.85049 17.1L18.6755 5.8H3.85049V17.1Z","fill":"M3.55 20L22 5.275V20H3.55ZM20.45 4L2 18.725V4H20.45Z"},"medium":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM19.6005 17.65V7.75L6.37549 17.65H19.6005ZM4.40049 16.25L17.6255 6.35H4.40049V16.25Z","fill":"M3.55 20L22 5.275V20H3.55ZM20.45 4L2 18.725V4H20.45Z"},"semibold":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM19.0505 17.1V8.6L7.45049 17.1H19.0505ZM4.95049 15.425L16.5755 6.9H4.95049V15.425Z","fill":"M3.55 20L22 5.275V20H3.55ZM20.45 4L2 18.725V4H20.45Z"},"bold":{"stroke":"M22.0005 20H2.00049V4H22.0005V20ZM18.5005 16.55V9.4L8.55049 16.55H18.5005ZM5.50049 14.625L15.4755 7.45H5.50049V14.625Z","fill":"M3.55 20L22 5.275V20H3.55ZM20.45 4L2 18.725V4H20.45Z"}};

export default {
  name: "Ratio4x3",
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
