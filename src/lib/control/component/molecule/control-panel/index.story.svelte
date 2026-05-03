<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import ControlPanel from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'showToolbar',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show the toolbar'
    },
    {
      name: 'showFilter',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show the filter'
    },
    {
      name: 'showSearch',
      type: 'boolean' as TokenControllerType,
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


