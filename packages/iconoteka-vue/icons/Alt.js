import { h } from "vue";

const p = {"thin":{"stroke":"M2.00098 21V20.525H8.62598L15.026 3H22.001V3.475H15.376L8.97598 21H2.00098ZM11.826 20.525L11.626 21H22.001V20.525H11.826Z"},"ultralight":{"stroke":"M2.00098 21V20.05H8.55098L14.776 3H22.001V3.95H15.451L9.22598 21H2.00098ZM12.251 20.05L11.876 21H22.001V20.05H12.251Z"},"light":{"stroke":"M2.00098 21V19.575H8.45098L14.501 3H22.001V4.425H15.551L9.50098 21H2.00098ZM12.676 19.575L12.151 21H22.001V19.575H12.676Z"},"regular":{"stroke":"M2.00098 21V19.1H8.37598L14.251 3H22.001V4.9H15.626L9.75098 21H2.00098ZM13.101 19.1L12.401 21H22.001V19.1H13.101Z"},"medium":{"stroke":"M2.00098 21V18.5H8.27598L13.926 3H22.001V5.5H15.726L10.076 21H2.00098ZM13.476 18.5L12.551 21H22.001V18.5H13.476Z"},"semibold":{"stroke":"M2.00098 21V17.9H8.17598L13.626 3H22.001V6.1H15.851L10.401 21H2.00098ZM13.826 17.9L12.701 21H22.001V17.9H13.826Z"},"bold":{"stroke":"M2.00098 21V17.3H8.07598L13.301 3H22.001V6.7H15.951L10.726 21H2.00098ZM14.201 17.3L12.851 21H22.001V17.3H14.201Z"}};

export default {
  name: "Alt",
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
