import { h } from "vue";

const p = {"thin":{"stroke":"M2.25049 8.1748L8.50049 1.9248L14.7505 8.1748L14.4005 8.5248L8.75049 2.8248V20.5248H21.0005V20.9998H8.25049V2.8248L2.60049 8.5248L2.25049 8.1748Z"},"ultralight":{"stroke":"M2.10059 8.3248L8.50059 1.9248L14.9006 8.3248L14.2256 9.0248L9.00059 3.6248V20.0498H21.0006V20.9998H8.00059V3.6248L2.77559 9.0248L2.10059 8.3248Z"},"light":{"stroke":"M1.92554 8.4998L8.50054 1.9248L15.0755 8.4998L14.0505 9.4998L9.22554 4.4248V19.5748H21.0005V20.9998H7.77554V4.4248L2.95054 9.4998L1.92554 8.4998Z"},"regular":{"stroke":"M1.77539 8.6498L8.50039 1.9248L15.2254 8.6498L13.8754 9.9998L9.47539 5.2498V19.0998H21.0004V20.9998H7.52539V5.2498L3.12539 9.9998L1.77539 8.6498Z"},"medium":{"stroke":"M1.75049 8.6748L8.50049 1.9248L15.2505 8.6748L13.4505 10.4748L9.77549 6.3498V18.4498H21.0005V20.9998H7.22549V6.3498L3.55049 10.4748L1.75049 8.6748Z"},"semibold":{"stroke":"M3.32544 7.0998L8.50044 1.9248L13.6754 7.0998H10.0754V17.8748H21.0004V20.9998H6.92544V7.0998H3.32544Z"},"bold":{"stroke":"M2.75049 7.6748L8.50049 1.9248L14.2505 7.6748H10.3755V17.2998H21.0005V20.9998H6.62549V7.6748H2.75049Z"}};
const f = null;

export default {
  name: "ArrowCornerUpLeft",
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
