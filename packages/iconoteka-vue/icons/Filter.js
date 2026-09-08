import { h } from "vue";

const p = {"thin":{"stroke":"M19.001 12.25H5.00098V11.775H19.001V12.25ZM23.001 3.475H1.00098V3H23.001V3.475ZM16.001 21H8.00098V20.525H16.001V21Z"},"ultralight":{"stroke":"M19.001 12.475H5.00098V11.525H19.001V12.475ZM23.001 3.95H1.00098V3H23.001V3.95ZM16.001 21H8.00098V20.05H16.001V21Z"},"light":{"stroke":"M19.001 12.725H5.00098V11.3H19.001V12.725ZM23.001 4.425H1.00098V3H23.001V4.425ZM16.001 21H8.00098V19.575H16.001V21Z"},"regular":{"stroke":"M19.001 12.95H5.00098V11.05H19.001V12.95ZM23.001 4.9H1.00098V3H23.001V4.9ZM16.001 21H8.00098V19.1H16.001V21Z"},"medium":{"stroke":"M19.001 13.25H5.00098V10.75H19.001V13.25ZM23.001 5.475H1.00098V3H23.001V5.475ZM16.001 21H8.00098V18.525H16.001V21Z"},"semibold":{"stroke":"M19.001 13.525H5.00098V10.475H19.001V13.525ZM23.001 6.075H1.00098V3H23.001V6.075ZM16.001 21H8.00098V17.925H16.001V21Z"},"bold":{"stroke":"M19.001 13.825H5.00098V10.175H19.001V13.825ZM23.001 6.65H1.00098V3H23.001V6.65ZM16.001 21H8.00098V17.35H16.001V21Z"}};
const f = null;

export default {
  name: "Filter",
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
