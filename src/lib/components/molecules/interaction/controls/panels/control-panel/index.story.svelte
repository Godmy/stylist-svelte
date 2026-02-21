<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ControlPanel from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'showToolbar',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the toolbar'
    },
    {
      name: 'showFilter',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the filter'
    },
    {
      name: 'showSearch',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the search'
    }
  ];

  function handleSearch(query: string) {
    console.log('Search query:', query);
  }

  function handleFilterChange(filters: any) {
    console.log('Filter changed:', filters);
  }
</script>

<Story
  {controls}
  title="ControlPanel Component"
  description="Interactive control panel with customizable options"
 
>
  {#snippet children(controlValues: any)}
  <ControlPanel
    showToolbar={controlValues.showToolbar}
    showFilter={controlValues.showFilter}
    showSearch={controlValues.showSearch}
    onSearch={handleSearch}
    onFilterChange={handleFilterChange}
  />

  {/snippet}
</Story>