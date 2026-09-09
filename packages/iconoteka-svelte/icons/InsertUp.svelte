<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M2.85049 21.5L2.50049 21.15L12.0005 11.7L21.5005 21.15L21.1505 21.5L12.0005 12.4L2.85049 21.5ZM3.00049 3H21.0005V3.5H3.00049V3Z"},"ultralight":{"stroke":"M3.20049 21.5L2.50049 20.8L12.0005 11.325L21.5005 20.8L20.8005 21.5L12.0005 12.7L3.20049 21.5ZM3.00049 3H21.0005V3.975H3.00049V3Z"},"light":{"stroke":"M3.55049 21.5L2.50049 20.475L12.0005 10.975L21.5005 20.475L20.4505 21.5L12.0005 12.975L3.55049 21.5ZM3.00049 3H21.0005V4.475H3.00049V3Z"},"regular":{"stroke":"M3.90049 21.5L2.50049 20.125L12.0005 10.6L21.5005 20.125L20.1005 21.5L12.0005 13.275L3.90049 21.5ZM3.00049 3H21.0005V4.95H3.00049V3Z"},"medium":{"stroke":"M4.30049 21.5L2.50049 19.725L12.0005 10.2L21.5005 19.725L19.7005 21.5L12.0005 13.7L4.30049 21.5ZM3.00049 3H21.0005V5.525H3.00049V3Z"},"semibold":{"stroke":"M4.72549 21.5L2.50049 19.3L12.0005 9.8L21.5005 19.3L19.2755 21.5L12.0005 14.1L4.72549 21.5ZM3.00049 3H21.0005V6.125H3.00049V3Z"},"bold":{"stroke":"M5.12549 21.5L2.50049 18.9L12.0005 9.4L21.5005 18.9L18.8755 21.5L12.0005 14.525L5.12549 21.5ZM3.00049 3H21.0005V6.7H3.00049V3Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
