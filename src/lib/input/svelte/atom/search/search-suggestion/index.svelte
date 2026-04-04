<script lang="ts">
  import { createSearchSuggestionState } from '$stylist/control/function/state/search-suggestion';
  import type { SearchSuggestionProps } from '$stylist/control/interface/component/search-suggestion/other';

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
  }: SearchSuggestionProps = $props();

  const state = createSearchSuggestionState({
    suggestions,
    query,
    loading,
    class: hostClass,
    suggestionClass,
    headerClass,
    onValueInput,
    onValueChange,
    maxSuggestions
  });
</script>

<div class={state.rootClass} {...restProps}>
  {#if loading}
    <div class="p-4 flex justify-center items-center">
      <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-[var(--color-primary-500)]"></div>
    </div>
  {:else if state.displayedSuggestions.length === 0 && query}
    <div class="p-4 text-center text-sm text-[var(--color-text-secondary)]">
      No suggestions found
    </div>
  {:else}
    <ul class="divide-y divide-gray-100">
      {#each state.displayedSuggestions as suggestion}
        <li>
          <button
            type="button"
            class={state.buttonClass}
            onclick={() => state.handleSuggestionClick(suggestion)}
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






