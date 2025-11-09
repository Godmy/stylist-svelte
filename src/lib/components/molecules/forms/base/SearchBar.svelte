<script lang="ts">
  import Input from '$lib/components/atoms/input/base/Input.svelte';
  import Button from '$lib/components/atoms/controls/buttons/Button.svelte';
  import { createEventDispatcher } from 'svelte';
  import { debounce } from '$lib/utils/debounce'; // Assuming we have a debounce utility

  // Props
  type SearchBarProps = {
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    debounceMs?: number;
  };

  let { 
    placeholder = 'Search nodes...',
    value = $bindable(''),
    disabled = false,
    debounceMs = 300
  }: SearchBarProps = $props();

  // Events
  const dispatch = createEventDispatcher<{
    search: { query: string };
    clear: {};
  }>();

  // Local state
  let searchTerm = $state(value);
  
  // Debounced search function
  const debouncedHandleSearch = debounce((query: string) => {
    dispatch('search', { query });
  }, debounceMs);

  // Handle input change
  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchTerm = target.value;
    debouncedHandleSearch(searchTerm);
  }

  // Handle clear
  function handleClear() {
    searchTerm = '';
    dispatch('clear', {});
  }

  // Handle key events
  function handleKeydown(e: Event) {
    const keyboardEvent = e as KeyboardEvent;
    if (keyboardEvent.key === 'Enter') {
      // Trigger immediate search on Enter
      dispatch('search', { query: searchTerm });
    } else if (keyboardEvent.key === 'Escape' && searchTerm) {
      handleClear();
    }
  }
</script>

<style>
  .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #cbd5e0;
    border-radius: 0.5rem;
    padding: 0.25rem;
    background-color: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  .search-input {
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 0.875rem;
  }
  
  input.search-input {
    border: none;
    outline: none;
    padding: 0.5rem;
    font-size: 0.875rem;
  }

  .search-controls {
    display: flex;
    gap: 0.25rem;
    padding: 0 0.25rem;
  }

</style>

<div class="search-bar">
  <input
    id="search-bar-input"
    type="text"
    class="search-input"
    bind:value={searchTerm}
    placeholder={placeholder}
    disabled={disabled}
    oninput={handleInput}
    onkeydown={handleKeydown}
  />
  <div class="search-controls">
    {#if searchTerm}
      <Button 
        size="sm" 
        variant="ghost" 
        class="search-btn" 
        onclick={() => handleClear()}
        title="Clear search"
        aria-label="Clear search"
      >
        ×
      </Button>
    {/if}
    <Button 
      size="sm" 
      variant="secondary" 
      class="search-btn" 
      onclick={() => dispatch('search', { query: searchTerm })}
      title="Search"
      aria-label="Search"
    >
      🔍
    </Button>
  </div>
</div>