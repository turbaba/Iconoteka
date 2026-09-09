<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M21 12.225H3V11.75H21V12.225ZM21 3.475H3V3H21V3.475ZM21 21H3V20.525H21V21Z"},"ultralight":{"stroke":"M21 12.475H3V11.525H21V12.475ZM21 3.95H3V3H21V3.95ZM21 21H3V20.05H21V21Z"},"light":{"stroke":"M21 12.7H3V11.275H21V12.7ZM21 4.425H3V3H21V4.425ZM21 21H3V19.575H21V21Z"},"regular":{"stroke":"M21 12.95H3V11.05H21V12.95ZM21 4.9H3V3H21V4.9ZM21 21H3V19.1H21V21Z"},"medium":{"stroke":"M21 13.225H3V10.775H21V13.225ZM21 5.475H3V3H21V5.475ZM21 21H3V18.525H21V21Z"},"semibold":{"stroke":"M21 13.525H3V10.475H21V13.525ZM21 6.025H3V3H21V6.025ZM21 21H3V17.975H21V21Z"},"bold":{"stroke":"M21 13.8H3V10.2H21V13.8ZM21 6.6H3V3H21V6.6ZM21 21H3V17.4H21V21Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
