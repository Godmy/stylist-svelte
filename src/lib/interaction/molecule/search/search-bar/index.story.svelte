<script lang="ts">
  import Story from '$stylist/interaction/playground/Story.svelte';
  import SearchBar from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/token/controller-type';

  const controls = [
    {
      name: 'placeholder',
      type: 'text' as TokenControllerType,
      defaultValue: 'Search...',
      description: 'Placeholder text for the search bar'
    },
    {
      name: 'value',
      type: 'text' as TokenControllerType,
      defaultValue: '',
      description: 'Current value of the search bar'
    },
    {
      name: 'disabled',
      type: 'boolean' as TokenControllerType,
      defaultValue: false,
      description: 'Whether the search bar is disabled'
    },
    {
      name: 'debounceMs',
      type: 'number' as TokenControllerType,
      defaultValue: 300,
      description: 'Debounce time in milliseconds'
    }
  ];

  function handleSearch(query: string) {
    console.log('Search event:', query);
  }

  function handleClear() {
    console.log('Clear event');
  }
</script>

<Story
  {controls}
  title="SearchBar Component"
  description="Search bar component with debounce and clear functionality"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <SearchBar
      placeholder={controlValues.placeholder}
      value={controlValues.value}
      disabled={controlValues.disabled}
      debounceMs={controlValues.debounceMs}
      onSearch={handleSearch}
      onClear={handleClear}
    />
  </div>

  {/snippet}
</Story>


