<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductSearch from './index.svelte';

  let query = $state('');
  let picked = $state('');

  const controls: ControlConfig[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'Search products...' }
  ];

  const suggestions = ['Wireless Headphones', 'Bluetooth Speaker', 'Smart Watch', 'Gaming Mouse'];
</script>

<Story id="molecules-product-search" title="Molecules / Commerce / Products / Product Search" component={ProductSearch} category="Molecules/Commerce/Products" {controls}>
  {#snippet children(values: any)}
    <div class="p-6 space-y-3">
      <ProductSearch
        placeholder={values.placeholder}
        suggestions={suggestions}
        onSearch={(value) => (query = value)}
        onSuggestionSelect={(value) => (picked = value)}
      />
      <p class="text-sm text-gray-600">Search query: {query || 'none'}</p>
      <p class="text-sm text-gray-600">Suggestion picked: {picked || 'none'}</p>
    </div>
  {/snippet}
</Story>
