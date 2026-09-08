import { h } from "vue";

const p = {"thin":{"stroke":"M21.0005 20.525V21H3.00049V3H3.50049V20.525H21.0005ZM20.6505 7H21.0005V7.35L15.4255 12.925L12.1005 9.6L6.67549 15.025L6.32549 14.675L12.1005 8.9L15.4255 12.225L20.6505 7Z"},"ultralight":{"stroke":"M21.0005 20.05V21H3.00049V3H3.97549V20.05H21.0005ZM20.3255 7H21.0005V7.675L15.4755 13.2L12.2255 9.95L7.15049 15.025L6.47549 14.325L12.2255 8.6L15.4755 11.85L20.3255 7Z"},"light":{"stroke":"M21.0005 19.575V21H3.00049V3H4.47549V19.575H21.0005ZM20.0005 7H21.0005V7.975L15.5005 13.475L12.3255 10.3L7.62549 15L6.65049 14L12.3255 8.3L15.5005 11.475L20.0005 7Z"},"regular":{"stroke":"M21.0005 19.1V21H3.00049V3H4.95049V19.1H21.0005ZM19.6755 7H21.0005V8.3L15.5505 13.75L12.4505 10.65L8.10049 15L6.80049 13.65L12.4505 8L15.5505 11.1L19.6755 7Z"},"medium":{"stroke":"M21.0005 18.475V21H3.00049V3H5.57549V18.475H21.0005ZM19.3005 6.675H21.0005V8.35L15.7255 13.625L12.8755 10.775L8.97549 14.675L7.30049 12.95L12.8505 7.4L15.7005 10.25L19.3005 6.675Z"},"semibold":{"stroke":"M21.0005 17.875V21H3.00049V3H6.22549V17.875H21.0005ZM18.9005 6.325H21.0005V8.4L15.8755 13.525L13.2755 10.925L9.87549 14.325L7.80049 12.25L13.2755 6.775L15.8505 9.375L18.9005 6.325Z"},"bold":{"stroke":"M21.0005 17.25V21H3.00049V3H6.85049V17.25H21.0005ZM18.5255 6H21.0005V8.45L16.0505 13.4L13.7005 11.05L10.7505 14L8.30049 11.55L13.6755 6.175L16.0005 8.525L18.5255 6Z"}};

export default {
  name: "Chart",
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
