<script lang="ts">
  let {
    products = [],
    layout = 'grid', // 'grid' or 'list'
    class: className = ''
  } = $props<{
    products: Array<{
      id: string;
      title: string;
      price: number;
      currency: string;
      image: string;
      rating: number;
      badge?: string;
    }>;
    layout?: 'grid' | 'list';
    class?: string;
  }>();
</script>

<div class={`bg-white rounded-lg shadow ${className}`}>
  <div class={`${layout === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6' : 'flex flex-col p-4'}`}>
    {#each products as product}
      {#if layout === 'grid'}
        <div class="border rounded-lg overflow-hidden">
          {#if product.image}
            <img src={product.image} alt={product.title} class="w-full h-48 object-cover" />
          {/if}
          <div class="p-4">
            <h3 class="font-bold">{product.title}</h3>
            <div class="flex items-center mt-1">
              <div class="flex text-yellow-400">
                {#each Array(5) as _, i}
                  <svg
                    class={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                {/each}
              </div>
            </div>
            <div class="mt-2">
              <span class="font-bold">{product.currency}{product.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      {:else}
        <div class="flex border-b py-4 last:border-b-0">
          {#if product.image}
            <img src={product.image} alt={product.title} class="w-24 h-24 object-cover rounded mr-4" />
          {/if}
          <div class="flex-1">
            <h3 class="font-bold">{product.title}</h3>
            <div class="flex items-center mt-1">
              <div class="flex text-yellow-400">
                {#each Array(5) as _, i}
                  <svg
                    class={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                {/each}
              </div>
            </div>
            <div class="mt-2">
              <span class="font-bold">{product.currency}{product.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>