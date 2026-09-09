<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M3.00049 17H3.50049V21H3.00049V17Z"},"ultralight":{"stroke":"M3.00049 17H3.97549V21H3.00049V17Z"},"light":{"stroke":"M3.00049 17H4.42549V21H3.00049V17Z"},"regular":{"stroke":"M3.00049 17H4.90049V21H3.00049V17Z"},"medium":{"stroke":"M3.00049 17H5.47549V21H3.00049V17Z"},"semibold":{"stroke":"M3.00049 17H6.02549V21H3.00049V17Z"},"bold":{"stroke":"M3.00049 17H6.60049V21H3.00049V17Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
