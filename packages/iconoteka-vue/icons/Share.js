import { h } from "vue";

const p = {"thin":{"stroke":"M21.0005 14V21H3.00049V14H3.50049V20.525H20.5005V14H21.0005ZM5.67549 8.825L12.0005 2.5L18.3255 8.825L17.9755 9.175L12.2505 3.425V16H11.7505V3.425L6.02549 9.175L5.67549 8.825Z"},"ultralight":{"stroke":"M21.0005 14V21H3.00049V14H3.97549V20.075H20.0255V14H21.0005ZM5.67549 8.825L12.0005 2.5L18.3255 8.825L17.6755 9.5L12.4755 4.225V16H11.5255V4.225L6.32549 9.5L5.67549 8.825Z"},"light":{"stroke":"M21.0005 14V21H3.00049V14H4.42549V19.6H19.5755V14H21.0005ZM5.65049 8.85L12.0005 2.5L18.3505 8.85L17.3505 9.825L12.7255 5.025V16H11.2755V5.025L6.65049 9.825L5.65049 8.85Z"},"regular":{"stroke":"M21.0005 14V21H3.00049V14H4.90049V19.15H19.1005V14H21.0005ZM5.65049 8.85L12.0005 2.5L18.3505 8.85L17.0505 10.15L12.9505 5.85V16H11.0505V5.85L6.95049 10.15L5.65049 8.85Z"},"medium":{"stroke":"M21.0005 14V21H3.00049V14H5.30049V18.75H18.7005V14H21.0005ZM5.65049 8.85L12.0005 2.5L18.3505 8.85L16.7255 10.475L13.1505 6.725V15.325H10.8505V6.725L7.27549 10.475L5.65049 8.85Z"},"semibold":{"stroke":"M21.0005 14V21H3.00049V14H5.92549V18.125H18.0755V14H21.0005ZM6.82549 7.675L12.0005 2.5L17.1755 7.675H13.4505V14.675H10.5505V7.675H6.82549Z"},"bold":{"stroke":"M21.0005 14V21H3.00049V14H6.75049V17.3H17.2505V14H21.0005ZM6.25049 8.25L12.0005 2.5L17.7505 8.25H13.8755V14H10.1255V8.25H6.25049Z"}};

export default {
  name: "Share",
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
