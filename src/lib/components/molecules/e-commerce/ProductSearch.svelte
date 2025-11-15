<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Search, X, Filter, SlidersHorizontal, TrendingUp, Flame } from 'lucide-svelte';
  import Input from '../../atoms/input/base/Input.svelte';
  import { Button } from '$lib/components/atoms';
  import ProductCard from './ProductCard.svelte';

  type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    tags?: string[];
    category?: string;
    discountPercent?: number;
  };

  type SearchSuggestion = {
    id: string;
    text: string;
    type: 'recent' | 'popular' | 'trending';
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    products: Product[];
    suggestions?: SearchSuggestion[];
    placeholder?: string;
    showRecentSearches?: boolean;
    showPopularSearches?: boolean;
    showFilters?: boolean;
    maxSuggestions?: number;
    showClearButton?: boolean;
    onSearch?: (query: string) => void;
    onProductClick?: (product: Product) => void;
    onSuggestionClick?: (suggestion: SearchSuggestion) => void;
    class?: string;
    inputClass?: string;
    suggestionsClass?: string;
    resultsClass?: string;
    productCardClass?: string;
  };

  let {
    products = [],
    suggestions = [],
    placeholder = 'Search products...',
    showRecentSearches = true,
    showPopularSearches = true,
    showFilters = true,
    maxSuggestions = 5,
    showClearButton = true,
    onSearch,
    onProductClick,
    onSuggestionClick,
    class: hostClass = '',
    inputClass = '',
    suggestionsClass = '',
    resultsClass = '',
    productCardClass = '',
    ...restProps
  }: Props = $props();

  let searchQuery = $state('');
  let searchFocused = $state(false);
  let recentSearches = $state<string[]>([]);
  let popularSearches = $derived(suggestions.filter(s => s.type === 'popular'));
  let trendingSearches = $derived(suggestions.filter(s => s.type === 'trending'));

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
    onSearch?.(searchQuery);
  }

  function handleSearchSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Add to recent searches if not already present
      if (!recentSearches.includes(searchQuery.trim())) {
        recentSearches = [searchQuery.trim(), ...recentSearches.slice(0, 4)];
      }
      onSearch?.(searchQuery);
    }
  }

  function clearSearch() {
    searchQuery = '';
    onSearch?.('');
  }

  function handleSuggestionClick(suggestion: SearchSuggestion) {
    searchQuery = suggestion.text;
    onSuggestionClick?.(suggestion);
    onSearch?.(suggestion.text);
  }

  function handleProductClick(product: Product) {
    onProductClick?.(product);
  }

  // Filter products based on search query
  let filteredProducts = $derived.by(() => {
    if (!searchQuery) return [];
    
    const query = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      (product.description && product.description.toLowerCase().includes(query)) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query))) ||
      (product.category && product.category.toLowerCase().includes(query))
    );
  });

  let displaySuggestions = $derived.by(() => {
    if (!searchFocused || !searchQuery) {
      return {
        recent: showRecentSearches ? recentSearches : [],
        popular: showPopularSearches ? popularSearches.slice(0, maxSuggestions) : [],
        trending: showPopularSearches ? trendingSearches.slice(0, maxSuggestions) : []
      };
    }
    
    // When there's a query, show related suggestions/results
    return {
      recent: [],
      popular: [],
      trending: []
    };
  });
</script>

<div class={`product-search ${hostClass}`} {...restProps}>
  <div class="relative">
    <form class="relative" onsubmit={handleSearchSubmit}>
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search class="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        class={`block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${inputClass}`}
        placeholder={placeholder}
        value={searchQuery}
        oninput={handleSearchInput}
        onfocus={() => searchFocused = true}
        onblur={() => setTimeout(() => searchFocused = false, 200)}
      />
      
      {#if searchQuery && showClearButton}
        <button
          type="button"
          class="absolute inset-y-0 right-0 pr-3 flex items-center"
          onclick={clearSearch}
          aria-label="Clear search"
        >
          <X class="h-5 w-5 text-gray-400 hover:text-gray-500" />
        </button>
      {/if}
    </form>
    
    {#if searchFocused}
      <div class={`absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-96 overflow-y-auto ${suggestionsClass}`}>
        {#if !searchQuery}
          <!-- Recent/popular searches -->
          {#if showRecentSearches && recentSearches.length > 0}
            <div class="px-4 py-2">
              <h3 class="text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Searches</h3>
              <ul class="mt-2 space-y-1">
                {#each recentSearches as search}
                  <li>
                    <button
                      type="button"
                      class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onclick={() => handleSuggestionClick({ id: 'recent-' + search, text: search, type: 'recent' })}
                    >
                      <Search class="h-4 w-4 mr-2 text-gray-500" />
                      {search}
                    </button>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
          
          {#if showPopularSearches && (popularSearches.length > 0 || trendingSearches.length > 0)}
            <div class="border-t border-gray-200 px-4 py-2">
              {#if popularSearches.length > 0}
                <h3 class="text-xs font-medium text-gray-500 uppercase tracking-wider">Popular Searches</h3>
                <ul class="mt-2 space-y-1">
                  {#each popularSearches as suggestion}
                    <li>
                      <button
                        type="button"
                        class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        onclick={() => handleSuggestionClick(suggestion)}
                      >
                        <TrendingUp class="h-4 w-4 mr-2 text-gray-500" />
                        {suggestion.text}
                      </button>
                    </li>
                  {/each}
                </ul>
              {/if}
              
              {#if trendingSearches.length > 0}
                <h3 class="text-xs font-medium text-gray-500 uppercase tracking-wider mt-4">Trending Searches</h3>
                <ul class="mt-2 space-y-1">
                  {#each trendingSearches as suggestion}
                    <li>
                      <button
                        type="button"
                        class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        onclick={() => handleSuggestionClick(suggestion)}
                      >
                        <Flame class="h-4 w-4 mr-2 text-orange-500" />
                        {suggestion.text}
                      </button>
                    </li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/if}
        {:else}
          {#if filteredProducts.length > 0}
            <!-- Search results -->
            <div class={`divide-y divide-gray-200 ${resultsClass}`}>
              {#each filteredProducts as product}
                <button
                  type="button"
                  class="w-full p-4 hover:bg-gray-50 cursor-pointer text-left"
                  onclick={() => handleProductClick(product)}
                >
                  <ProductCard
                    {product}
                    class={`border-0 shadow-none ${productCardClass}`}
                  />
                </button>
              {/each}
            </div>
          {:else}
            <!-- No results -->
            <div class="px-4 py-8 text-center">
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                <Search class="h-6 w-6 text-gray-400" />
              </div>
              <h3 class="mt-2 text-sm font-medium text-gray-900">No results found</h3>
              <p class="mt-1 text-sm text-gray-500">
                No products matched your search for "{searchQuery}". Please try different keywords.
              </p>
            </div>
          {/if}
        {/if}
      </div>
    {/if}
  </div>
  
  {#if showFilters}
    <div class="mt-4 flex items-center justify-between">
      <div class="flex items-center">
        <Filter class="h-4 w-4 text-gray-500 mr-2" />
        <span class="text-sm text-gray-700">Filters</span>
      </div>
      <button
        type="button"
        class="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
      >
        <SlidersHorizontal class="h-4 w-4 mr-1" />
        Advanced
      </button>
    </div>
  {/if}
</div>





