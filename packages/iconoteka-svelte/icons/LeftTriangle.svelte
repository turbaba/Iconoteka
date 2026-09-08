<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M19.5005 21.5752V2.42519L2.90054 12.0002L19.5005 21.5752ZM20.0005 22.4252L1.92554 12.0002L20.0005 1.5752V22.4252Z","fill":"M20 22.4252L1.92505 12.0002L20 1.5752V22.4252Z"},"ultralight":{"stroke":"M19.0255 20.7502V3.25019L3.85054 12.0002L19.0255 20.7502ZM20.0005 22.4252L1.92554 12.0002L20.0005 1.5752V22.4252Z"},"light":{"stroke":"M18.5255 19.9252V4.07519L4.80054 12.0002L18.5255 19.9252ZM20.0005 22.4252L1.92554 12.0002L20.0005 1.5752V22.4252Z"},"regular":{"stroke":"M18.0505 19.1002V4.90019L5.75054 12.0002L18.0505 19.1002ZM20.0005 22.4252L1.92554 12.0002L20.0005 1.5752V22.4252Z"},"medium":{"stroke":"M17.5005 18.1502V5.8502L6.82554 12.0002L17.5005 18.1502ZM20.0005 22.4252L1.92554 12.0002L20.0005 1.5752V22.4252Z"},"semibold":{"stroke":"M16.9505 17.2252V6.7752L7.90054 12.0002L16.9505 17.2252ZM20.0005 22.4252L1.92554 12.0002L20.0005 1.5752V22.4252Z"},"bold":{"stroke":"M16.4005 16.2752V7.72519L8.97554 12.0002L16.4005 16.2752ZM20.0005 22.4252L1.92554 12.0002L20.0005 1.5752V22.4252Z"}};
  const f = p.thin.fill;

  $: w = p[weight] || p.regular;
  $: d = w[variant] || (variant === "fill" ? f : null) || w.stroke;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
