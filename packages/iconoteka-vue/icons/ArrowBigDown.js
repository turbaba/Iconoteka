import { h } from "vue";

const p = {"thin":{"stroke":"M22.5005 11.475L12.0005 22L1.50049 11.475V11H7.00049V3H17.0005V11H22.5005V11.475ZM12.0005 21.325L21.8255 11.475H16.5005V3.475H7.50049V11.475H2.17549L12.0005 21.325Z","fill":"M23 11L12 22L1 11H7V3H17V11H23Z"},"ultralight":{"stroke":"M22.5005 11.475L12.0005 22L1.50049 11.475V10.575H7.00049V3H17.0005V10.575H22.5005V11.475ZM12.0005 20.675L21.1755 11.5H16.0255V3.925H7.97549V11.5H2.82549L12.0005 20.675Z"},"light":{"stroke":"M22.5005 11.5L12.0005 22L1.50049 11.5V10.125H7.00049V3H17.0005V10.125H22.5005V11.5ZM12.0005 20.025L20.5005 11.525H15.5755V4.4H8.42549V11.525H3.50049L12.0005 20.025Z"},"regular":{"stroke":"M22.5005 11.5L12.0005 22L1.50049 11.5V9.7H7.00049V3H17.0005V9.7H22.5005V11.5ZM12.0005 19.375L19.8505 11.55H15.1005V4.85H8.90049V11.55H4.15049L12.0005 19.375Z"},"medium":{"stroke":"M22.5005 11.5L12.0005 22L1.50049 11.5V9.15H6.85049V3H17.1505V9.15H22.5005V11.5ZM12.0005 18.6L19.1255 11.5H14.7255V5.375H9.27549V11.5H4.87549L12.0005 18.6Z"},"semibold":{"stroke":"M22.5005 11.5L12.0005 22L1.50049 11.5V8.625H6.67549V3H17.3255V8.625H22.5005V11.5ZM12.0005 17.85L18.4005 11.45H14.3755V5.9H9.62549V11.45H5.60049L12.0005 17.85Z"},"bold":{"stroke":"M22.5005 11.5L12.0005 22L1.50049 11.5V8.075H6.52549V3H17.4755V8.075H22.5005V11.5ZM12.0005 17.075L17.6755 11.4H14.0005V6.425H10.0005V11.4H6.32549L12.0005 17.075Z"}};

export default {
  name: "ArrowBigDown",
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
