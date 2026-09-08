import { h } from "vue";

const p = {"thin":{"stroke":"M3.67568 14.275L11.7507 22.4V1H12.2507V22.4L20.3257 14.275L20.6757 14.625L12.0007 23.325L3.32568 14.625L3.67568 14.275Z"},"ultralight":{"stroke":"M3.85039 13.775L11.5004 21.525V1H12.5004V21.525L20.1504 13.775L20.8504 14.45L12.0004 23.325L3.15039 14.45L3.85039 13.775Z"},"light":{"stroke":"M4.00059 13.25L11.2506 20.675V1H12.7506V20.675L20.0006 13.25L21.0256 14.3L12.0006 23.325L2.97559 14.3L4.00059 13.25Z"},"regular":{"stroke":"M4.17529 12.75L11.0003 19.8V1H13.0003V19.8L19.8253 12.75L21.2003 14.125L12.0003 23.325L2.80029 14.125L4.17529 12.75Z"},"medium":{"stroke":"M4.40059 12.15L10.7006 18.775V1H13.3006V18.775L19.6006 12.15L21.4006 13.925L12.0006 23.325L2.60059 13.925L4.40059 12.15Z"},"semibold":{"stroke":"M4.62529 11.525L10.4253 17.75V1H13.5753V17.75L19.3753 11.525L21.5753 13.75L12.0003 23.325L2.42529 13.75L4.62529 11.525Z"},"bold":{"stroke":"M4.85059 10.925L10.1256 16.7V1H13.8756V16.7L19.1506 10.925L21.7756 13.55L12.0006 23.325L2.22559 13.55L4.85059 10.925Z"}};

export default {
  name: "ArrowDown",
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
