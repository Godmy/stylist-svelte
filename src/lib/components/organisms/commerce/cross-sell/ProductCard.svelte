<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ShoppingCart, Star, Tag, Image as ImageIcon } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    isRecommended?: boolean;
    category?: string;
    discountPercent?: number;
    tags?: string[];
  };

  type Props = {
    product: Product;
    class?: string;
    onAddToCart?: (product: Product) => void;
    currency?: string;
    locale?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    product,
    class: className = '',
    onAddToCart,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  function handleAddToCart() {
    onAddToCart?.(product);
  }
</script>

<div class={`product-card bg-white rounded-lg shadow overflow-hidden ${className}`} {...restProps}>
  <div class="aspect-w-3 aspect-h-4 bg-gray-200 overflow-hidden">
    {#if product.thumbnail}
      <img
        src={product.thumbnail}
        alt={product.name}
        class="h-48 w-full object-cover object-center"
      />
    {:else}
      <div class="h-48 w-full bg-gray-200 flex items-center justify-center">
        <ImageIcon class="h-12 w-12 text-gray-400" />
      </div>
    {/if}
  </div>

  <div class="p-4">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-sm font-medium text-gray-900">{product.name}</h3>
        {#if product.category}
          <p class="mt-1 text-xs text-gray-500">{product.category}</p>
        {/if}
      </div>
      {#if product.discountPercent}
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          -{product.discountPercent}%
        </span>
      {/if}
    </div>

    {#if product.description}
      <p class="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
    {/if}

    <div class="mt-4 flex items-center justify-between">
      <div>
        <span class="text-sm font-medium text-gray-900">{formatPrice(product.price)}</span>
        {#if product.originalPrice && product.originalPrice > product.price}
          <span class="ml-1 text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
        {/if}
      </div>

      {#if product.rating}
        <div class="flex items-center">
          <Star class={`h-4 w-4 ${product.rating >= 1 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
          <Star class={`h-4 w-4 ${product.rating >= 2 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
          <Star class={`h-4 w-4 ${product.rating >= 3 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
          <Star class={`h-4 w-4 ${product.rating >= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
          <Star class={`h-4 w-4 ${product.rating >= 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
          <span class="ml-1 text-xs text-gray-500">({product.reviewCount || 0})</span>
        </div>
      {/if}
    </div>

    <div class="mt-4">
      <Button
        variant="primary"
        size="sm"
        class="w-full"
        onclick={handleAddToCart}
        disabled={!product.inStock}
      >
        <ShoppingCart class="h-4 w-4 mr-2" />
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </Button>
    </div>
  </div>
</div>