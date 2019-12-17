<script>
  export let text;
  export let bg_color;
</script>

<div class="container mx-auto {bg_color}">
  <slot>{text}</slot>
</div>
