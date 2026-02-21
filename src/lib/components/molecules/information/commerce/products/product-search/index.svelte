<script lang="ts">
  import type { ProductSearchProps } from '$stylist/design-system/props/information/molecules-migration';
  import { ProductSearchStyleManager } from '$stylist/design-system/styles/information/molecules-migration';

  let {
    placeholder = 'Search products...',
    onSearch = () => {},
    suggestions = [],
    onSuggestionSelect = () => {},
    class: className = '',
    ...restProps
  }: ProductSearchProps = $props();

  let query = $state('');
  let showSuggestions = $state(false);

  function handleInput(e: Event) {
    query = (e.target as HTMLInputElement).value;
    showSuggestions = query.length > 0 && suggestions.length > 0;
  }

  function handleSearch() {
    onSearch(query);
    showSuggestions = false;
  }

  function selectSuggestion(suggestion: string) {
    query = suggestion;
    onSuggestionSelect(suggestion);
    showSuggestions = false;
  }
</script>

<div class={ProductSearchStyleManager.root(className)} {...restProps}>
  <div class="flex">
    <input
      type="text"
      bind:value={query}
      oninput={handleInput}
      onkeydown={(e) => e.key === 'Enter' && handleSearch()}
      placeholder={placeholder}
      class="flex-1 p-3 border border-[var(--color-border-default)] rounded-l-lg focus:outline-none"
    />
    <button type="button" onclick={handleSearch} class="bg-blue-600 text-white px-6 py-3 rounded-r-lg">Search</button>
  </div>

  {#if showSuggestions}
    <div class="absolute z-10 w-full mt-1 bg-white border border-[var(--color-border-default)] rounded-lg shadow-lg max-h-60 overflow-y-auto">
      {#each suggestions as suggestion}
        <button
          type="button"
          onclick={() => selectSuggestion(suggestion)}
          class="block w-full text-left p-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
        >
          {suggestion}
        </button>
      {/each}
    </div>
  {/if}
</div>
