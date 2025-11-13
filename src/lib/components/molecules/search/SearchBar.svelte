<script lang="ts">
  import { Button } from '$lib/components/atoms';
  import { debounce } from '$lib/utils/debounce';
  import { createEventDispatcher } from 'svelte';
  import { Search, X } from 'lucide-svelte';

  type Props = {
    placeholder?: string;
    value?: string;
    disabled?: boolean;
    debounceMs?: number;
    class?: string;
  };

  let {
    placeholder = 'Search nodes...',
    value = $bindable(''),
    disabled = false,
    debounceMs = 300,
    class: className = ''
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    search: { query: string };
    clear: Record<string, never>;
  }>();

  let searchTerm = $state(value);

  $effect(() => {
    if (value !== searchTerm) {
      searchTerm = value ?? '';
    }
  });

  const debouncedSearch = debounce((query: string) => {
    dispatch('search', { query });
  }, debounceMs);

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    searchTerm = target.value;
    value = searchTerm;
    debouncedSearch(searchTerm);
  }

  function handleClear() {
    searchTerm = '';
    value = '';
    dispatch('clear', {});
    dispatch('search', { query: '' });
  }

  function triggerSearch() {
    dispatch('search', { query: searchTerm });
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      triggerSearch();
    }
    if (event.key === 'Escape' && searchTerm) {
      handleClear();
    }
  }
</script>

<div class={`search-bar ${className}`}>
  <div class="search-icon">
    <Search class="h-5 w-5" aria-hidden="true" />
  </div>

  <input
    id="search-bar-input"
    type="text"
    class="search-input"
    bind:value={searchTerm}
    placeholder={placeholder}
    disabled={disabled}
    oninput={handleInput}
    onkeydown={handleKeydown}
    aria-label="Search input"
  />

  <div class="search-controls">
    {#if searchTerm && !disabled}
      <Button
        size="sm"
        variant="ghost"
        class="icon-button"
        onclick={handleClear}
        aria-label="Clear search"
      >
        <X class="h-4 w-4" aria-hidden="true" />
      </Button>
    {/if}
    <Button
      size="sm"
      variant="secondary"
      class="icon-button"
      onclick={triggerSearch}
      disabled={disabled}
    >
      Search
    </Button>
  </div>
</div>

<style>
  .search-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #cbd5e0;
    border-radius: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  }

  .search-icon {
    display: flex;
    align-items: center;
    color: #94a3b8;
  }

  .search-input {
    flex: 1;
    border: none;
    outline: none;
    padding: 0.4rem 0.25rem;
    font-size: 0.9375rem;
    background: transparent;
  }

  .search-controls {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .icon-button :global(svg) {
    width: 1rem;
    height: 1rem;
  }
</style>
