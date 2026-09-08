import { h } from "vue";

const p = {"thin":{"stroke":"M2.50049 12L8.85049 5.65L9.20049 6L3.42549 11.75H16.0005V12.25H3.42549L9.17549 17.975L8.82549 18.325L2.50049 12ZM14.0005 21V20.525H20.5005V3.475H14.0005V3H21.0005V21H14.0005Z"},"ultralight":{"stroke":"M2.50049 12L8.85049 5.65L9.52549 6.325L4.22549 11.525H16.0005V12.475H4.22549L9.50049 17.675L8.82549 18.325L2.50049 12ZM14.0005 21V20.075H20.0255V3.925H14.0005V3H21.0005V21H14.0005Z"},"light":{"stroke":"M2.50049 12L8.85049 5.65L9.82549 6.625L5.00049 11.3H16.0005V12.7H5.00049L9.82549 17.35L8.85049 18.35L2.50049 12ZM14.0005 21V19.6H19.5755V4.4H14.0005V3H21.0005V21H14.0005Z"},"regular":{"stroke":"M2.50049 12L8.85049 5.65L10.1505 6.95L5.80049 11.075H16.0005V12.925H5.80049L10.1505 17.05L8.85049 18.35L2.50049 12ZM14.0005 21V19.15H19.1005V4.85H14.0005V3H21.0005V21H14.0005Z"},"medium":{"stroke":"M2.50049 12L8.70049 5.8L10.4255 7.525L6.85049 10.775H15.3255V13.225H6.85049L10.4255 16.475L8.70049 18.2L2.50049 12ZM14.0005 21V18.55H18.5005V5.45H14.0005V3H21.0005V21H14.0005Z"},"semibold":{"stroke":"M2.50049 12L7.67549 6.825V10.475H14.6755V13.525H7.67549V17.175L2.50049 12ZM14.0005 21V17.9H17.8505V6.1H14.0005V3H21.0005V21H14.0005Z"},"bold":{"stroke":"M2.50049 12L8.25049 6.25V10.15H14.0005V13.85H8.25049V17.75L2.50049 12ZM14.0005 21V17.3H17.2505V6.7H14.0005V3H21.0005V21H14.0005Z"}};

export default {
  name: "Exit",
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
