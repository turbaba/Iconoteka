import { h } from "vue";

const p = {"thin":{"stroke":"M1.00098 5.475V5H23.001V5.475H1.00098ZM1.00098 18.975V18.5H6.67598V18.975H1.00098ZM9.17598 18.975V18.5H14.826V18.975H9.17598ZM17.326 18.975V18.5H23.001V18.975H17.326Z"},"ultralight":{"stroke":"M1.00098 5.975V5H23.001V5.975H1.00098ZM1.00098 18.975V18H6.67598V18.975H1.00098ZM9.17598 18.975V18H14.826V18.975H9.17598ZM17.326 18.975V18H23.001V18.975H17.326Z"},"light":{"stroke":"M1.00098 6.45V5H23.001V6.45H1.00098ZM1.00098 18.975V17.525H6.67598V18.975H1.00098ZM9.17598 18.975V17.525H14.826V18.975H9.17598ZM17.326 18.975V17.525H23.001V18.975H17.326Z"},"regular":{"stroke":"M1.00098 6.95V5H23.001V6.95H1.00098ZM1.00098 18.975V17.025H6.67598V18.975H1.00098ZM9.17598 18.975V17.025H14.826V18.975H9.17598ZM17.326 18.975V17.025H23.001V18.975H17.326Z"},"medium":{"stroke":"M1.00098 7.575V5H23.001V7.575H1.00098ZM1.00098 18.975V16.4H6.77598V18.975H1.00098ZM9.12598 18.975V16.4H14.876V18.975H9.12598ZM17.226 18.975V16.4H23.001V18.975H17.226Z"},"semibold":{"stroke":"M1.00098 8.175V5H23.001V8.175H1.00098ZM1.00098 18.975V15.8H6.90098V18.975H1.00098ZM9.05098 18.975V15.8H14.951V18.975H9.05098ZM17.101 18.975V15.8H23.001V18.975H17.101Z"},"bold":{"stroke":"M1.00098 8.8V5H23.001V8.8H1.00098ZM1.00098 18.975V15.175H7.00098V18.975H1.00098ZM9.00098 18.975V15.175H15.001V18.975H9.00098ZM17.001 18.975V15.175H23.001V18.975H17.001Z"}};
const f = null;

export default {
  name: "PowerInput",
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
