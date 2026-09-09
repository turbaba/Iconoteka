import { createElement, forwardRef } from "react";

const p = {"thin":{"stroke":"M11.7505 23.5V4.925L5.22549 11.475L4.87549 11.125L12.0005 4L19.1255 11.125L18.7755 11.475L12.2505 4.925V23.5H11.7505ZM5.00049 0.975V0.5H19.0005V0.975H5.00049Z"},"ultralight":{"stroke":"M11.5005 23.5V5.725L5.55049 11.8L4.87549 11.125L12.0005 4L19.1255 11.125L18.4505 11.8L12.5005 5.725V23.5H11.5005ZM5.00049 1.45V0.5H19.0005V1.45H5.00049Z"},"light":{"stroke":"M11.2755 23.5V6.55L5.90049 12.15L4.87549 11.125L12.0005 4L19.1255 11.125L18.1005 12.15L12.7255 6.55V23.5H11.2755ZM5.00049 1.925V0.5H19.0005V1.925H5.00049Z"},"regular":{"stroke":"M11.0255 23.5V7.375L6.22549 12.475L4.87549 11.125L12.0005 4L19.1255 11.125L17.7755 12.475L12.9755 7.375V23.5H11.0255ZM5.00049 2.4V0.5H19.0005V2.4H5.00049Z"},"medium":{"stroke":"M10.7255 23.5V9L6.67549 13.275L4.87549 11.45L12.0005 4.325L19.1255 11.45L17.3255 13.275L13.2755 9V23.5H10.7255ZM5.00049 3V0.5H19.0005V3H5.00049Z"},"semibold":{"stroke":"M10.4255 23.5V10.025H6.82549L12.0005 4.775L17.1755 10.025H13.5755V23.5H10.4255ZM5.00049 3.625V0.5H19.0005V3.625H5.00049Z"},"bold":{"stroke":"M10.1005 23.5V11.15H6.25049L12.0005 5.35L17.7505 11.15H13.9005V23.5H10.1005ZM5.00049 4.25V0.5H19.0005V4.25H5.00049Z"}};
const f = null;

const TabUp = forwardRef(function TabUp(
  { weight = "regular", variant = "stroke", size = 24, ...rest }, ref
) {
  const w = p[weight] || p.regular;
  const d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
  return createElement(
    "svg",
    { ref, width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      xmlns: "http://www.w3.org/2000/svg", ...rest },
    createElement("path", { d, fill: "currentColor" })
  );
});

TabUp.displayName = "TabUp";

export default TabUp;
