<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M1.00049 18.5H18.0005V18.975H1.00049V18.5ZM6.00049 5H23.0005V5.475H6.00049V5Z"},"ultralight":{"stroke":"M1.00049 18H18.0005V18.975H1.00049V18ZM6.00049 5H23.0005V5.975H6.00049V5Z"},"light":{"stroke":"M1.00049 17.525H18.0005V18.975H1.00049V17.525ZM6.00049 5H23.0005V6.45H6.00049V5Z"},"regular":{"stroke":"M1.00049 17.025H18.0005V18.975H1.00049V17.025ZM6.00049 5H23.0005V6.95H6.00049V5Z"},"medium":{"stroke":"M1.00049 16.4H18.0005V18.975H1.00049V16.4ZM6.00049 5H23.0005V7.575H6.00049V5Z"},"semibold":{"stroke":"M1.00049 15.8H18.0005V18.975H1.00049V15.8ZM6.00049 5H23.0005V8.175H6.00049V5Z"},"bold":{"stroke":"M1.00049 15.175H18.0005V18.975H1.00049V15.175ZM6.00049 5H23.0005V8.8H6.00049V5Z"}};
  const f = null;

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
