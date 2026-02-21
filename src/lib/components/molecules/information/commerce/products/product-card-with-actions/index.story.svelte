<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductCardWithActions from './index.svelte';

  let buyClicks = $state(0);
  let wishlistClicks = $state(0);

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Smart Watch' },
    { name: 'price', type: 'number', defaultValue: 199.99, min: 0 },
    { name: 'currency', type: 'text', defaultValue: '$' },
    { name: 'image', type: 'text', defaultValue: 'https://placehold.co/320x220?text=Smartwatch' },
    { name: 'rating', type: 'number', defaultValue: 4.3, min: 0, max: 5, step: 0.1 },
    { name: 'reviewCount', type: 'number', defaultValue: 87, min: 0 },
    { name: 'description', type: 'text', defaultValue: 'Track your fitness goals with this advanced smartwatch.' }
  ];
</script>

<Story
  id="molecules-product-card-with-actions"
  title="Molecules / Information / Commerce / Products / ProductCardWithActions"
  component={ProductCardWithActions}
  category="Molecules/Information/Commerce/Products"
  description="Product card with visible action area and stateful button behavior."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 bg-gray-50 rounded-xl space-y-4">
      <ProductCardWithActions
        title={args.title}
        price={args.price}
        currency={args.currency}
        image={args.image}
        rating={args.rating}
        reviewCount={args.reviewCount}
        description={args.description}
      >
        {#snippet actions()}
          <div class="flex gap-2">
            <button class="px-3 py-1.5 text-sm rounded bg-blue-600 text-white" onclick={() => (buyClicks += 1)}>Buy now</button>
            <button class="px-3 py-1.5 text-sm rounded border border-gray-300 bg-white" onclick={() => (wishlistClicks += 1)}>Wishlist</button>
          </div>
        {/snippet}
      </ProductCardWithActions>
      <div class="text-sm text-gray-600">Clicks: buy {buyClicks}, wishlist {wishlistClicks}</div>
    </div>
  {/snippet}
</Story>
