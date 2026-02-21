<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductCard from './index.svelte';

  let cartClicks = $state(0);
  let detailsClicks = $state(0);

  const controls: ControlConfig[] = [
    { name: 'variant', type: 'select', options: ['default', 'compact', 'with-actions'], defaultValue: 'default' },
    { name: 'title', type: 'text', defaultValue: 'Wireless Headphones' },
    { name: 'price', type: 'number', defaultValue: 199.99, min: 0 },
    { name: 'currency', type: 'text', defaultValue: '$' },
    { name: 'image', type: 'text', defaultValue: 'https://placehold.co/320x220?text=Headphones' },
    { name: 'rating', type: 'number', defaultValue: 4.2, min: 0, max: 5, step: 0.1 },
    { name: 'reviewCount', type: 'number', defaultValue: 128, min: 0 },
    { name: 'badge', type: 'select', options: ['', 'sale', 'new', 'popular'], defaultValue: 'sale' },
    { name: 'description', type: 'text', defaultValue: 'High-quality wireless headphones with noise cancellation.' }
  ];
</script>

<Story
  id="molecules-product-card"
  title="Molecules / Information / Commerce / Products / ProductCard"
  component={ProductCard}
  category="Molecules/Information/Commerce/Products"
  description="Unified product card with default, compact and action variants."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 bg-gray-50 rounded-xl space-y-4">
      <ProductCard
        variant={args.variant}
        title={args.title}
        price={args.price}
        currency={args.currency}
        image={args.image}
        rating={args.rating}
        reviewCount={args.reviewCount}
        badge={args.badge}
        description={args.description}
      >
        {#snippet actions()}
          <div class="flex gap-2">
            <button class="px-3 py-1.5 text-sm rounded bg-blue-600 text-white" onclick={() => (cartClicks += 1)}>Add to cart</button>
            <button class="px-3 py-1.5 text-sm rounded border border-gray-300 bg-white" onclick={() => (detailsClicks += 1)}>Details</button>
          </div>
        {/snippet}
      </ProductCard>
      <div class="text-sm text-gray-600">Actions: cart {cartClicks}, details {detailsClicks}</div>
    </div>
  {/snippet}
</Story>
