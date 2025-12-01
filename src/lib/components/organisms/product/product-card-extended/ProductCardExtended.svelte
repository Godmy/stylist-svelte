<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title = '',
    price = 0,
    currency = '$',
    image = '',
    rating = 0,
    reviewCount = 0,
    description = '',
    features = [],
    badge = '',
    onAddToCart = () => {},
    onWishlist = () => {},
    class: className = ''
  } = $props<{
    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    rating?: number;
    reviewCount?: number;
    description?: string;
    features?: string[];
    badge?: string;
    onAddToCart?: () => void;
    onWishlist?: () => void;
    class?: string;
  }>();

  const badgeStyles = {
    sale: 'bg-red-500 text-white',
    new: 'bg-blue-500 text-white',
    popular: 'bg-yellow-500 text-black',
    default: 'bg-gray-200 text-gray-800'
  };
</script>

<div class={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
  <div class="relative">
    {#if image}
      <img src={image} alt={title} class="w-full h-56 object-cover" />
    {/if}
    {#if badge}
      <span class={`absolute top-3 left-3 px-2.5 py-1 text-xs rounded ${badgeStyles[badge as keyof typeof badgeStyles] || badgeStyles.default}`}>
        {badge}
      </span>
    {/if}
  </div>
  
  <div class="p-5">
    <h3 class="font-bold text-lg mb-1">{title}</h3>
    
    <div class="flex items-center mb-2">
      <div class="flex text-yellow-400">
        {#each Array(5) as _, i}
          <svg
            class={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'fill-gray-300'}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        {/each}
      </div>
      <span class="text-gray-600 text-sm ml-1">({reviewCount})</span>
    </div>
    
    <p class="text-gray-700 text-sm mb-3">{description}</p>
    
    {#if features.length > 0}
      <ul class="mb-4 space-y-1">
        {#each features as feature}
          <li class="flex items-start">
            <svg class="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-sm text-gray-600">{feature}</span>
          </li>
        {/each}
      </ul>
    {/if}
    
    <div class="flex justify-between items-center mt-4">
      <span class="text-xl font-bold">{currency}{price.toFixed(2)}</span>
      <div class="space-x-2">
        <button
          onclick={onAddToCart}
          class="px-3 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onclick={onWishlist}
          class="p-1.5 border border-gray-300 rounded hover:bg-gray-100"
          aria-label="Add to wishlist"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>