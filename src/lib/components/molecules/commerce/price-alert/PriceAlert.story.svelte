<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PriceAlert from './PriceAlert.svelte';

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
  title="PriceAlert"
  component={PriceAlert}
  category="Molecules"
  description="A component to display price change alerts for products."
  tags={['price', 'alert', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PriceAlert Story</h2>
      <PriceAlert
        currentPrice={props.currentPrice}
        targetPrice={props.targetPrice}
        currency={props.currency}
        productName={props.productName}
      />
    </div>
  {/snippet}
</Story>
