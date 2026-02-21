<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import AnalyticsChart from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'type', type: 'select', options: ['bar', 'line', 'pie'], defaultValue: 'bar' },
    { name: 'showLegend', type: 'boolean', defaultValue: true },
    { name: 'showTrend', type: 'boolean', defaultValue: true },
    { name: 'trendValue', type: 'number', defaultValue: 12, min: -100, max: 100 }
  ];

  const data = [
    { label: 'Jan', value: 400, color: '#3B82F6' },
    { label: 'Feb', value: 320, color: '#10B981' },
    { label: 'Mar', value: 250, color: '#F59E0B' },
    { label: 'Apr', value: 370, color: '#EF4444' }
  ];
</script>

<Story
  id="molecules-analytics-chart"
  title="Molecules / Information / Marketing / AnalyticsChart"
  component={AnalyticsChart}
  category="Molecules/Information/Marketing"
  description="Reusable analytics chart wrapper with bar/line/pie modes."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <AnalyticsChart
        title="Monthly traffic"
        subtitle="Last 4 months"
        data={data}
        type={args.type}
        showLegend={args.showLegend}
        showTrend={args.showTrend}
        trendValue={args.trendValue}
        width={680}
        height={320}
      />
    </div>
  {/snippet}
</Story>
