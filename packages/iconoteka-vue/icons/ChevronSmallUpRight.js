import { h } from "vue";

const p = {"thin":{"stroke":"M15.6254 15.6249H15.1254L15.1504 8.8749L8.40039 8.8999V8.3999H15.6254V15.6249Z"},"ultralight":{"stroke":"M15.6504 15.5999L14.6754 15.6249V9.3499L8.40039 9.3749L8.42539 8.3999H15.6504V15.5999Z"},"light":{"stroke":"M15.6004 15.6248H14.1504L14.2254 9.8248L8.40039 9.8748V8.4248H15.6004V15.6248Z"},"regular":{"stroke":"M15.6254 15.6249H13.7004L13.7504 10.2749L8.40039 10.3249L8.42539 8.3999H15.6254V15.6249Z"},"medium":{"stroke":"M15.6254 15.6249H13.2504L13.3004 10.7249L8.40039 10.7999L8.42539 8.3999H15.6254V15.6249Z"},"semibold":{"stroke":"M15.6254 15.6249H12.7504L12.8254 11.1999L8.40039 11.2749L8.42539 8.3999H15.6254V15.6249Z"},"bold":{"stroke":"M15.6254 15.6249H12.2754L12.3754 11.6499L8.40039 11.7499V8.3999H15.6254V15.6249Z"}};
const f = null;

export default {
  name: "ChevronSmallUpRight",
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
