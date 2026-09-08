<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M19.8505 15.5L19.5005 15.15L22.4255 12.25H1.00049V11.75H22.4255L19.5005 8.85L19.8505 8.5L23.3505 12L19.8505 15.5Z"},"ultralight":{"stroke":"M19.8505 15.5L19.1755 14.825L21.6755 12.5H1.00049V11.5H21.6755L19.1755 9.175L19.8505 8.5L23.3505 12L19.8505 15.5Z"},"light":{"stroke":"M20.1755 15.1752V12.7502H1.00049V11.2502H20.1755V8.8252L23.3505 12.0002L20.1755 15.1752Z"},"regular":{"stroke":"M19.8505 15.5V12.975H1.00049V11.025H19.8505V8.5L23.3505 12L19.8505 15.5Z"},"medium":{"stroke":"M19.1005 16.25V13.275H1.00049V10.725H19.1005V7.75L23.3505 12L19.1005 16.25Z"},"semibold":{"stroke":"M18.3505 17V13.575H1.00049V10.425H18.3505V7L23.3505 12L18.3505 17Z"},"bold":{"stroke":"M17.6005 17.75V13.875H1.00049V10.125H17.6005V6.25L23.3505 12L17.6005 17.75Z"}};
  const f = null;

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
