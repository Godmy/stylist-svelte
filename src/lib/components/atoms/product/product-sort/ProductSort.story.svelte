<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductSort from './ProductSort.svelte';

  type ProductSortStoryProps = {
    selectedOption: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'selectedOption',
      type: 'select',
      defaultValue: 'featured',
      options: ['featured', 'newest', 'price-low', 'price-high', 'rating']
    }
  ];
</script>

<Story
  id="molecules-product-sort"
  title="ProductSort"
  component={ProductSort}
  category="Molecules"
  description="A component for sorting products."
  tags={['sort', 'product', 'controls']}
  controls={controls}
>
  {#snippet children(props: ProductSortStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductSort Story</h2>
      <ProductSort
        selectedOption={props.selectedOption}
        options={[
          { value: 'featured', label: 'Featured' },
          { value: 'newest', label: 'Newest' },
          { value: 'price-low', label: 'Price: Low to High' },
          { value: 'price-high', label: 'Price: High to Low' },
          { value: 'rating', label: 'Top Rated' }
        ]}
        onSortChange={(option) => console.log('Sort changed to:', option)}
      />
    </div>
  {/snippet}
</Story>