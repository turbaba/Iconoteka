<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M22.001 11.75V12.225H2.00098V11.75H22.001Z"},"ultralight":{"stroke":"M22.001 11.5V12.475H2.00098V11.5H22.001Z"},"light":{"stroke":"M22.001 11.25V12.7H2.00098V11.25H22.001Z"},"regular":{"stroke":"M22.001 11V12.95H2.00098V11H22.001Z"},"medium":{"stroke":"M22.001 10.7251V13.2501H2.00098V10.7251H22.001Z"},"semibold":{"stroke":"M22.001 10.4248V13.5498H2.00098V10.4248H22.001Z"},"bold":{"stroke":"M22.001 10.1499V13.8499H2.00098V10.1499H22.001Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
