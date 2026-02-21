<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductCarousel from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'items', type: 'number', defaultValue: 3, min: 2, max: 5 },
    { name: 'basePrice', type: 'number', defaultValue: 99, min: 10 },
    { name: 'currency', type: 'text', defaultValue: '$' }
  ];

  function getProducts(count: number, basePrice: number, currency: string) {
    return Array.from({ length: count }, (_, idx) => ({
      title: `Product ${idx + 1}`,
      price: basePrice + idx * 25,
      currency,
      image: `https://placehold.co/220x160?text=Item+${idx + 1}`,
      rating: 3.8 + (idx % 3) * 0.4
    }));
  }
</script>

<Story
  id="molecules-product-carousel"
  title="Molecules / Information / Commerce / Products / ProductCarousel"
  component={ProductCarousel}
  category="Molecules/Information/Commerce/Products"
  description="Swipe-style product carousel with built-in navigation arrows and dots."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 bg-gray-50 rounded-xl space-y-3">
      <ProductCarousel products={getProducts(args.items, args.basePrice, args.currency)} />
      <p class="text-sm text-gray-600">Use arrows or dots to switch slides.</p>
    </div>
  {/snippet}
</Story>
