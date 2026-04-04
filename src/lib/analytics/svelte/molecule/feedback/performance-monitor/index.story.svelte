<script lang="ts">
  import Story from '$stylist/development/svelte/playground/Story.svelte';
  import PerformanceMonitor from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'label',
      type: 'text' as TokenControllerType,
      defaultValue: 'CPU Usage',
      description: 'Title of the performance monitor'
    },
    {
      name: 'value',
      type: 'number' as TokenControllerType,
      defaultValue: 65,
      min: 0,
      max: 100,
      description: 'Current value'
    },
    {
      name: 'max',
      type: 'number' as TokenControllerType,
      defaultValue: 100,
      min: 1,
      description: 'Maximum value'
    },
    {
      name: 'unit',
      type: 'text' as TokenControllerType,
      defaultValue: '%',
      description: 'Unit of measurement'
    },
    {
      name: 'status',
      type: 'select' as TokenControllerType,
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
>
  {#snippet children(controlValues: any)}
  <div class="p-8 bg-[var(--color-background-secondary)] rounded-lg">
    <PerformanceMonitor
      label={controlValues.label}
      value={controlValues.value}
      max={controlValues.max}
      unit={controlValues.unit}
      status={controlValues.status}
    />
  </div>

  {/snippet}
</Story>
