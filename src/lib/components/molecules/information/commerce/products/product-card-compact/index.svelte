<script lang="ts">
  /**
   * ProductCardCompact - Compact variant of ProductCard
   * 
   * This is a wrapper around the main ProductCard component
   * with preset variant='compact'
   */
  import ProductCard from '../product-card/index.svelte';
  import type { Snippet } from 'svelte';

  export type { Snippet };

  let {
    title = '',
    price = 0,
    currency = '$',
    image = '',
    rating = 0,
    badge = '',
    class: className = ''
  }: {
    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    rating?: number;
    badge?: string;
    class?: string;
  } = $props();
</script>

<ProductCard
  variant="compact"
  {title}
  {price}
  {currency}
  {image}
  {rating}
  {badge}
  class={className}
/>
