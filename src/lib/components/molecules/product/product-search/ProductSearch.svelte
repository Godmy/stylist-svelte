<script lang="ts">
  let {
    placeholder = 'Search products...',
    onSearch = (query: string) => {},
    suggestions = [],
    onSuggestionSelect = (suggestion: string) => {},
    class: className = ''
  } = $props<{
    placeholder?: string;
    onSearch?: (query: string) => void;
    suggestions?: string[];
    onSuggestionSelect?: (suggestion: string) => void;
    class?: string;
  }>();

  let query = $state('');
  let showSuggestions = $state(false);

  const handleInput = (e: Event) => {
    query = (e.target as HTMLInputElement).value;
    showSuggestions = query.length > 0 && suggestions.length > 0;
  };

  const handleSearch = () => {
    onSearch(query);
    showSuggestions = false;
  };

  const selectSuggestion = (suggestion: string) => {
    query = suggestion;
    onSuggestionSelect(suggestion);
    showSuggestions = false;
  };
</script>

<div class={`relative ${className}`}>
  <div class="flex">
    <input
      type="text"
      bind:value={query}
      oninput={handleInput}
      onkeydown={(e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      }}
      placeholder={placeholder}
      class="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      onclick={handleSearch}
      class="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600"
    >
      Search
    </button>
  </div>
  
  {#if showSuggestions}
    <div class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
      {#each suggestions as suggestion}
        <button
          onclick={() => selectSuggestion(suggestion)}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              selectSuggestion(suggestion);
            }
          }}
          class="block w-full text-left p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
          aria-label={`Select suggestion: ${suggestion}`}
        >
          {suggestion}
        </button>
      {/each}
    </div>
  {/if}
</div>