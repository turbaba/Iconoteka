<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M5.00049 19V5H19.0005V5.5H5.50049V19H5.00049Z"},"ultralight":{"stroke":"M5.00049 19V5H19.0005V5.975H6.00049V19H5.00049Z"},"light":{"stroke":"M5.00049 19V5H19.0005V6.475L6.47549 6.425L6.52549 19H5.00049Z"},"regular":{"stroke":"M5.00049 19V5H19.0005V6.95L6.97549 6.9L7.02549 19H5.00049Z"},"medium":{"stroke":"M5.00049 19V5H19.0005V7.55L7.57549 7.525L7.62549 19H5.00049Z"},"semibold":{"stroke":"M5.00049 19V5H19.0005V8.15L8.20049 8.125V19H5.00049Z"},"bold":{"stroke":"M5.00049 19V5H19.0005V8.75H8.80049V19H5.00049Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
