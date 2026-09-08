<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M20.1255 3.5L20.4755 3.85L4.82549 19.525L12.8255 19.5V20H4.00049V11.175H4.50049L4.47549 19.175L20.1255 3.5Z"},"ultralight":{"stroke":"M19.7755 3.5L20.4755 4.2L5.55049 19.15L13.2255 19.025V20H4.00049V10.775H5.00049L4.87549 18.45L19.7755 3.5Z"},"light":{"stroke":"M19.4255 3.5L20.4755 4.55L6.22549 18.775L13.6005 18.525V20H4.00049V10.4H5.47549L5.25049 17.725L19.4255 3.5Z"},"regular":{"stroke":"M19.0755 3.5L20.4755 4.9L6.97549 18.375L14.0005 18.05V20H4.00049V10H5.97549L5.65049 17L19.0755 3.5Z"},"medium":{"stroke":"M18.6755 3.5L20.4755 5.325L8.00049 17.8L14.0005 17.425V20H4.00049V10H6.57549L6.22549 16L18.6755 3.5Z"},"semibold":{"stroke":"M18.2505 3.5L20.4755 5.75L8.77549 17.45L11.3255 20H4.00049V12.675L6.55049 15.25L18.2505 3.5Z"},"bold":{"stroke":"M17.8255 3.5L20.4755 6.2L9.42549 17.25L12.1505 20H4.00049V11.85L6.75049 14.6L17.8255 3.5Z"}};
  const f = null;

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
