<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductSearch from './ProductSearch.svelte';

  type ProductSearchStoryProps = {
    placeholder: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Search for products...'
    }
  ];
</script>

<Story
  id="molecules-product-search"
  title="ProductSearch"
  component={ProductSearch}
  category="Molecules"
  description="A search component for products."
  tags={['search', 'product', 'input']}
  controls={controls}
>
  {#snippet children(props: ProductSearchStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductSearch Story</h2>
      <ProductSearch
        placeholder={props.placeholder}
        suggestions={[
          "Wireless Headphones",
          "Bluetooth Speaker",
          "Smart Watch",
          "Laptop",
          "Tablet"
        ]}
        onSearch={(query) => console.log('Search query:', query)}
        onSuggestionSelect={(suggestion) => console.log('Selected suggestion:', suggestion)}
      />
    </div>
  {/snippet}
</Story>