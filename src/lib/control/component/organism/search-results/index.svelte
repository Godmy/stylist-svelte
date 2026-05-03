<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { createSearchResultsState } from '$stylist/control/function/state/search-results';
  import type { SearchResultsProps } from '$stylist/control/type/struct/search-results-props';

  let props: SearchResultsProps = $props();
  const state = createSearchResultsState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      results: _results,
      query: _query,
      loading: _loading,
      onResultClick: _onResultClick,
      showMetadata: _showMetadata,
      maxResults: _maxResults,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={state.rootClass} {...restProps}>
  {#if state.loading}
    <div class="p-8 text-center text-sm text-[var(--color-text-secondary)]">Loading...</div>
  {:else if state.displayedResults.length === 0 && state.query}
    <div class="p-8 text-center text-sm text-[var(--color-text-secondary)]">No results for "{state.query}"</div>
  {:else}
    <div class="divide-y divide-gray-200 border rounded-lg">
      {#each state.displayedResults as result}
        <button type="button" class="w-full text-left p-4 hover:bg-[var(--color-background-secondary)]" onclick={() => state.onResultClick?.(result)}>
          <div class="flex gap-3">
            <BaseIcon name={state.icon(result.type)} class="h-5 w-5 text-[var(--color-text-secondary)]" />
            <div>
              <div class="font-medium">{result.title}</div>
              {#if result.description}<div class="text-sm text-[var(--color-text-secondary)]">{result.description}</div>{/if}
              {#if state.showMetadata && result.metadata}
                <div class="text-xs text-[var(--color-text-secondary)] mt-1">
                  {result.metadata.date} {result.metadata.author} {result.metadata.location}
                </div>
              {/if}
            </div>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>





