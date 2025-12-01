<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Search, MapPin, Calendar, User } from 'lucide-svelte';

  type SearchResult = {
    id: string;
    title: string;
    description?: string;
    url?: string;
    type?: 'page' | 'document' | 'user' | 'event' | 'other';
    metadata?: {
      date?: string;
      author?: string;
      location?: string;
    };
    actions?: Snippet;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'results'>;

  type Props = RestProps & {
    results: SearchResult[];
    query?: string;
    loading?: boolean;
    class?: string;
    resultClass?: string;
    headerClass?: string;
    footerClass?: string;
    onResultClick?: (result: SearchResult) => void;
    showMetadata?: boolean;
    maxResults?: number;
  };

  let {
    results = [] as SearchResult[],
    query = '',
    loading = false,
    class: hostClass = '',
    resultClass = '',
    headerClass = '',
    footerClass = '',
    onResultClick,
    showMetadata = true,
    maxResults = 10,
    ...restProps
  }: Props = $props();

  // Явно указываем тип для results
  let displayedResults = $derived.by<SearchResult[]>(() => results.slice(0, maxResults));

  function handleResultClick(result: SearchResult) {
    onResultClick?.(result);
  }

  function getIconForType(type: string) {
    switch (type) {
      case 'user': return User;
      case 'event': return Calendar;
      case 'document': return MapPin;
      case 'page':
      default: return Search;
    }
  }
</script>

<div class={`search-results ${hostClass}`} {...restProps}>
  {#if loading}
    <div class="flex justify-center items-center p-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  {:else if displayedResults.length === 0 && query}
    <div class="text-center py-8">
      <p class="text-gray-500">No results found for "{query}"</p>
    </div>
  {:else}
    <div class="divide-y divide-gray-200">
      {#each displayedResults as result}
        {@const Icon = getIconForType(result.type || 'page')}
        <div 
          class={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${resultClass}`}
          onclick={() => handleResultClick(result)}
          role="button"
          tabindex={0}
          onkeydown={(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleResultClick(result);
            }
          }}
        >
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="bg-blue-100 text-blue-800 rounded-full p-2">
                <Icon class="h-5 w-5" />
              </div>
            </div>
            <div class="ml-4">
              <h3 class="text-sm font-medium text-gray-900">{result.title}</h3>
              {#if result.description}
                <p class="text-sm text-gray-500 mt-1">{result.description}</p>
              {/if}
              
              {#if showMetadata && result.metadata}
                <div class="mt-2 flex flex-wrap gap-2 text-xs text-gray-400">
                  {#if result.metadata.date}
                    <span class="flex items-center">
                      <Calendar class="h-3 w-3 mr-1" />
                      {result.metadata.date}
                    </span>
                  {/if}
                  {#if result.metadata.author}
                    <span class="flex items-center">
                      <User class="h-3 w-3 mr-1" />
                      {result.metadata.author}
                    </span>
                  {/if}
                  {#if result.metadata.location}
                    <span class="flex items-center">
                      <MapPin class="h-3 w-3 mr-1" />
                      {result.metadata.location}
                    </span>
                  {/if}
                </div>
              {/if}
              
              {#if result.actions}
                <div class="mt-2">
                  {@render result.actions()}
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    {#if results.length > maxResults}
      <div class={`p-4 text-center text-sm text-gray-500 ${footerClass}`}>
        Showing {maxResults} of {results.length} results
      </div>
    {/if}
  {/if}
</div>
