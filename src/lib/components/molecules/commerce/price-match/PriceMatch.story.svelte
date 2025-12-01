<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PriceMatch from './PriceMatch.svelte';

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
  title="PriceMatch"
  component={PriceMatch}
  category="Molecules"
  description="A price match component showing comparison with competitors."
  tags={['price', 'match', 'comparison', 'competitors']}
  controls={controls}
>
  {#snippet children(props: PriceMatchStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PriceMatch Story</h2>
      <PriceMatch
        productName={props.productName}
        targetPrice={props.targetPrice}
        currency={props.currency}
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