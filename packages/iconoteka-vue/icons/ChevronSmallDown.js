import { h } from "vue";

const p = {"thin":{"stroke":"M6.90039 9.475L7.25039 9.125L12.0004 13.9L16.7504 9.125L17.1004 9.475L12.0004 14.575L6.90039 9.475Z"},"ultralight":{"stroke":"M6.90039 9.6751L7.57539 8.9751L12.0004 13.4251L16.4254 8.9751L17.1004 9.6751L12.0004 14.7751L6.90039 9.6751Z"},"light":{"stroke":"M6.90039 9.8502L7.92539 8.8252L12.0004 12.9752L16.0754 8.8252L17.1004 9.8502L12.0004 14.9502L6.90039 9.8502Z"},"regular":{"stroke":"M6.90039 10.0498L8.25039 8.6748L12.0004 12.4998L15.7504 8.6748L17.1004 10.0498L12.0004 15.1498L6.90039 10.0498Z"},"medium":{"stroke":"M6.90039 10.2249L8.57539 8.5249L12.0004 12.0249L15.4254 8.5249L17.1004 10.2249L12.0004 15.3249L6.90039 10.2249Z"},"semibold":{"stroke":"M6.90039 10.4001L8.92539 8.3501L12.0004 11.5501L15.0754 8.3501L17.1004 10.4001L12.0004 15.5001L6.90039 10.4001Z"},"bold":{"stroke":"M6.90039 10.5752L9.25039 8.2002L12.0004 11.0752L14.7504 8.2002L17.1004 10.5752L12.0004 15.6752L6.90039 10.5752Z"}};
const f = null;

export default {
  name: "ChevronSmallDown",
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
