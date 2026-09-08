import { h } from "vue";

const p = {"thin":{"stroke":"M7.72539 19.4998L19.1754 19.5248L3.52539 3.8998L3.87539 3.5498L19.5254 19.1748L19.5004 7.7248H20.0004V19.9998H7.72539V19.4998Z"},"ultralight":{"stroke":"M7.47539 19.0248L18.4254 19.0998L3.52539 4.2498L4.22539 3.5498L19.1004 18.4248L19.0254 7.4748H20.0004V19.9998H7.47539V19.0248Z"},"light":{"stroke":"M7.25039 18.5248L17.6254 18.6748L3.52539 4.5748L4.55039 3.5498L18.6504 17.6248L18.5254 7.2498H20.0004V19.9998H7.25039V18.5248Z"},"regular":{"stroke":"M7.00039 18.0498L16.8504 18.2248L3.52539 4.9248L4.90039 3.5498L18.2004 16.8498L18.0504 6.9998H20.0004V19.9998H7.00039V18.0498Z"},"medium":{"stroke":"M6.72539 17.4498L15.8754 17.6998L3.52539 5.3498L5.32539 3.5498L17.7004 15.9248L17.4504 6.7248H20.0004V19.9998H6.72539V17.4498Z"},"semibold":{"stroke":"M6.45039 16.8748L14.9504 17.1748L3.52539 5.7498L5.72539 3.5498L17.1504 14.9748L16.8754 6.4748H20.0004V19.9998H6.45039V16.8748Z"},"bold":{"stroke":"M6.17539 16.2748L13.9504 16.5998L3.52539 6.1748L6.15039 3.5498L16.6004 13.9998L16.2754 6.1998H20.0004V19.9998H6.17539V16.2748Z"}};
const f = null;

export default {
  name: "ArrowDownRight",
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
