<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductWishlist from './index.svelte';

  let lastAction = $state('none');

  const controls: ControlConfig[] = [
    { name: 'showEmptyWishlist', type: 'boolean', defaultValue: false }
  ];
</script>

<Story id="molecules-product-wishlist" title="ProductWishlist" component={ProductWishlist} category="Molecules" controls={controls}>
  {#snippet children(values: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <ProductWishlist
        items={values.showEmptyWishlist ? [] : [
          { id: '1', title: 'Wireless Headphones', price: 199.99, currency: '$', image: 'https://placehold.co/100x100', rating: 4.5 },
          { id: '2', title: 'Smart Watch', price: 249.99, currency: '$', image: 'https://placehold.co/100x100', rating: 4.2 }
        ]}
        onRemove={(id) => (lastAction = `Removed ${id}`)}
        onMoveToCart={(id) => (lastAction = `Moved ${id} to cart`)}
      />
      <p class="mt-3 text-sm text-gray-600">Last action: {lastAction}</p>
    </div>
  {/snippet}
</Story>
