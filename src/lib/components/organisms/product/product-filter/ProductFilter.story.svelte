<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductFilter from './ProductFilter.svelte';

  type ProductFilterStoryProps = {
    showFilters: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showFilters',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-product-filter"
  title="ProductFilter"
  component={ProductFilter}
  category="Molecules"
  description="A component for filtering products."
  tags={['filter', 'product', 'controls']}
  controls={controls}
>
  {#snippet children(props: ProductFilterStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductFilter Story</h2>
      <ProductFilter
        filters={[
          {
            id: 'category',
            label: 'Category',
            type: 'checkbox',
            options: [
              { value: 'electronics', label: 'Electronics' },
              { value: 'clothing', label: 'Clothing' },
              { value: 'books', label: 'Books' }
            ]
          },
          {
            id: 'price',
            label: 'Price Range',
            type: 'range',
            min: 0,
            max: 1000,
            step: 10
          },
          {
            id: 'brand',
            label: 'Brand',
            type: 'select',
            options: [
              { value: 'apple', label: 'Apple' },
              { value: 'samsung', label: 'Samsung' },
              { value: 'sony', label: 'Sony' }
            ]
          }
        ]}
        onFilterChange={(filterId, value) => console.log(`Filter ${filterId} changed to:`, value)}
      />
    </div>
  {/snippet}
</Story>