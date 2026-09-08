import { h } from "vue";

const p = {"thin":{"stroke":"M12.1255 3.1L3.20049 12L12.1255 20.9L11.7755 21.25L2.50049 12L11.7755 2.75L12.1255 3.1ZM21.0005 3V21H20.5005V3H21.0005Z"},"ultralight":{"stroke":"M12.4755 3.45L3.85049 12L12.4755 20.55L11.7755 21.25L2.50049 12L11.7755 2.75L12.4755 3.45ZM21.0005 3V21H20.0005V3H21.0005Z"},"light":{"stroke":"M12.8005 3.8L4.52549 12L12.8005 20.2L11.7755 21.25L2.50049 12L11.7755 2.75L12.8005 3.8ZM21.0005 3V21H19.5005V3H21.0005Z"},"regular":{"stroke":"M13.1505 4.15L5.17549 12L13.1505 19.85L11.7755 21.25L2.50049 12L11.7755 2.75L13.1505 4.15ZM21.0005 3V21H19.0005V3H21.0005Z"},"medium":{"stroke":"M13.5755 4.575L6.02549 12L13.5755 19.425L11.7755 21.25L2.50049 12L11.7755 2.75L13.5755 4.575ZM21.0005 3V21H18.4005V3H21.0005Z"},"semibold":{"stroke":"M14.0005 5L6.90049 12L14.0255 19L11.7755 21.25L2.50049 12L11.7755 2.75L14.0005 5ZM21.0005 3V21H17.8005V3H21.0005Z"},"bold":{"stroke":"M14.4255 5.425L7.75049 12L14.4505 18.575L11.7755 21.25L2.50049 12L11.7755 2.75L14.4255 5.425ZM21.0005 3V21H17.2005V3H21.0005Z"}};
const f = null;

export default {
  name: "EjectLeft",
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
