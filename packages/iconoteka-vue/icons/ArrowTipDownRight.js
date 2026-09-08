import { h } from "vue";

const p = {"thin":{"stroke":"M15.8255 21.75L15.4755 21.4L21.2005 15.725H3.00049V3H3.50049V15.25H21.1755L15.4755 9.6L15.8255 9.25L22.0755 15.5L15.8255 21.75Z"},"ultralight":{"stroke":"M15.6755 21.9L14.9755 21.225L20.4005 15.975H3.00049V3H3.97549V15.025H20.4005L14.9755 9.775L15.6755 9.1L22.0755 15.5L15.6755 21.9Z"},"light":{"stroke":"M15.5005 22.075L14.5005 21.05L19.6005 16.25H3.00049V3H4.47549V14.825H19.6255L14.5005 9.95L15.5005 8.925L22.0755 15.5L15.5005 22.075Z"},"regular":{"stroke":"M15.3505 22.225L14.0005 20.875L18.7505 16.5H3.00049V3H4.95049V14.6H18.8255L14.0005 10.125L15.3505 8.775L22.0755 15.5L15.3505 22.225Z"},"medium":{"stroke":"M15.3505 22.225L13.5755 20.45L17.6505 16.775H3.00049V3H5.55049V14.275H17.7005L13.5755 10.55L15.3505 8.775L22.0755 15.5L15.3505 22.225Z"},"semibold":{"stroke":"M16.9005 20.675V17.125H3.00049V3H6.15049V14.025H16.9005V10.325L22.0755 15.5L16.9005 20.675Z"},"bold":{"stroke":"M16.3255 21.25V17.35H3.00049V3H6.75049V13.65H16.3255V9.75L22.0755 15.5L16.3255 21.25Z"}};
const f = null;

export default {
  name: "ArrowTipDownRight",
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
