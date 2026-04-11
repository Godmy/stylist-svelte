<script lang="ts">
  import type { Props } from '$stylist/commerce/type/struct/product-catalog';
  import { createProductCatalogState } from '$stylist/commerce/function/state/product-catalog';

  let props: Props = $props();
  const state = createProductCatalogState(props);
</script>

<div class={state.containerClass}>
  <div class={state.contentClass}>
    {#each props.products as product}
      {#if state.isGridLayout()}
        <div class={state.getGridItemClass()}>
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
        <div class={state.getListItemClass()}>
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


