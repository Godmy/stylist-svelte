<script lang="ts">
  /**
   * ProductCardWithActions - ProductCard variant with actions slot
   * 
   * This is a wrapper around the main ProductCard component
   * with preset variant='with-actions'
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
    reviewCount = 0,
    description = '',
    actions,
    class: className = ''
  }: {
    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    rating?: number;
    reviewCount?: number;
    description?: string;
    actions?: Snippet;
    class?: string;
  } = $props();
</script>

<ProductCard
  variant="with-actions"
  {title}
  {price}
  {currency}
  {image}
  {rating}
  {reviewCount}
  {description}
  {actions}
  class={className}
/>
