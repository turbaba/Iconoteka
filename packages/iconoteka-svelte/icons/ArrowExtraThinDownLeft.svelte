<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M20.1505 3.5L20.5005 3.85L4.82549 19.525L8.95049 19.5V20H4.00049V15.05H4.50049L4.47549 19.175L20.1505 3.5Z"},"ultralight":{"stroke":"M19.7755 3.5L20.5005 4.225L5.55049 19.175L8.95049 19.025V20H4.00049V15.05H4.97549L4.82549 18.45L19.7755 3.5Z"},"light":{"stroke":"M19.4255 3.5L20.5005 4.55L6.77549 18.3L8.47549 20H4.00049V15.525L5.70049 17.225L19.4255 3.5Z"},"regular":{"stroke":"M19.1005 3.5L20.5005 4.875L7.17549 18.2L8.95049 20H4.00049V15.05L5.77549 16.85L19.1005 3.5Z"},"medium":{"stroke":"M18.6755 3.5L20.5005 5.3L7.90049 17.9L10.0005 20H4.00049V14L6.10049 16.1L18.6755 3.5Z"},"semibold":{"stroke":"M18.2755 3.5L20.5005 5.725L8.65049 17.575L11.0755 20H4.00049V12.925L5.75049 14.7L6.42549 15.35L18.2755 3.5Z"},"bold":{"stroke":"M17.8505 3.5L20.5005 6.15L9.40049 17.25L12.1255 20H4.00049V11.875L6.75049 14.6L17.8505 3.5Z"}};

  $: w = p[weight] || p.regular;
  $: d = w[variant] || w.stroke || w.fill;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
