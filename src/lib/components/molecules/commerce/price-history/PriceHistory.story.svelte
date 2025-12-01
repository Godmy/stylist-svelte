<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PriceHistory from './PriceHistory.svelte';

  type Props = {
    title: string;
    currency: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Product Price History'
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: '$'
    }
  ];
</script>

<Story
  id="molecules-price-history"
  title="PriceHistory"
  component={PriceHistory}
  category="Molecules"
  description="Displays a product's price history over time."
  tags={['price', 'history', 'chart', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PriceHistory Story</h2>
      <PriceHistory
        data={[
          { date: '2023-01', price: 100 },
          { date: '2023-02', price: 120 },
          { date: '2023-03', price: 90 },
          { date: '2023-04', price: 110 },
          { date: '2023-05', price: 130 },
          { date: '2023-06', price: 125 }
        ]}
        title={props.title}
        currency={props.currency}
      />
    </div>
  {/snippet}
</Story>
