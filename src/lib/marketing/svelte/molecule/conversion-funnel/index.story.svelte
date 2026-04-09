<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import ConversionFunnel from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'showConversionRate', type: 'boolean', defaultValue: true },
    { name: 'showPercentage', type: 'boolean', defaultValue: true },
    { name: 'showValues', type: 'boolean', defaultValue: true },
    { name: 'showTrend', type: 'boolean', defaultValue: true }
  ];

  const steps = [
    { id: 'visitors', name: 'Visitors', value: 10000, color: '#2563EB' },
    { id: 'product', name: 'Product view', value: 4700, color: '#3B82F6' },
    { id: 'checkout', name: 'Checkout start', value: 1300, color: '#60A5FA' },
    { id: 'purchase', name: 'Purchase', value: 540, color: '#93C5FD' }
  ];
</script>

<Story
  id="molecules-conversion-funnel"
  title="Molecules / Information / Marketing / ConversionFunnel"
  component={ConversionFunnel}
  category="Molecules/Information/Marketing"
  description="Conversion stages with dropoff and progression visibility."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-[var(--color-background-secondary)]">
      <ConversionFunnel
        title="Checkout funnel"
        subtitle="Website sales"
        {steps}
        showConversionRate={args.showConversionRate}
        showPercentage={args.showPercentage}
        showValues={args.showValues}
        showTrend={args.showTrend}
      />
    </div>
  {/snippet}
</Story>




