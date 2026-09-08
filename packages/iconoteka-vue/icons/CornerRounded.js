import { h } from "vue";

const p = {"thin":{"stroke":"M20.5005 12C20.5005 7.225 16.7505 3.475 12.0005 3.475H3.00049V3H12.0005C17.0505 3 21.0005 6.95 21.0005 12V21H20.5005V12Z"},"ultralight":{"stroke":"M20.0005 12C20.0005 7.5 16.4755 3.975 12.0005 3.975H3.00049V3H12.0005C17.0505 3 21.0005 6.95 21.0005 12V21H20.0005V12Z"},"light":{"stroke":"M19.5005 12C19.5005 7.775 16.2005 4.45 12.0005 4.45H3.00049V3H12.0005C17.0505 3 21.0005 6.95 21.0005 12V21H19.5005V12Z"},"regular":{"stroke":"M19.0005 12C19.0005 8.05 15.9255 4.95 12.0005 4.95H3.00049V3H12.0005C17.0505 3 21.0005 6.95 21.0005 12V21H19.0005V12Z"},"medium":{"stroke":"M18.3755 12C18.3755 8.4 15.5755 5.575 12.0005 5.575H3.00049V3H12.0005C17.0505 3 21.0005 6.95 21.0005 12V21H18.3755V12Z"},"semibold":{"stroke":"M17.7755 12C17.7755 8.75 15.2255 6.175 12.0005 6.175H3.00049V3H12.0005C17.0505 3 21.0005 6.95 21.0005 12V21H17.7755V12Z"},"bold":{"stroke":"M17.1505 12C17.1505 9.1 14.8755 6.8 12.0005 6.8H3.00049V3H12.0005C17.0505 3 21.0005 6.95 21.0005 12V21H17.1505V12Z"}};

export default {
  name: "CornerRounded",
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
