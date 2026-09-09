<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M21.8755 6.7001L12.0005 16.5751L2.12549 6.7001L2.47549 6.3501L12.0005 15.8751L21.5255 6.3501L21.8755 6.7001Z"},"ultralight":{"stroke":"M21.8755 7.0501L12.0005 16.9251L2.12549 7.0501L2.82549 6.3501L12.0005 15.5501L21.1755 6.3501L21.8755 7.0501Z"},"light":{"stroke":"M21.9006 7.3751L12.0006 17.2751L2.10059 7.3751L3.15059 6.3501L12.0006 15.2501L20.8506 6.3501L21.9006 7.3751Z"},"regular":{"stroke":"M21.9006 7.7251L12.0006 17.6251L2.10059 7.7251L3.50059 6.3501L12.0006 14.9251L20.5006 6.3501L21.9006 7.7251Z"},"medium":{"stroke":"M21.9006 8.1501L12.0006 18.0501L2.10059 8.1501L3.90059 6.3501L12.0006 14.5001L20.1006 6.3501L21.9006 8.1501Z"},"semibold":{"stroke":"M21.9006 8.5501L12.0006 18.4501L2.10059 8.5501L4.32559 6.3501L12.0006 14.1001L19.6756 6.3501L21.9006 8.5501Z"},"bold":{"stroke":"M21.9006 8.9751L12.0006 18.8751L2.10059 8.9751L4.72559 6.3501L12.0006 13.6751L19.2756 6.3501L21.9006 8.9751Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
