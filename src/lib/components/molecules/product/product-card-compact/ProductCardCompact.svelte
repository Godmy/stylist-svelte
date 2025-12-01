<script lang="ts">
  let {
    title = '',
    price = 0,
    currency = '$',
    image = '',
    rating = 0,
    badge = '',
    class: className = ''
  } = $props<{
    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    rating?: number;
    badge?: string;
    class?: string;
  }>();

  const badgeStyles = {
    sale: 'bg-red-500 text-white',
    new: 'bg-blue-500 text-white',
    popular: 'bg-yellow-500 text-black',
    default: 'bg-gray-200 text-gray-800'
  };
</script>

<div class={`flex bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
  {#if image}
    <img src={image} alt={title} class="w-24 h-24 object-cover" />
  {/if}
  <div class="p-3 flex-1">
    <div class="flex justify-between">
      <h3 class="font-medium text-sm truncate">{title}</h3>
      {#if badge}
        <span class={`text-xs px-1.5 py-0.5 rounded ${badgeStyles[badge as keyof typeof badgeStyles] || badgeStyles.default}`}>
          {badge}
        </span>
      {/if}
    </div>
    <div class="flex items-center mt-1">
      <div class="flex text-yellow-400">
        {#each Array(5) as _, i}
          <svg
            class={`w-3 h-3 ${i < Math.floor(rating) ? 'fill-current' : 'fill-gray-300'}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        {/each}
      </div>
    </div>
    <div class="mt-1">
      <span class="font-bold text-sm">{currency}{price.toFixed(2)}</span>
    </div>
  </div>
</div>