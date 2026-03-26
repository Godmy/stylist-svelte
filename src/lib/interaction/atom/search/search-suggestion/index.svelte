<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

  type SearchSuggestion = {
    id: string;
    text: string;
    category?: string;
    icon?: string;
    count?: number;
  };

  type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    suggestions: SearchSuggestion[];
    query?: string;
    loading?: boolean;
    class?: string;
    suggestionClass?: string;
    headerClass?: string;
    onValueInput?: (suggestion: SearchSuggestion) => void;
    onValueChange?: (suggestion: SearchSuggestion) => void;
    maxSuggestions?: number;
  };

  let {
    suggestions = [],
    query = '',
    loading = false,
    class: hostClass = '',
    suggestionClass = '',
    headerClass = '',
    onValueInput,
    onValueChange,
    maxSuggestions = 5,
    ...restProps
  }: Props = $props();

  let displayedSuggestions = $derived(suggestions.slice(0, maxSuggestions));

  function handleSuggestionClick(suggestion: SearchSuggestion) {
    onValueInput?.(suggestion);
    onValueChange?.(suggestion);
  }
</script>

<div class={`search-suggestions bg-[var(--color-background-primary)] rounded-md shadow-lg ring-1 ring-black ring-opacity-[var(--opacity-5)] overflow-hidden z-[var(--z-index-docked)] ${hostClass}`} {...restProps}>
  {#if loading}
    <div class="p-4 flex justify-center items-center">
      <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-[var(--color-primary-500)]"></div>
    </div>
  {:else if displayedSuggestions.length === 0 && query}
    <div class="p-4 text-center text-sm text-[var(--color-text-secondary)]">
      No suggestions found
    </div>
  {:else}
    <ul class="divide-y divide-gray-100">
      {#each displayedSuggestions as suggestion}
        <li>
          <button
            type="button"
            class={`w-full text-left px-4 py-2 text-sm hover:bg-[var(--color-primary-50)] hover:text-[var(--color-primary-700)] ${suggestionClass}`}
            onclick={() => handleSuggestionClick(suggestion)}
          >
            <div class="flex items-center">
              {#if suggestion.icon}
                <span class="mr-2">{suggestion.icon}</span>
              {/if}
              <span>{suggestion.text}</span>
              {#if suggestion.count}
                <span class="ml-auto text-xs text-[var(--color-text-secondary)]">({suggestion.count})</span>
              {/if}
            </div>
            {#if suggestion.category}
              <div class="ml-6 text-xs text-[var(--color-text-secondary)]">{suggestion.category}</div>
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>







