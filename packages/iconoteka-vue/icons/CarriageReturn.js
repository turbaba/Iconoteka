import { h } from "vue";

const p = {"thin":{"stroke":"M8.17554 21.25L1.92554 15L8.17554 8.75L8.52554 9.1L2.82554 14.775H20.5005V3.5H21.0005V15.25H2.85054L8.52554 20.9L8.17554 21.25Z"},"ultralight":{"stroke":"M8.32554 21.4L1.92554 15L8.32554 8.6L9.02554 9.275L3.57554 14.55H20.0255V3.5H21.0005V15.5H3.62554L9.02554 20.725L8.32554 21.4Z"},"light":{"stroke":"M8.50054 21.575L1.92554 15L8.50054 8.425L9.50054 9.45L4.40054 14.325H19.5255V3.5H21.0005V15.75H4.42554L9.50054 20.55L8.50054 21.575Z"},"regular":{"stroke":"M8.65054 21.725L1.92554 15L8.65054 8.275L10.0005 9.625L5.17554 14.1H19.0505V3.5H21.0005V16H5.25054L10.0005 20.375L8.65054 21.725Z"},"medium":{"stroke":"M8.67554 21.75L1.92554 15L8.67554 8.25L10.4255 10.025L6.32554 13.775H18.4505V3.5H21.0005V16.275H6.32554L10.4255 19.975L8.67554 21.75Z"},"semibold":{"stroke":"M7.10054 20.175L1.92554 15L7.10054 9.825V13.425H17.8505V3.5H21.0005V16.525H7.10054V20.175Z"},"bold":{"stroke":"M7.67554 20.75L1.92554 15L7.67554 9.25V13.1H17.2505V3.5H21.0005V16.8H7.67554V20.75Z"}};
const f = null;

export default {
  name: "CarriageReturn",
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
