<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PriceAlert from './index.svelte';

  type Props = {
    currentPrice: number;
    targetPrice: number;
    currency: string;
    productName: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'currentPrice',
      type: 'number',
      defaultValue: 899,
      min: 0
    },
    {
      name: 'targetPrice',
      type: 'number',
      defaultValue: 850,
      min: 0
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: '$'
    },
    {
      name: 'productName',
      type: 'text',
      defaultValue: 'Laptop'
    }
  ];
</script>

<Story
  id="molecules-price-alert"
  title="Molecules / Information / Commerce / Prices / PriceAlert"
  component={PriceAlert}
  category="Molecules/Information/Commerce/Prices"
  description="A component to display price change alerts for products."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-price-alert p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PriceAlert Story</h2>
      <PriceAlert
        currentPrice={args.currentPrice ?? 899}
        targetPrice={args.targetPrice ?? 850}
        currency={args.currency ?? '$'}
        productName={args.productName ?? 'Laptop'}
      />
    </div>
  {/snippet}
</Story>


