<script lang="ts">
  /**
   * SearchBar component following SOLID principles
   *
   * Single Responsibility: Provides a search input with clear and search buttons
   * Open/Closed: Extensible through props without modifying the component
   * Liskov Substitution: Can be used as a search input anywhere
   * Interface Segregation: Provides clear interface through well-defined props
   * Dependency Inversion: Depends on abstractions (types and style manager) not concretions
   */
  import { Button } from '$lib/components/atoms';
  import { debounce } from '$lib/utils/debounce';
  import { createEventDispatcher } from 'svelte';
  import { Search, X } from 'lucide-svelte';
  import { SearchBarStyleManager } from './styles';
  import type { ISearchBarProps, ISearchBarEvents } from './types';

  import type { HTMLAttributes } from 'svelte/elements';

  type Props = ISearchBarProps & {
    onsearch?: (event: CustomEvent<{ query: string }>) => void;
    onclear?: (event: CustomEvent<Record<string, never>>) => void;
    oninput?: (event: CustomEvent<{ value: string }>) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    placeholder = 'Search nodes...',
    value = '',
    disabled = false,
    debounceMs = 300,
    class: className = '',
    onsearch,
    onclear,
    oninput,
    ...restProps
  }: Props = $props();

  let searchTerm = $state(value);

  $effect(() => {
    if (value !== searchTerm) {
      searchTerm = value ?? '';
    }
  });

  const debouncedSearch = debounce((query: string) => {
    onsearch?.(new CustomEvent('search', { detail: { query } }));
  }, debounceMs);

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    searchTerm = target.value;

    // Dispatch input event to allow parent to handle binding
    oninput?.(new CustomEvent('input', { detail: { value: searchTerm } }));

    debouncedSearch(searchTerm);
  }

  function handleClear() {
    searchTerm = '';

    // Dispatch input event to allow parent to handle binding
    oninput?.(new CustomEvent('input', { detail: { value: '' } }));

    onclear?.(new CustomEvent('clear', { detail: {} }));
    onsearch?.(new CustomEvent('search', { detail: { query: '' } }));
  }

  function triggerSearch() {
    onsearch?.(new CustomEvent('search', { detail: { query: searchTerm } }));
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      triggerSearch();
    }
    if (event.key === 'Escape' && searchTerm) {
      handleClear();
    }
  }

  // Using Svelte 5 runes for derived values
  const containerClasses = $derived(SearchBarStyleManager.getAllClasses({ class: className }));
  const iconContainerClasses = $derived(SearchBarStyleManager.getIconContainerClasses());
  const inputClasses = $derived(SearchBarStyleManager.getInputClasses());
  const controlsContainerClasses = $derived(SearchBarStyleManager.getControlsContainerClasses());
</script>

<div class={containerClasses}>
  <div class={iconContainerClasses}>
    <Search class="h-5 w-5" aria-hidden="true" />
  </div>

  <input
    id="search-bar-input"
    type="text"
    class={inputClasses}
    bind:value={searchTerm}
    placeholder={placeholder}
    disabled={disabled}
    oninput={handleInput}
    onkeydown={handleKeydown}
    aria-label="Search input"
  />

  <div class={controlsContainerClasses}>
    {#if searchTerm && !disabled}
      <Button
        size="sm"
        variant="ghost"
        class="p-2 rounded-md hover:bg-[--color-bg-hover]"
        onclick={handleClear}
        aria-label="Clear search"
        disabled={disabled}
      >
        <X class="h-4 w-4" aria-hidden="true" />
      </Button>
    {/if}
    <Button
      size="sm"
      variant="secondary"
      class="ml-1"
      onclick={triggerSearch}
      disabled={disabled}
    >
      Search
    </Button>
  </div>
</div>
