<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M21.0005 9.225H12.2505V23H11.7505V9.225H3.00049V8.75H11.7505V1H12.2505V8.75H21.0005V9.225Z"},"ultralight":{"stroke":"M21.0005 9.475H12.5005V23H11.5005V9.475H3.00049V8.5H11.5005V1H12.5005V8.5H21.0005V9.475Z"},"light":{"stroke":"M21.0005 9.725H12.7505V23H11.2505V9.725H3.00049V8.275H11.2505V1H12.7505V8.275H21.0005V9.725Z"},"regular":{"stroke":"M21.0005 9.975H13.0005V23H11.0005V9.975H3.00049V8.025H11.0005V1H13.0005V8.025H21.0005V9.975Z"},"medium":{"stroke":"M21.0005 10.25H13.3005V23H10.7005V10.25H3.00049V7.75H10.7005V1H13.3005V7.75H21.0005V10.25Z"},"semibold":{"stroke":"M21.0005 10.55H13.6005V23H10.4005V10.55H3.00049V7.45H10.4005V1H13.6005V7.45H21.0005V10.55Z"},"bold":{"stroke":"M21.0005 10.825H13.9005V23H10.1005V10.825H3.00049V7.175H10.1005V1H13.9005V7.175H21.0005V10.825Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
