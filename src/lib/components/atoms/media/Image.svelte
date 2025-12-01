<script lang="ts">
  type Props = {
    src?: string;
    alt?: string;
    width?: string | number;
    height?: string | number;
    class?: string;
  };

  let {
    src = '',
    alt = '',
    width = 'auto' as string | number,
    height = 'auto' as string | number,
    class: className = ''
  } = $props() as Props;
</script>

<img 
  {src} 
  {alt} 
  {width} 
  {height}
  class={className}
/>
