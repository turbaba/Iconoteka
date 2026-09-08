import { h } from "vue";

const p = {"thin":{"stroke":"M16.0005 12.25H2.00049V11.775H16.0005V12.25ZM22.0005 3.475H2.00049V3H22.0005V3.475ZM10.0005 21H2.00049V20.525H10.0005V21Z"},"ultralight":{"stroke":"M16.0005 12.475H2.00049V11.525H16.0005V12.475ZM22.0005 3.95H2.00049V3H22.0005V3.95ZM10.0005 21H2.00049V20.05H10.0005V21Z"},"light":{"stroke":"M16.0005 12.725H2.00049V11.3H16.0005V12.725ZM22.0005 4.425H2.00049V3H22.0005V4.425ZM10.0005 21H2.00049V19.575H10.0005V21Z"},"regular":{"stroke":"M16.0005 12.95H2.00049V11.05H16.0005V12.95ZM22.0005 4.9H2.00049V3H22.0005V4.9ZM10.0005 21H2.00049V19.1H10.0005V21Z"},"medium":{"stroke":"M16.0005 13.225H2.00049V10.775H16.0005V13.225ZM22.0005 5.475H2.00049V3H22.0005V5.475ZM10.0005 21H2.00049V18.525H10.0005V21Z"},"semibold":{"stroke":"M16.0005 13.525H2.00049V10.475H16.0005V13.525ZM22.0005 6.025H2.00049V3H22.0005V6.025ZM10.0005 21H2.00049V17.975H10.0005V21Z"},"bold":{"stroke":"M16.0005 13.8H2.00049V10.2H16.0005V13.8ZM22.0005 6.6H2.00049V3H22.0005V6.6ZM10.0005 21H2.00049V17.4H10.0005V21Z"}};
const f = null;

export default {
  name: "SortHighToLow",
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
