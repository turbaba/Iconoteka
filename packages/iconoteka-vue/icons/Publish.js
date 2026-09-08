import { h } from "vue";

const p = {"thin":{"stroke":"M3.00049 3.475V3H21.0005V3.475H3.00049ZM5.67549 13.525L5.32549 13.175L12.0005 6.5L18.6755 13.175L18.3255 13.525L12.2505 7.425V22H11.7505V7.425L5.67549 13.525Z"},"ultralight":{"stroke":"M3.00049 3.95V3H21.0005V3.95H3.00049ZM5.75049 14.4L5.07549 13.725L12.0005 6.8L18.9255 13.725L18.2505 14.4L12.5005 8.525V22H11.5005V8.525L5.75049 14.4Z"},"light":{"stroke":"M3.00049 4.425V3H21.0005V4.425H3.00049ZM5.85049 15.275L4.82549 14.25L12.0005 7.075L19.1755 14.25L18.1505 15.275L12.7255 9.625V22H11.2755V9.625L5.85049 15.275Z"},"regular":{"stroke":"M3.00049 4.9V3H21.0005V4.9H3.00049ZM5.92549 16.15L4.57549 14.8L12.0005 7.375L19.4255 14.8L18.0755 16.15L12.9755 10.75V22H11.0255V10.75L5.92549 16.15Z"},"medium":{"stroke":"M3.00049 5.475V3H21.0005V5.475H3.00049ZM6.12549 17.025L4.37549 15.275L12.0005 7.675L19.6255 15.275L17.8755 17.025L13.2505 11.975V22H10.7505V11.975L6.12549 17.025Z"},"semibold":{"stroke":"M3.00049 6.025V3H21.0005V6.025H3.00049ZM6.32549 17.9L4.20049 15.775L12.0005 7.95L19.8005 15.775L17.6755 17.9L13.5255 13.175V22H10.4755V13.175L6.32549 17.9Z"},"bold":{"stroke":"M3.00049 6.6V3H21.0005V6.6H3.00049ZM6.52549 18.775L4.00049 16.25L12.0005 8.25L20.0005 16.25L17.4755 18.775L13.8005 14.425V22H10.2005V14.425L6.52549 18.775Z"}};

export default {
  name: "Publish",
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
