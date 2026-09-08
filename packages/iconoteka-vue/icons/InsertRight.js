import { h } from "vue";

const p = {"thin":{"stroke":"M2.50049 21.15L11.6505 12L2.50049 2.85L2.85049 2.5L12.3505 12L2.85049 21.5L2.50049 21.15ZM21.0005 21H20.5005V3H21.0005V21Z"},"ultralight":{"stroke":"M2.50049 20.8L11.3505 12L2.50049 3.2L3.20049 2.5L12.7005 12L3.20049 21.5L2.50049 20.8ZM21.0005 21H20.0005V3H21.0005V21Z"},"light":{"stroke":"M2.50049 20.45L11.0255 12L2.50049 3.55L3.52549 2.5L13.0505 12L3.52549 21.5L2.50049 20.45ZM21.0005 21H19.5005V3H21.0005V21Z"},"regular":{"stroke":"M2.50049 20.1L10.7255 12L2.50049 3.9L3.87549 2.5L13.4005 12L3.87549 21.5L2.50049 20.1ZM21.0005 21H19.0005V3H21.0005V21Z"},"medium":{"stroke":"M2.50049 19.65L10.3255 12L2.50049 4.35L4.32549 2.5L13.8505 12L4.32549 21.5L2.50049 19.65ZM21.0005 21H18.3755V3H21.0005V21Z"},"semibold":{"stroke":"M2.50049 19.225L9.90049 12L2.50049 4.775L4.75049 2.5L14.2755 12L4.75049 21.5L2.50049 19.225ZM21.0005 21H17.7755V3H21.0005V21Z"},"bold":{"stroke":"M2.50049 18.775L9.50049 12L2.50049 5.225L5.20049 2.5L14.7255 12L5.20049 21.5L2.50049 18.775ZM21.0005 21H17.1505V3H21.0005V21Z"}};
const f = null;

export default {
  name: "InsertRight",
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
