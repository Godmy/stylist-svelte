<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PriceFilter from './index.svelte';

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
  title="Molecules / Information / Commerce / Prices / PriceFilter"
  component={PriceFilter}
  category="Molecules/Information/Commerce/Prices"
  description="A price filter component with dual range slider."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-price-filter p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PriceFilter Story</h2>
      <PriceFilter
        minPrice={args.minPrice ?? 0}
        maxPrice={args.maxPrice ?? 1000}
        currentMin={args.currentMin ?? 100}
        currentMax={args.currentMax ?? 800}
        currency={args.currency ?? '$'}
        onPriceChange={(min, max) => console.log(`Price range changed: ${min}-${max}`)}
      />
    </div>
  {/snippet}
</Story>



