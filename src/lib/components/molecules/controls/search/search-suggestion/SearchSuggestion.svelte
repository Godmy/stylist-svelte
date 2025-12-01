<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type SearchSuggestion = {
    id: string;
    text: string;
    category?: string;
    icon?: string;
    count?: number;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    suggestions: SearchSuggestion[];
    query?: string;
    loading?: boolean;
    class?: string;
    suggestionClass?: string;
    headerClass?: string;
    onSuggestionClick?: (suggestion: SearchSuggestion) => void;
    maxSuggestions?: number;
  };

  let {
    suggestions = [],
    query = '',
    loading = false,
    class: hostClass = '',
    suggestionClass = '',
    headerClass = '',
    onSuggestionClick,
    maxSuggestions = 5,
    ...restProps
  }: Props = $props();

  let displayedSuggestions = $derived(suggestions.slice(0, maxSuggestions));

  function handleSuggestionClick(suggestion: SearchSuggestion) {
    onSuggestionClick?.(suggestion);
  }
</script>

<div class={`search-suggestions bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-10 ${hostClass}`} {...restProps}>
  {#if loading}
    <div class="p-4 flex justify-center items-center">
      <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
    </div>
  {:else if displayedSuggestions.length === 0 && query}
    <div class="p-4 text-center text-sm text-gray-500">
      No suggestions found
    </div>
  {:else}
    <ul class="divide-y divide-gray-100">
      {#each displayedSuggestions as suggestion}
        <li>
          <button
            type="button"
            class={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-700 ${suggestionClass}`}
            onclick={() => handleSuggestionClick(suggestion)}
          >
            <div class="flex items-center">
              {#if suggestion.icon}
                <span class="mr-2">{suggestion.icon}</span>
              {/if}
              <span>{suggestion.text}</span>
              {#if suggestion.count}
                <span class="ml-auto text-xs text-gray-500">({suggestion.count})</span>
              {/if}
            </div>
            {#if suggestion.category}
              <div class="ml-6 text-xs text-gray-500">{suggestion.category}</div>
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
