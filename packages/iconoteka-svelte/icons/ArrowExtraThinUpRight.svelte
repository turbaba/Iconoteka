<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M3.85049 20.5L3.50049 20.15L19.1755 4.475L15.0505 4.5V4H20.0005V8.95H19.5005L19.5255 4.825L3.85049 20.5Z"},"ultralight":{"stroke":"M4.22549 20.5L3.50049 19.775L18.4505 4.825L15.0505 4.975V4H20.0005V8.95H19.0255L19.1755 5.55L4.22549 20.5Z"},"light":{"stroke":"M4.57549 20.5L3.50049 19.45L17.2255 5.7L15.5255 4H20.0005V8.475L18.3005 6.775L4.57549 20.5Z"},"regular":{"stroke":"M4.90049 20.5L3.50049 19.125L16.8505 5.775L15.0505 4H20.0005V8.95L18.2255 7.15L4.90049 20.5Z"},"medium":{"stroke":"M5.32549 20.5L3.50049 18.7L16.1005 6.1L14.0005 4H20.0005V10L17.9005 7.9L5.32549 20.5Z"},"semibold":{"stroke":"M5.72549 20.5L3.50049 18.275L15.3505 6.425L12.9255 4H20.0005V11.075L18.2505 9.3L17.5755 8.65L5.72549 20.5Z"},"bold":{"stroke":"M6.15049 20.5L3.50049 17.85L14.6255 6.725L11.8755 4H20.0005V12.125L17.2755 9.375L6.15049 20.5Z"}};
  const f = null;

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
