import { h } from "vue";

const p = {"thin":{"stroke":"M21.0005 10H20.5005V3.475H3.50049V10H3.00049V3H21.0005V10ZM5.67549 15.175L6.02549 14.825L11.7505 20.575V8H12.2505V20.575L17.9755 14.825L18.3255 15.175L12.0005 21.5L5.67549 15.175Z"},"ultralight":{"stroke":"M21.0005 10H20.0255V3.925H3.97549V10H3.00049V3H21.0005V10ZM5.67549 15.175L6.32549 14.5L11.5255 19.775V8H12.4755V19.775L17.6755 14.5L18.3255 15.175L12.0005 21.5L5.67549 15.175Z"},"light":{"stroke":"M21.0005 10H19.5755V4.4H4.42549V10H3.00049V3H21.0005V10ZM5.65049 15.15L6.65049 14.175L11.2755 18.975V8H12.7255V18.975L17.3505 14.175L18.3505 15.15L12.0005 21.5L5.65049 15.15Z"},"regular":{"stroke":"M21.0005 10H19.1005V4.85H4.90049V10H3.00049V3H21.0005V10ZM5.65049 15.15L6.95049 13.85L11.0505 18.15V8H12.9505V18.15L17.0505 13.85L18.3505 15.15L12.0005 21.5L5.65049 15.15Z"},"medium":{"stroke":"M21.0005 10H18.7005V5.25H5.30049V10H3.00049V3H21.0005V10ZM5.65049 15.15L7.27549 13.525L10.8505 17.275V8.675H13.1505V17.275L16.7255 13.525L18.3505 15.15L12.0005 21.5L5.65049 15.15Z"},"semibold":{"stroke":"M21.0005 10H18.0755V5.875H5.92549V10H3.00049V3H21.0005V10ZM6.82549 16.325H10.5505V9.325H13.4505V16.325H17.1755L12.0005 21.5L6.82549 16.325Z"},"bold":{"stroke":"M21.0005 10H17.2505V6.7H6.75049V10H3.00049V3H21.0005V10ZM6.25049 15.75H10.1255V10H13.8755V15.75H17.7505L12.0005 21.5L6.25049 15.75Z"}};

export default {
  name: "TakeOutOfContainerDown",
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
