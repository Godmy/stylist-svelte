<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const Calendar = 'calendar';
const MapPin = 'map-pin';
const Search = 'search';
const User = 'user';

  import { SearchResultsStyleManager } from '$stylist/control/class/style-manager/search-results';

  type SearchResultItem = {
    id: string;
    type: 'user' | 'event' | 'document' | 'generic';
    title: string;
    description?: string;
    metadata?: {
      date?: string;
      author?: string;
      location?: string;
    };
  };

  type SearchResultsProps = {
    results?: SearchResultItem[];
    query?: string;
    loading?: boolean;
    class?: string | null;
    onResultClick?: (result: SearchResultItem) => void;
    showMetadata?: boolean;
    maxResults?: number;
  };

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

<div class={SearchResultsStyleManager.root(className ?? '')} {...restProps}>
  {#if loading}
    <div class="p-8 text-center text-sm text-[var(--color-text-secondary)]">Loading...</div>
  {:else if displayedResults.length === 0 && query}
    <div class="p-8 text-center text-sm text-[var(--color-text-secondary)]">No results for "{query}"</div>
  {:else}
    <div class="divide-y divide-gray-200 border rounded-lg">
      {#each displayedResults as result}
        <button type="button" class="w-full text-left p-4 hover:bg-[var(--color-background-secondary)]" onclick={() => onResultClick?.(result)}>
          <div class="flex gap-3">
            <BaseIcon name={icon(result.type)} class="h-5 w-5 text-[var(--color-text-secondary)]" />
            <div>
              <div class="font-medium">{result.title}</div>
              {#if result.description}<div class="text-sm text-[var(--color-text-secondary)]">{result.description}</div>{/if}
              {#if showMetadata && result.metadata}
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





