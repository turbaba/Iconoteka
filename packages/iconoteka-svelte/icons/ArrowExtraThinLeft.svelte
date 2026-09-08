<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M4.15039 15.5L0.650391 12L4.15039 8.5L4.50039 8.85L1.57539 11.75H23.0004V12.25H1.57539L4.50039 15.15L4.15039 15.5Z"},"ultralight":{"stroke":"M4.15039 15.5L0.650391 12L4.15039 8.5L4.82539 9.175L2.32539 11.5H23.0004V12.5H2.32539L4.82539 14.825L4.15039 15.5Z"},"light":{"stroke":"M3.82539 15.1752L0.650391 12.0002L3.82539 8.8252V11.2502H23.0004V12.7502H3.82539V15.1752Z"},"regular":{"stroke":"M4.15039 15.5L0.650391 12L4.15039 8.5V11.025H23.0004V12.975H4.15039V15.5Z"},"medium":{"stroke":"M4.90039 16.25L0.650391 12L4.90039 7.75V10.725H23.0004V13.275H4.90039V16.25Z"},"semibold":{"stroke":"M5.65039 17L0.650391 12L5.65039 7V10.425H23.0004V13.575H5.65039V17Z"},"bold":{"stroke":"M6.40039 17.75L0.650391 12L6.40039 6.25V10.125H23.0004V13.875H6.40039V17.75Z"}};
  const f = null;

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
