<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M20.5005 21V3.475H3.00049V3H21.0005V21H20.5005Z"},"ultralight":{"stroke":"M20.0005 21V3.975H3.00049V3H21.0005V21H20.0005Z"},"light":{"stroke":"M19.5005 21V4.45H3.00049V3H21.0005V21H19.5005Z"},"regular":{"stroke":"M19.0005 21V4.95H3.00049V3H21.0005V21H19.0005Z"},"medium":{"stroke":"M18.3755 21V5.575H3.00049V3H21.0005V21H18.3755Z"},"semibold":{"stroke":"M17.7755 21V6.175H3.00049V3H21.0005V21H17.7755Z"},"bold":{"stroke":"M17.1505 21V6.8H3.00049V3H21.0005V21H17.1505Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
