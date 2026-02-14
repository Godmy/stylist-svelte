<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PerformanceMonitor from './index.svelte';

  type Props = {
    title: string;
    value: number;
    max: number;
    unit: string;
    status: 'normal' | 'warning' | 'critical';
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'CPU Usage'
    },
    {
      name: 'value',
      type: 'number',
      defaultValue: 65,
      min: 0,
      max: 100
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100,
      min: 1
    },
    {
      name: 'unit',
      type: 'text',
      defaultValue: '%'
    },
    {
      name: 'status',
      type: 'select',
      options: ['normal', 'warning', 'critical'],
      defaultValue: 'normal'
    }
  ];
</script>

<Story
  id="molecules-performance-monitor"
  title="PerformanceMonitor"
  component={PerformanceMonitor}
  category="Molecules"
  description="A component to display performance metrics with visual indicators."
  tags={['performance', 'monitor', 'metrics']}
  controls={controls}
>
  {#snippet children(props: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PerformanceMonitor Story</h2>
      <PerformanceMonitor
        title={props.title}
        value={props.value}
        max={props.max}
        unit={props.unit}
        status={props.status}
      />
    </div>
  {/snippet}
</Story>


