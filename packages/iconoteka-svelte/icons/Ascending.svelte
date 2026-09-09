<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M19.001 11.75V12.225H5.00098V11.75H19.001ZM23.001 20.525V21H1.00098V20.525H23.001ZM16.001 3V3.475H8.00098V3H16.001Z"},"ultralight":{"stroke":"M19.001 11.525V12.475H5.00098V11.525H19.001ZM23.001 20.05V21H1.00098V20.05H23.001ZM16.001 3V3.95H8.00098V3H16.001Z"},"light":{"stroke":"M19.001 11.275V12.7H5.00098V11.275H19.001ZM23.001 19.575V21H1.00098V19.575H23.001ZM16.001 3V4.425H8.00098V3H16.001Z"},"regular":{"stroke":"M19.001 11.05V12.95H5.00098V11.05H19.001ZM23.001 19.1V21H1.00098V19.1H23.001ZM16.001 3V4.9H8.00098V3H16.001Z"},"medium":{"stroke":"M19.001 10.75V13.25H5.00098V10.75H19.001ZM23.001 18.525V21H1.00098V18.525H23.001ZM16.001 3V5.475H8.00098V3H16.001Z"},"semibold":{"stroke":"M19.001 10.475V13.525H5.00098V10.475H19.001ZM23.001 17.925V21H1.00098V17.925H23.001ZM16.001 3V6.075H8.00098V3H16.001Z"},"bold":{"stroke":"M19.001 10.175V13.825H5.00098V10.175H19.001ZM23.001 17.35V21H1.00098V17.35H23.001ZM16.001 3V6.65H8.00098V3H16.001Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
