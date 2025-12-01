<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import BarChart from './BarChart.svelte';

  type Props = {
    title: string;
    showLegend: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Sales Report'
    },
    {
      name: 'showLegend',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-bar-chart"
  title="BarChart"
  component={BarChart}
  category="Molecules"
  description="A component to display data in a bar chart format."
  tags={['chart', 'data', 'visualization']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Bar Chart</h2>
      <div class="max-w-2xl mx-auto">
        <BarChart
          data={[
            { id: 'jan', name: 'Jan', value: 65, color: '#3B82F6' },
            { id: 'feb', name: 'Feb', value: 45, color: '#10B981' },
            { id: 'mar', name: 'Mar', value: 80, color: '#EF4444' },
            { id: 'apr', name: 'Apr', value: 55, color: '#F59E0B' },
            { id: 'may', name: 'May', value: 90, color: '#8B5CF6' },
            { id: 'jun', name: 'Jun', value: 70, color: '#EC4899' }
          ]}
          title={props.title}
          showLegend={props.showLegend}
        />
      </div>
    </div>
  {/snippet}
</Story>
