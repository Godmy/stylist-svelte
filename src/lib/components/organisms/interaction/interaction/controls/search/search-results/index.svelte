<script lang="ts">
  import { Calendar, MapPin, Search, User } from 'lucide-svelte';
  import { SearchResultsStyleManager } from '$stylist/design-system/styles';
  import type { SearchResultsProps, SearchResultItem } from '$stylist/design-system/props';

  let {
    results = [],
    query = '',
    loading = false,
    class: className = '',
    onResultClick,
    showMetadata = true,
    maxResults = 10,
    ...restProps
  }: SearchResultsProps = $props();

  const displayedResults = $derived(results.slice(0, maxResults));

  function icon(type: SearchResultItem['type']) {
    if (type === 'user') return User;
    if (type === 'event') return Calendar;
    if (type === 'document') return MapPin;
    return Search;
  }
</script>

<div class={SearchResultsStyleManager.root(className)} {...restProps}>
  {#if loading}
    <div class="p-8 text-center text-sm text-gray-600">Loading...</div>
  {:else if displayedResults.length === 0 && query}
    <div class="p-8 text-center text-sm text-gray-600">No results for "{query}"</div>
  {:else}
    <div class="divide-y divide-gray-200 border rounded-lg">
      {#each displayedResults as result}
        {@const Icon = icon(result.type)}
        <button type="button" class="w-full text-left p-4 hover:bg-gray-50" onclick={() => onResultClick?.(result)}>
          <div class="flex gap-3">
            <Icon class="h-5 w-5 text-gray-500" />
            <div>
              <div class="font-medium">{result.title}</div>
              {#if result.description}<div class="text-sm text-gray-600">{result.description}</div>{/if}
              {#if showMetadata && result.metadata}
                <div class="text-xs text-gray-500 mt-1">
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

