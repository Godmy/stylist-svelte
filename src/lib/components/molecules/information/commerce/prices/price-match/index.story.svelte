<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PriceMatch from './index.svelte';

  type PriceMatchStoryProps = {
    productName: string;
    targetPrice: number;
    currency: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'productName',
      type: 'text',
      defaultValue: 'Laptop'
    },
    {
      name: 'targetPrice',
      type: 'number',
      defaultValue: 999
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: '$'
    }
  ];
</script>

<Story
  id="molecules-price-match"
  title="Molecules / Information / Commerce / Prices / PriceMatch"
  component={PriceMatch}
  category="Molecules/Information/Commerce/Prices"
  description="A price match component showing comparison with competitors."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-price-match p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PriceMatch Story</h2>
      <PriceMatch
        productName={args.productName ?? 'Laptop'}
        targetPrice={args.targetPrice ?? 999}
        currency={args.currency ?? '$'}
        competitorPrices={[
          { name: 'Store A', price: 950 },
          { name: 'Store B', price: 1020 },
          { name: 'Store C', price: 980 }
        ]}
        onFindLower={() => console.log('Finding lower prices')}
      />
    </div>
  {/snippet}
</Story>



