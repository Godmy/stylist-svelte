<script lang="ts">
  import { ProductComparisonStyleManager } from '$stylist/design-system/styles/information/product-comparison';
  let {
    products = [],
    features = [],
    class: className = ''
  } = $props<{
    products: Array<{
      id: string;
      name: string;
      price: number;
      currency: string;
      image: string;
      rating: number;
    }>;
    features: string[];
    class?: string;
  }>();
</script>

<div class={ProductComparisonStyleManager.getContainerClass(className)}>
  <table class="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th class="py-2 px-4 border-b text-left">Feature</th>
        {#each products as product}
          <th class="py-2 px-4 border-b text-center">
            <div class="flex flex-col items-center">
              {#if product.image}
                <img src={product.image} alt={product.name} class="w-16 h-16 object-contain mb-2" />
              {/if}
              <span class="font-bold">{product.name}</span>
              <div class="flex text-yellow-400 my-1">
                {#each Array(5) as _, i}
                  <svg
                    class={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                {/each}
              </div>
              <span class="font-bold">{product.currency}{product.price.toFixed(2)}</span>
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each features as feature}
        <tr class={feature.index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
          <td class="py-2 px-4 border-b font-medium">{feature}</td>
          {#each products as product}
            <td class="py-2 px-4 border-b text-center">
              {#if Math.random() > 0.3} 
                <svg class="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              {:else}
                <svg class="w-5 h-5 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>