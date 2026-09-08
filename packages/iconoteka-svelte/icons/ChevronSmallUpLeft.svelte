<script>
  export let weight = "regular";
  export let variant = "stroke";
  export let size = 24;

  const p = {"thin":{"stroke":"M8.40039 15.6249V8.3999H15.6254V8.8999L8.87539 8.8749L8.90039 15.6249H8.40039Z"},"ultralight":{"stroke":"M8.37549 15.5999V8.3999H15.6005L15.6255 9.3749L9.35049 9.3499V15.6249L8.37549 15.5999Z"},"light":{"stroke":"M8.42529 15.6248V8.4248H15.6253V9.8748L9.80029 9.8248L9.87529 15.6248H8.42529Z"},"regular":{"stroke":"M8.40039 15.6249V8.3999H15.6004L15.6254 10.3249L10.2754 10.2749L10.3254 15.6249H8.40039Z"},"medium":{"stroke":"M8.40039 15.6249V8.3999H15.6004L15.6254 10.7999L10.7254 10.7249L10.7754 15.6249H8.40039Z"},"semibold":{"stroke":"M8.40039 15.6249V8.3999H15.6004L15.6254 11.2749L11.2004 11.1999L11.2754 15.6249H8.40039Z"},"bold":{"stroke":"M8.40039 15.6249V8.3999H15.6254V11.7499L11.6504 11.6499L11.7504 15.6249H8.40039Z"}};

  $: w = p[weight] || p.regular;
  $: d = w[variant] || w.stroke || w.fill;
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none"
     xmlns="http://www.w3.org/2000/svg" {...$$restProps}>
  <path {d} fill="currentColor" />
</svg>
