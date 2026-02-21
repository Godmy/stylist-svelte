<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductRecommendation from './index.svelte';

  let selectedProduct = $state('none');

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Recommended for You' }
  ];

  const sampleProducts = [
    { id: '1', title: 'Wireless Headphones', price: 199.99, currency: '$', image: 'https://via.placeholder.com/200x150/3B82F6/FFFFFF?text=Headphones', rating: 4.5 },
    { id: '2', title: 'Smart Watch', price: 249.99, currency: '$', image: 'https://via.placeholder.com/200x150/10B981/FFFFFF?text=Watch', rating: 4.2 },
    { id: '3', title: 'Bluetooth Speaker', price: 89.99, currency: '$', image: 'https://via.placeholder.com/200x150/F59E0B/FFFFFF?text=Speaker', rating: 4.7 }
  ];
</script>

<Story id="molecules-product-recommendation" title="ProductRecommendation" component={ProductRecommendation} category="Molecules" controls={controls}>
  {#snippet children(values: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <ProductRecommendation products={sampleProducts} title={values.title} onProductClick={(id) => (selectedProduct = id)} />
      <p class="mt-3 text-sm text-gray-600">Clicked product id: {selectedProduct}</p>
    </div>
  {/snippet}
</Story>
