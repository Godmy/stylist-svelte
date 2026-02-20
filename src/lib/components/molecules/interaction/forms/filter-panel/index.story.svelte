<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import FilterPanel from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'showObjects',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show objects filter'
    },
    {
      name: 'showInterfaces',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show interfaces filter'
    },
    {
      name: 'showUnions',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show unions filter'
    },
    {
      name: 'showEnums',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show enums filter'
    },
    {
      name: 'layout',
      type: 'select' as ControlType,
      defaultValue: 'force-directed',
      options: ['force-directed', 'hierarchical', 'circular', 'grid'],
      description: 'Layout type'
    }
  ];

  function handleFilterChange(detail: any) {
    console.log('Filters changed:', detail);
  }

  function handleReset() {
    console.log('Filters reset');
  }
</script>

<Story
  {controls}
  title="FilterPanel Component"
  description="Interactive filter panel with customizable options"
  let:controlValues
>
  <div class="p-4">
    <div class="max-w-xs">
      <FilterPanel
        showObjects={controlValues.showObjects}
        showInterfaces={controlValues.showInterfaces}
        showUnions={controlValues.showUnions}
        showEnums={controlValues.showEnums}
        layout={controlValues.layout}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
      />
    </div>
  </div>
</Story>