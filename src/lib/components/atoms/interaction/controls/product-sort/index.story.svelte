<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductSort from './product-sort/index.svelte';

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
  component={ProductSort}
  controls={controls}
>
  {#snippet children()}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductSort Story</h2>
      <ProductSort
        selectedOption="featured"
        options={[
          { value: 'featured', label: 'Featured' },
          { value: 'newest', label: 'Newest' },
          { value: 'price-low', label: 'Price: Low to High' },
          { value: 'price-high', label: 'Price: High to Low' },
          { value: 'rating', label: 'Top Rated' }
        ]}
        onSortChange={(option: string) => console.log('Sort changed to:', option)}
      />
    </div>
  {/snippet}
</Story>

