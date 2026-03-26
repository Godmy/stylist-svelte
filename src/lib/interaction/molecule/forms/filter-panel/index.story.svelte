<script lang="ts">
  import Story from '$stylist/interaction/playground/Story.svelte';
  import FilterPanel from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/token/controller-type';

  const controls = [
    {
      name: 'showObjects',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show objects filter'
    },
    {
      name: 'showInterfaces',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show interfaces filter'
    },
    {
      name: 'showUnions',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show unions filter'
    },
    {
      name: 'showEnums',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show enums filter'
    },
    {
      name: 'layout',
      type: 'select' as TokenControllerType,
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
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <div class="max-w-xs">
      <FilterPanel
        showObjects={controlValues.showObjects}
        showInterfaces={controlValues.showInterfaces}
        showUnions={controlValues.showUnions}
        showEnums={controlValues.showEnums}
        layout={controlValues.layout}
      />
    </div>
  </div>

  {/snippet}
</Story>


