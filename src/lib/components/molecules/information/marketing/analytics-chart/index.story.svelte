<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AnalyticsChart from './index.svelte';

  type Props = { type: string };

  const controls: ControlConfig[] = [
    { name: 'type', type: 'select', options: ['bar', 'line', 'pie'], defaultValue: 'bar' }
  ];

  const sampleData = [
    { label: 'Jan', value: 400, color: '#3B82F6' },
    { label: 'Feb', value: 300, color: '#10B981' },
    { label: 'Mar', value: 200, color: '#F59E0B' },
    { label: 'Apr', value: 280, color: '#EF4444' }
  ];
</script>

<Story
  id="molecules-analytics-chart"
  title="Molecules / Information / Marketing / AnalyticsChart"
  component={AnalyticsChart}
  category="Molecules/Information/Marketing"
  description="Analytics chart component."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-analytics-chart p-4">
      <AnalyticsChart title="Sample Analytics Chart" data={sampleData} type={args.type as any} />
    </div>
  {/snippet}
</Story>


