<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M5.00049 5H5.50049V18.5H19.0005V19H5.00049V5Z"},"ultralight":{"stroke":"M5.00049 5H6.00049V18.025H19.0005V19H5.00049V5Z"},"light":{"stroke":"M5.00049 5H6.52549L6.47549 17.575L19.0005 17.525V19H5.00049V5Z"},"regular":{"stroke":"M5.00049 5H7.02549L6.97549 17.1L19.0005 17.05V19H5.00049V5Z"},"medium":{"stroke":"M5.00049 5H7.62549L7.57549 16.475L19.0005 16.45V19H5.00049V5Z"},"semibold":{"stroke":"M5.00049 5H8.20049V15.875L19.0005 15.85V19H5.00049V5Z"},"bold":{"stroke":"M5.00049 5H8.80049V15.25H19.0005V19H5.00049V5Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
