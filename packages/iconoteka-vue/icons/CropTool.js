import { h } from "vue";

const p = {"thin":{"stroke":"M1.00098 20V19.525H4.00098V4H19.501V1H20.001V4H23.001V4.475H20.001V20H4.50098V23H4.00098V20H1.00098ZM4.50098 19.525H19.501V4.475H4.50098V19.525Z"},"ultralight":{"stroke":"M1.00098 20V19.025H4.00098V4H19.001V1H20.001V4H23.001V4.975H20.001V20H5.00098V23H4.00098V20H1.00098ZM5.00098 19.025H19.001V4.975H5.00098V19.025Z"},"light":{"stroke":"M1.00098 20V18.55H4.00098V4H18.501V1H20.001V4H23.001V5.45H20.001V20H5.50098V23H4.00098V20H1.00098ZM5.50098 18.55H18.501V5.45H5.50098V18.55Z"},"regular":{"stroke":"M1.00098 20V18.05H4.00098V4H18.001V1H20.001V4H23.001V5.95H20.001V20H6.00098V23H4.00098V20H1.00098ZM6.00098 18.05H18.001V5.95H6.00098V18.05Z"},"medium":{"stroke":"M1.00098 20V17.5H4.00098V4H17.451V1H20.001V4H23.001V6.5H20.001V20H6.55098V23H4.00098V20H1.00098ZM6.55098 17.5H17.451V6.5H6.55098V17.5Z"},"semibold":{"stroke":"M1.00098 20V16.95H4.00098V4H16.901V1H20.001V4H23.001V7.05H20.001V20H7.10098V23H4.00098V20H1.00098ZM7.10098 16.95H16.901V7.05H7.10098V16.95Z"},"bold":{"stroke":"M1.00098 20V16.4H4.00098V4H16.351V1H20.001V4H23.001V7.6H20.001V20H7.65098V23H4.00098V20H1.00098ZM7.65098 16.4H16.351V7.6H7.65098V16.4Z"}};
const f = null;

export default {
  name: "CropTool",
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
