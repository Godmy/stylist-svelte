<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductComparison from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'features', type: 'text', defaultValue: 'Wireless,Noise cancelling,24h battery,Water resistant' },
    { name: 'includeThirdProduct', type: 'boolean', defaultValue: true }
  ];

  const baseProducts = [
    { id: '1', name: 'Headphones A', price: 199.99, currency: '$', image: 'https://placehold.co/120x120?text=A', rating: 4.5 },
    { id: '2', name: 'Headphones B', price: 179.99, currency: '$', image: 'https://placehold.co/120x120?text=B', rating: 4.2 },
    { id: '3', name: 'Headphones C', price: 229.99, currency: '$', image: 'https://placehold.co/120x120?text=C', rating: 4.7 }
  ];

  function parseFeatures(value: string): string[] {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  }
</script>

<Story
  id="molecules-product-comparison"
  title="Molecules / Information / Commerce / Products / ProductComparison"
  component={ProductComparison}
  category="Molecules/Information/Commerce/Products"
  description="Feature-level comparison matrix for multiple products."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 bg-gray-50 rounded-xl">
      <ProductComparison
        products={args.includeThirdProduct ? baseProducts : baseProducts.slice(0, 2)}
        features={parseFeatures(args.features)}
      />
    </div>
  {/snippet}
</Story>
