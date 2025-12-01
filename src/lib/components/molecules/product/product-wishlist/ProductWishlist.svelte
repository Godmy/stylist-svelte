<script lang="ts">
  let {
    items = [],
    onRemove = (id: string) => {},
    onMoveToCart = (id: string) => {},
    class: className = ''
  } = $props<{
    items: Array<{
      id: string;
      title: string;
      price: number;
      currency: string;
      image: string;
      rating: number;
    }>;
    onRemove?: (id: string) => void;
    onMoveToCart?: (id: string) => void;
    class?: string;
  }>();
</script>

<div class={`bg-white rounded-lg shadow ${className}`}>
  <h2 class="text-xl font-bold p-4 border-b">Wishlist ({items.length})</h2>
  {#if items.length === 0}
    <div class="p-8 text-center text-gray-500">
      Your wishlist is empty
    </div>
  {:else}
    <div class="divide-y">
      {#each items as item}
        <div class="p-4 flex">
          {#if item.image}
            <img src={item.image} alt={item.title} class="w-20 h-20 object-cover rounded mr-4" />
          {/if}
          <div class="flex-1">
            <h3 class="font-bold">{item.title}</h3>
            <div class="flex items-center mt-1">
              <div class="flex text-yellow-400">
                {#each Array(5) as _, i}
                  <svg
                    class={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                {/each}
              </div>
            </div>
            <div class="mt-2 font-bold">{item.currency}{item.price.toFixed(2)}</div>
          </div>
          <div class="flex flex-col space-y-2 ml-4">
            <button
              onclick={() => onMoveToCart(item.id)}
              class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
            <button
              onclick={() => onRemove(item.id)}
              class="px-3 py-1 border border-gray-300 text-sm rounded hover:bg-gray-100"
            >
              Remove
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>