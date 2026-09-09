<script>
  let { weight = "regular", variant = "stroke", size = 24, ...rest } = $props();

  const p = {"thin":{"stroke":"M8.40039 8.375H8.90039L8.87539 15.125L15.6254 15.1V15.6H8.40039V8.375Z"},"ultralight":{"stroke":"M8.37549 8.4L9.35049 8.375V14.65L15.6255 14.625L15.6005 15.6H8.37549V8.4Z"},"light":{"stroke":"M8.42529 8.375H9.87529L9.80029 14.175L15.6253 14.125V15.575H8.42529V8.375Z"},"regular":{"stroke":"M8.40039 8.375H10.3254L10.2754 13.725L15.6254 13.675L15.6004 15.6H8.40039V8.375Z"},"medium":{"stroke":"M8.40039 8.375H10.7754L10.7254 13.275L15.6254 13.2L15.6004 15.6H8.40039V8.375Z"},"semibold":{"stroke":"M8.40039 8.375H11.2754L11.2004 12.8L15.6254 12.725L15.6004 15.6H8.40039V8.375Z"},"bold":{"stroke":"M8.40039 8.375H11.7504L11.6504 12.35L15.6254 12.25V15.6H8.40039V8.375Z"}};
  const f = null;

  const w = $derived(p[weight] || p.regular);
  const d = $derived(w[variant] || (variant === "fill" ? f : null) || w.stroke);
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...rest}>
  <path d={d} fill="currentColor" />
</svg>
