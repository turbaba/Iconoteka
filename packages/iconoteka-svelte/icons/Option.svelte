<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M2.00098 3H8.97598L15.376 20.525H22.001V21H15.026L8.62598 3.475H2.00098V3ZM11.826 3.475H22.001V3H11.626L11.826 3.475Z"},"ultralight":{"stroke":"M2.00098 3H9.22598L15.451 20.05H22.001V21H14.776L8.55098 3.95H2.00098V3ZM12.251 3.95H22.001V3H11.876L12.251 3.95Z"},"light":{"stroke":"M2.00098 3H9.50098L15.551 19.575H22.001V21H14.501L8.45098 4.425H2.00098V3ZM12.676 4.425H22.001V3H12.151L12.676 4.425Z"},"regular":{"stroke":"M2.00098 3H9.75098L15.626 19.1H22.001V21H14.251L8.37598 4.9H2.00098V3ZM13.101 4.9H22.001V3H12.401L13.101 4.9Z"},"medium":{"stroke":"M2.00098 3H10.076L15.726 18.5H22.001V21H13.926L8.27598 5.5H2.00098V3ZM13.476 5.5H22.001V3H12.551L13.476 5.5Z"},"semibold":{"stroke":"M2.00098 3H10.401L15.851 17.9H22.001V21H13.626L8.17598 6.1H2.00098V3ZM13.826 6.1H22.001V3H12.701L13.826 6.1Z"},"bold":{"stroke":"M2.00098 3H10.726L15.951 17.3H22.001V21H13.301L8.07598 6.7H2.00098V3ZM14.201 6.7H22.001V3H12.851L14.201 6.7Z"}};
  const f = null;

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
