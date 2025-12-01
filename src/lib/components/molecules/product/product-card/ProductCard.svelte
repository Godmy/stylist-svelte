<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    title = '',
    price = 0,
    currency = '$',
    image = '',
    rating = 0,
    reviewCount = 0,
    badge = '',
    description = '',
    actions,
    class: className = ''
  } = $props<{
    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    rating?: number;
    reviewCount?: number;
    badge?: string; // 'sale', 'new', 'popular', etc.
    description?: string;
    actions?: Snippet;
    class?: string;
  }>();

  const badgeStyles = {
    sale: 'bg-red-500 text-white',
    new: 'bg-blue-500 text-white',
    popular: 'bg-yellow-500 text-black',
    default: 'bg-gray-200 text-gray-800'
  };
</script>

<div class={`max-w-sm bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
  <div class="relative">
    {#if image}
      <img src={image} alt={title} class="w-full h-48 object-cover" />
    {/if}
    {#if badge}
      <span class={`absolute top-2 left-2 px-2 py-1 text-xs rounded ${badgeStyles[badge as keyof typeof badgeStyles] || badgeStyles.default}`}>
        {badge}
      </span>
    {/if}
  </div>
  
  <div class="p-4">
    <h3 class="font-bold text-lg mb-1">{title}</h3>
    
    {#if description}
      <p class="text-gray-600 text-sm mb-2">{description}</p>
    {/if}
    
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
    
    <div class="flex justify-between items-center mt-3">
      <span class="text-lg font-bold">{currency}{price.toFixed(2)}</span>
      {#if actions}
        <div>
          {@render actions()}
        </div>
      {/if}
    </div>
  </div>
</div>