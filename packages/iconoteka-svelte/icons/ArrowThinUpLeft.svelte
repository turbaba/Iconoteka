<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M20.1255 20.5L4.47549 4.825L4.50049 12.825H4.00049V4H12.8255V4.5L4.82549 4.475L20.4755 20.15L20.1255 20.5Z"},"ultralight":{"stroke":"M19.7755 20.5L4.87549 5.55L5.00049 13.225H4.00049V4H13.2255V4.975L5.55049 4.85L20.4755 19.8L19.7755 20.5Z"},"light":{"stroke":"M19.4255 20.5L5.25049 6.275L5.47549 13.6H4.00049V4H13.6005V5.475L6.22549 5.225L20.4755 19.45L19.4255 20.5Z"},"regular":{"stroke":"M19.0755 20.5L5.65049 7L5.97549 14H4.00049V4H14.0005V5.95L6.97549 5.625L20.4755 19.1L19.0755 20.5Z"},"medium":{"stroke":"M18.6755 20.5L6.22549 8L6.57549 14H4.00049V4H14.0005V6.575L8.00049 6.2L20.4755 18.675L18.6755 20.5Z"},"semibold":{"stroke":"M18.2505 20.5L6.55049 8.75L4.00049 11.325V4H11.3255L8.77549 6.55L20.4755 18.25L18.2505 20.5Z"},"bold":{"stroke":"M17.8255 20.5L6.75049 9.4L4.00049 12.15V4H12.1505L9.42549 6.75L20.4755 17.8L17.8255 20.5Z"}};
  const f = null;

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
