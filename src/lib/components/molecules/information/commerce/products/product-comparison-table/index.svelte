<script lang="ts">
  import { ProductComparisonTableStyleManager } from '$stylist/design-system/styles/information/product-comparison-table';
  let {
    products = [],
    specifications = [],
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
    specifications: Array<{name: string; values: string[]}>;
    class?: string;
  }>();
</script>

<div class={ProductComparisonTableStyleManager.getContainerClass(className)}>
  <table class="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th class="py-3 px-4 border-b text-left"></th>
        {#each products as product, i}
          <th class="py-3 px-4 border-b text-center">
            <div class="flex flex-col items-center">
              {#if product.image}
                <img src={product.image} alt={product.name} class="w-20 h-20 object-contain mb-2" />
              {/if}
              <span class="font-bold text-lg">{product.name}</span>
              <div class="flex text-yellow-400 my-1">
                {#each Array(5) as _, j}
                  <svg
                    class={`w-4 h-4 ${j < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                {/each}
              </div>
              <span class="text-lg font-bold">{product.currency}{product.price.toFixed(2)}</span>
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each specifications as spec, i}
        <tr class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <td class="py-3 px-4 border-b font-medium">{spec.name}</td>
          {#each spec.values as value, j}
            <td class="py-3 px-4 border-b text-center">{value}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>