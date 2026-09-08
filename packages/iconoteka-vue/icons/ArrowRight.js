import { h } from "vue";

const p = {"thin":{"stroke":"M14.2755 3.6498L14.6255 3.2998L23.3255 11.9998L14.6255 20.6998L14.2755 20.3498L22.4005 12.2498H1.00049V11.7498H22.4005L14.2755 3.6498Z"},"ultralight":{"stroke":"M13.7755 3.825L14.4505 3.125L23.3255 12L14.4505 20.875L13.7755 20.175L21.5255 12.5H1.00049V11.5H21.5255L13.7755 3.825Z"},"light":{"stroke":"M13.2505 4.0001L14.3005 2.9751L23.3255 12.0001L14.3005 21.0251L13.2505 20.0001L20.7005 12.7251H1.00049V11.2751H20.7005L13.2505 4.0001Z"},"regular":{"stroke":"M12.7505 4.1748L14.1255 2.7998L23.3255 11.9998L14.1255 21.1998L12.7505 19.8248L19.8255 12.9748H1.00049V11.0248H19.8255L12.7505 4.1748Z"},"medium":{"stroke":"M12.1255 4.4001L13.9255 2.6001L23.3255 12.0001L13.9255 21.4001L12.1255 19.6001L18.7755 13.2751H1.00049V10.7251H18.7755L12.1255 4.4001Z"},"semibold":{"stroke":"M11.5255 4.6498L13.7505 2.4248L23.3255 11.9998L13.7505 21.5748L11.5255 19.3498L17.7505 13.5498H1.00049V10.4498H17.7505L11.5255 4.6498Z"},"bold":{"stroke":"M10.9005 4.8751L13.5505 2.2251L23.3255 12.0001L13.5505 21.7751L10.9005 19.1251L16.6755 13.8501H1.00049V10.1501H16.6755L10.9005 4.8751Z"}};

export default {
  name: "ArrowRight",
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
