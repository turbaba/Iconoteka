<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M14.5253 6.8999L14.8753 7.2499L10.1003 11.9999L14.8753 16.7499L14.5253 17.0999L9.42529 11.9999L14.5253 6.8999Z"},"ultralight":{"stroke":"M14.3256 6.8999L15.0256 7.5749L10.5756 11.9999L15.0256 16.4249L14.3256 17.0999L9.22559 11.9999L14.3256 6.8999Z"},"light":{"stroke":"M14.1503 6.8999L15.1753 7.9249L11.0253 11.9999L15.1753 16.0749L14.1503 17.0999L9.05029 11.9999L14.1503 6.8999Z"},"regular":{"stroke":"M13.9506 6.8999L15.3256 8.2499L11.5006 11.9999L15.3256 15.7499L13.9506 17.0999L8.85059 11.9999L13.9506 6.8999Z"},"medium":{"stroke":"M13.7753 6.8999L15.4753 8.5749L11.9753 11.9999L15.4753 15.4249L13.7753 17.0999L8.67529 11.9999L13.7753 6.8999Z"},"semibold":{"stroke":"M13.6005 6.8999L15.6505 8.9249L12.4505 11.9999L15.6505 15.0749L13.6005 17.0999L8.50049 11.9999L13.6005 6.8999Z"},"bold":{"stroke":"M13.4257 6.8999L15.8007 9.2499L12.9257 11.9999L15.8007 14.7499L13.4257 17.0999L8.32568 11.9999L13.4257 6.8999Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
