<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import SearchBar from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'placeholder',
      type: 'text' as ControlType,
      defaultValue: 'Search...',
      description: 'Placeholder text for the search bar'
    },
    {
      name: 'value',
      type: 'text' as ControlType,
      defaultValue: '',
      description: 'Current value of the search bar'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the search bar is disabled'
    },
    {
      name: 'debounceMs',
      type: 'number' as ControlType,
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
  let:controlValues
>
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
</Story>