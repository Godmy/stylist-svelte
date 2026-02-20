<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ConversionFunnel from './index.svelte';

  type Props = { showConversionRate: boolean };

  const controls: ControlConfig[] = [
    { name: 'showConversionRate', type: 'boolean', defaultValue: true }
  ];

  const sampleSteps = [
    { id: 'visitors', name: 'Visitors', value: 10000, color: '#3b82f6' },
    { id: 'viewed', name: 'Viewed Product', value: 5000, color: '#60a5fa' },
    { id: 'cart', name: 'Added to Cart', value: 1000, color: '#93c5fd' },
    { id: 'purchase', name: 'Completed Purchase', value: 500, color: '#bfdbfe' }
  ];
</script>

<Story
  id="molecules-conversion-funnel"
  title="Molecules / Information / Marketing / ConversionFunnel"
  component={ConversionFunnel}
  category="Molecules/Information/Marketing"
  description="Conversion funnel visualization."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-conversion-funnel p-4">
      <ConversionFunnel title="Sample Conversion Funnel" steps={sampleSteps} showConversionRate={args.showConversionRate} />
    </div>
  {/snippet}
</Story>

