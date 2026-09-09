<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M3.87539 3.5L19.5254 19.175L19.5004 11.175H20.0004V20H11.1754V19.5L19.1754 19.525L3.52539 3.85L3.87539 3.5Z"},"ultralight":{"stroke":"M4.22539 3.5L19.1254 18.45L19.0004 10.775H20.0004V20H10.7754V19.025L18.4504 19.15L3.52539 4.2L4.22539 3.5Z"},"light":{"stroke":"M4.57539 3.5L18.7504 17.725L18.5254 10.4H20.0004V20H10.4004V18.525L17.7754 18.775L3.52539 4.55L4.57539 3.5Z"},"regular":{"stroke":"M4.92539 3.5L18.3504 17L18.0254 10H20.0004V20H10.0004V18.05L17.0254 18.375L3.52539 4.9L4.92539 3.5Z"},"medium":{"stroke":"M5.32539 3.5L17.7754 16L17.4254 10H20.0004V20H10.0004V17.425L16.0004 17.8L3.52539 5.325L5.32539 3.5Z"},"semibold":{"stroke":"M5.75039 3.5L17.4504 15.25L20.0004 12.675V20H12.6754L15.2254 17.45L3.52539 5.75L5.75039 3.5Z"},"bold":{"stroke":"M6.17539 3.5L17.2504 14.6L20.0004 11.85V20H11.8504L14.5754 17.25L3.52539 6.2L6.17539 3.5Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
