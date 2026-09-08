import { h } from "vue";

const p = {"thin":{"stroke":"M3.00049 20.525H21.0005V21H3.00049V20.525ZM5.67549 10.475L11.7505 16.575V2H12.2505V16.575L18.3255 10.475L18.6755 10.825L12.0005 17.5L5.32549 10.825L5.67549 10.475Z"},"ultralight":{"stroke":"M3.00049 20.05H21.0005V21H3.00049V20.05ZM5.75049 9.6L11.5005 15.475V2H12.5005V15.475L18.2505 9.6L18.9255 10.275L12.0005 17.2L5.07549 10.275L5.75049 9.6Z"},"light":{"stroke":"M3.00049 19.575H21.0005V21H3.00049V19.575ZM5.85049 8.725L11.2755 14.375V2H12.7255V14.375L18.1505 8.725L19.1755 9.75L12.0005 16.925L4.82549 9.75L5.85049 8.725Z"},"regular":{"stroke":"M3.00049 19.1H21.0005V21H3.00049V19.1ZM5.92549 7.85L11.0255 13.25V2H12.9755V13.25L18.0755 7.85L19.4255 9.2L12.0005 16.625L4.57549 9.2L5.92549 7.85Z"},"medium":{"stroke":"M3.00049 18.525H21.0005V21H3.00049V18.525ZM6.12549 6.975L10.7505 12.025V2H13.2505V12.025L17.8755 6.975L19.6255 8.725L12.0005 16.325L4.37549 8.725L6.12549 6.975Z"},"semibold":{"stroke":"M3.00049 17.975H21.0005V21H3.00049V17.975ZM6.32549 6.1L10.4755 10.825V2H13.5255V10.825L17.6755 6.1L19.8005 8.225L12.0005 16.05L4.20049 8.225L6.32549 6.1Z"},"bold":{"stroke":"M3.00049 17.4H21.0005V21H3.00049V17.4ZM6.52549 5.225L10.2005 9.575V2H13.8005V9.575L17.4755 5.225L20.0005 7.75L12.0005 15.75L4.00049 7.75L6.52549 5.225Z"}};
const f = null;

export default {
  name: "Download",
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
