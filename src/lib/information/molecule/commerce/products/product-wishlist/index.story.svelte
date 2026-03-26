<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import ProductWishlist from './index.svelte';

  let lastAction = $state('none');

  const controls: InterfaceControllerSettings[] = [
    { name: 'showEmptyWishlist', type: 'boolean', defaultValue: false }
  ];
</script>

<Story id="molecules-product-wishlist" title="ProductWishlist" component={ProductWishlist} category="Molecules" controls={controls}>
  {#snippet children(values: any)}
    <div class="p-8 bg-[var(--color-background-secondary)] rounded-lg">
      <ProductWishlist
        items={values.showEmptyWishlist ? [] : [
          { id: '1', title: 'Wireless Headphones', price: 199.99, currency: '$', image: 'https://placehold.co/100x100', rating: 4.5 },
          { id: '2', title: 'Smart Watch', price: 249.99, currency: '$', image: 'https://placehold.co/100x100', rating: 4.2 }
        ]}
        onRemove={(id) => (lastAction = `Removed ${id}`)}
        onMoveToCart={(id) => (lastAction = `Moved ${id} to cart`)}
      />
      <p class="mt-3 text-sm text-[var(--color-text-secondary)]">Last action: {lastAction}</p>
    </div>
  {/snippet}
</Story>




