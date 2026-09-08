import { h } from "vue";

const p = {"thin":{"stroke":"M20.5005 21V3H21.0005V21H20.5005ZM9.77549 18.65L16.2005 12.25H2.00049V11.75H16.2005L9.77549 5.35L10.1255 5L17.1255 12L10.1255 19L9.77549 18.65Z"},"ultralight":{"stroke":"M20.0255 21V3H21.0005V21H20.0255ZM9.30049 18.45L15.4255 12.475H2.00049V11.525H15.4255L9.30049 5.55L9.97549 4.85L17.1255 12L9.97549 19.15L9.30049 18.45Z"},"light":{"stroke":"M19.5255 21V3H21.0005V21H19.5255ZM8.82549 18.275L14.5755 12.725H2.00049V11.275H14.5755L8.82549 5.725L9.85049 4.725L17.1255 12L9.85049 19.275L8.82549 18.275Z"},"regular":{"stroke":"M19.0505 21V3H21.0005V21H19.0505ZM8.35049 18.075L13.7755 12.95H2.00049V11.05H13.7755L8.35049 5.925L9.70049 4.575L17.1255 12L9.70049 19.425L8.35049 18.075Z"},"medium":{"stroke":"M18.4505 21V3H21.0005V21H18.4505ZM7.47549 17.85L12.5505 13.225H2.00049V10.775H12.5505L7.45049 6.15L9.20049 4.4L16.8005 12L9.20049 19.6L7.47549 17.85Z"},"semibold":{"stroke":"M17.8505 21V3H21.0005V21H17.8505ZM6.57549 17.65L11.3255 13.475H2.00049V10.525H11.3255L6.57549 6.35L8.70049 4.225L16.5005 12L8.70049 19.775L6.57549 17.65Z"},"bold":{"stroke":"M17.2505 21V3H21.0005V21H17.2505ZM5.70049 17.425L10.0505 13.75H2.00049V10.25H10.0505L5.67549 6.575L8.20049 4.05L16.1755 12L8.20049 19.95L5.70049 17.425Z"}};
const f = null;

export default {
  name: "ArrowRightToBar",
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
