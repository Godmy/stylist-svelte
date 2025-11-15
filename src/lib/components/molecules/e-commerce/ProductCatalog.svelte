<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Grid3X3, List, Search, Filter, ShoppingCart, Heart, Star, Package } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Input from '../../atoms/input/base/Input.svelte';
  import Select from '../../atoms/controls/selectors/Select.svelte';
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
    isFeatured?: boolean;
    isOnSale?: boolean;
    isNew?: boolean;
    category?: string;
    tags?: string[];
    discountPercent?: number;
  };

  type SortOption = {
    id: string;
    label: string;
    field: string;
    direction: 'asc' | 'desc';
  };

  type FilterOption = {
    id: string;
    label: string;
    options: { value: string; label: string }[];
  };

  type ViewMode = 'grid' | 'list';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    products: Product[];
    title?: string;
    description?: string;
    showSearch?: boolean;
    showFilters?: boolean;
    showSort?: boolean;
    showViewToggle?: boolean;
    showResultsCount?: boolean;
    showFeaturedBadge?: boolean;
    showNewBadge?: boolean;
    showSaleBadge?: boolean;
    viewMode?: ViewMode;
    sortOptions?: SortOption[];
    filterOptions?: FilterOption[];
    defaultSort?: string;
    maxProductsPerRow?: number;
    onProductAddToCart?: (product: Product) => void;
    onProductWishlistToggle?: (product: Product) => void;
    onProductClick?: (product: Product) => void;
    onSearch?: (query: string) => void;
    onSort?: (sortId: string) => void;
    onFilterChange?: (filters: Record<string, string>) => void;
    currency?: string;
    locale?: string;
    class?: string;
    headerClass?: string;
    toolbarClass?: string;
    productListClass?: string;
    productCardClass?: string;
  };

  let {
    products = [],
    title = 'Product Catalog',
    description,
    showSearch = true,
    showFilters = true,
    showSort = true,
    showViewToggle = true,
    showResultsCount = true,
    showFeaturedBadge = true,
    showNewBadge = true,
    showSaleBadge = true,
    viewMode: initialViewMode = 'grid',
    sortOptions = [
      { id: 'featured', label: 'Featured', field: 'featured', direction: 'desc' },
      { id: 'newest', label: 'Newest', field: 'createdAt', direction: 'desc' },
      { id: 'price-low', label: 'Price: Low to High', field: 'price', direction: 'asc' },
      { id: 'price-high', label: 'Price: High to Low', field: 'price', direction: 'desc' },
      { id: 'rating', label: 'Top Rated', field: 'rating', direction: 'desc' }
    ],
    filterOptions = [],
    defaultSort = 'featured',
    maxProductsPerRow = 4,
    onProductAddToCart,
    onProductWishlistToggle,
    onProductClick,
    onSearch,
    onSort,
    onFilterChange,
    currency = 'USD',
    locale = 'en-US',
    class: hostClass = '',
    headerClass = '',
    toolbarClass = '',
    productListClass = '',
    productCardClass = '',
    ...restProps
  }: Props = $props();

  let searchQuery = $state('');
  let selectedSort = $state(defaultSort);
  let activeFilters = $state<Record<string, string>>({});
  let currentViewMode = $state<ViewMode>(initialViewMode);
  let displayedProducts = $derived.by(() => {
    let result = [...products];
    
    // Apply search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) || 
        (product.description && product.description.toLowerCase().includes(lowerQuery)) ||
        (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
      );
    }
    
    // Apply filters
    for (const [filterId, value] of Object.entries(activeFilters)) {
      if (value) {
        result = result.filter(product => 
          (product as any)[filterId] === value || 
          (product.tags && product.tags.includes(value))
        );
      }
    }
    
    // Apply sorting
    if (selectedSort) {
      const sortOption = sortOptions.find(opt => opt.id === selectedSort);
      if (sortOption) {
        result.sort((a, b) => {
          // Simplified sorting - in a real app, you'd handle different data types
          if (sortOption.direction === 'asc') {
            return (a[sortOption.field as keyof typeof a] as number) - (b[sortOption.field as keyof typeof b] as number);
          } else {
            return (b[sortOption.field as keyof typeof b] as number) - (a[sortOption.field as keyof typeof a] as number);
          }
        });
      }
    }
    
    return result;
  });
  
  let productsPerRowClass = $derived({
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  }[maxProductsPerRow] || 'grid-cols-4');

  function handleSearch(e: Event) {
    const target = e.target as HTMLInputElement;
    searchQuery = target.value;
    onSearch?.(searchQuery);
  }

  function handleSortChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    selectedSort = target.value;
    onSort?.(selectedSort);
  }

  function handleFilterChange(filterId: string, value: string) {
    activeFilters = { ...activeFilters, [filterId]: value };
    onFilterChange?.(activeFilters);
  }

  function toggleViewMode() {
    currentViewMode = currentViewMode === 'grid' ? 'list' : 'grid';
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }
</script>

<div class={`product-catalog ${hostClass}`} {...restProps}>
  {#if title || description}
    <div class={`mb-6 ${headerClass}`}>
      {#if title}
        <h2 class="text-2xl font-bold text-gray-900">{title}</h2>
      {/if}
      
      {#if description}
        <p class="mt-2 text-gray-600">{description}</p>
      {/if}
    </div>
  {/if}
  
  <!-- Toolbar with search, filters, sort, and view controls -->
  <div class={`flex flex-wrap items-center justify-between gap-4 mb-6 ${toolbarClass}`}>
    <div class="flex items-center space-x-4">
      {#if showSearch}
        <div class="relative w-64">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search products..."
            value={searchQuery}
            oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
          />
        </div>
      {/if}
      
      {#if showFilters}
        <button
          type="button"
          class="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Filter class="h-4 w-4 mr-2" />
          Filters
        </button>
      {/if}
      
      {#if showSort}
        <div>
          <label for="sort" class="sr-only">Sort</label>
          <select
            id="sort"
            class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={selectedSort}
            onchange={handleSortChange}
          >
            {#each sortOptions as option}
              <option value={option.id}>{option.label}</option>
            {/each}
          </select>
        </div>
      {/if}
    </div>
    
    <div class="flex items-center space-x-3">
      {#if showResultsCount}
        <p class="text-sm text-gray-700">
          {displayedProducts.length} {displayedProducts.length === 1 ? 'result' : 'results'}
        </p>
      {/if}
      
      {#if showViewToggle}
        <div class="flex items-center border rounded-md">
          <button
            type="button"
            class={`p-2 rounded-l ${
              currentViewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onclick={toggleViewMode}
            aria-label="Grid view"
          >
            <Grid3X3 class="h-5 w-5" />
          </button>
          <button
            type="button"
            class={`p-2 rounded-r ${
              currentViewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:text-gray-700'
            }`}
            onclick={toggleViewMode}
            aria-label="List view"
          >
            <List class="h-5 w-5" />
          </button>
        </div>
      {/if}
    </div>
  </div>
  
  <!-- Products grid/list -->
  <div class={`${
    currentViewMode === 'grid'
      ? `grid ${productsPerRowClass} gap-6`
      : 'space-y-6'
  } ${productListClass}`}>
    {#each displayedProducts as product}
      <ProductCard
        {product}
        class={productCardClass}
        showFeaturedBadge={showFeaturedBadge}
        showNewBadge={showNewBadge}
        showSaleBadge={showSaleBadge}
        onAddToCart={() => onProductAddToCart?.(product)}
        onWishlistToggle={() => onProductWishlistToggle?.(product)}
        onProductClick={() => onProductClick?.(product)}
      />
    {/each}
  </div>
  
  {#if displayedProducts.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
      <div class="mx-auto h-12 w-12 text-gray-400">
        <Package class="h-12 w-12" />
      </div>
      <h3 class="mt-2 text-sm font-medium text-gray-900">No products found</h3>
      <p class="mt-1 text-sm text-gray-500">
        Try adjusting your search or filter to find what you're looking for.
      </p>
    </div>
  {/if}
</div>





