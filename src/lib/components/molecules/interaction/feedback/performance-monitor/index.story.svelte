<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import PerformanceMonitor from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'title',
      type: 'text' as ControlType,
      defaultValue: 'CPU Usage',
      description: 'Title of the performance monitor'
    },
    {
      name: 'value',
      type: 'number' as ControlType,
      defaultValue: 65,
      min: 0,
      max: 100,
      description: 'Current value'
    },
    {
      name: 'max',
      type: 'number' as ControlType,
      defaultValue: 100,
      min: 1,
      description: 'Maximum value'
    },
    {
      name: 'unit',
      type: 'text' as ControlType,
      defaultValue: '%',
      description: 'Unit of measurement'
    },
    {
      name: 'status',
      type: 'select' as ControlType,
      defaultValue: 'normal',
      options: ['normal', 'warning', 'critical'],
      description: 'Status indicator'
    }
  ];
</script>

<Story
  {controls}
  title="PerformanceMonitor Component"
  description="A component to display performance metrics with visual indicators"
  let:controlValues
>
  <div class="p-8 bg-gray-50 rounded-lg">
    <PerformanceMonitor
      title={controlValues.title}
      value={controlValues.value}
      max={controlValues.max}
      unit={controlValues.unit}
      status={controlValues.status}
    />
  </div>
</Story>