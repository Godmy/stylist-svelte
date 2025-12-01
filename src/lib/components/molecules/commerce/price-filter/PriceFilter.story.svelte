<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PriceFilter from './PriceFilter.svelte';

  type PriceFilterStoryProps = {
    minPrice: number;
    maxPrice: number;
    currentMin: number;
    currentMax: number;
    currency: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'minPrice',
      type: 'number',
      defaultValue: 0
    },
    {
      name: 'maxPrice',
      type: 'number',
      defaultValue: 1000
    },
    {
      name: 'currentMin',
      type: 'number',
      defaultValue: 100
    },
    {
      name: 'currentMax',
      type: 'number',
      defaultValue: 800
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: '$'
    }
  ];
</script>

<Story
  id="molecules-price-filter"
  title="PriceFilter"
  component={PriceFilter}
  category="Molecules"
  description="A price filter component with dual range slider."
  tags={['filter', 'price', 'range', 'slider']}
  controls={controls}
>
  {#snippet children(props: PriceFilterStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PriceFilter Story</h2>
      <PriceFilter
        minPrice={props.minPrice}
        maxPrice={props.maxPrice}
        currentMin={props.currentMin}
        currentMax={props.currentMax}
        currency={props.currency}
        onPriceChange={(min, max) => console.log(`Price range changed: ${min}-${max}`)}
      />
    </div>
  {/snippet}
</Story>