<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Filter, X, ChevronDown, SlidersHorizontal, Tag, DollarSign, Ruler, Star, Search } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Checkbox from '../../atoms/controls/toggles/Checkbox.svelte';
  import RangeSlider from '../../atoms/controls/sliders/RangeSlider.svelte';

  type FilterOption = {
    id: string;
    label: string;
    value: string;
    count?: number;
  };

  type FilterSection = {
    id: string;
    title: string;
    type: 'checkbox' | 'radio' | 'range' | 'slider';
    options?: FilterOption[];
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: string | number | [number, number];
    searchable?: boolean;
  };

  type ActiveFilter = {
    sectionId: string;
    value: string | [number, number];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    filters: FilterSection[];
    activeFilters?: ActiveFilter[];
    class?: string;
    sectionClass?: string;
    headerClass?: string;
    contentClass?: string;
    showActiveFilters?: boolean;
    showSearchInFilters?: boolean;
    multiSelect?: boolean; // For checkbox-based filters
    onFilterChange?: (filters: ActiveFilter[]) => void;
    onClearAll?: () => void;
    currency?: string;
    locale?: string;
  };

  let {
    filters = [],
    activeFilters = [],
    class: hostClass = '',
    sectionClass = '',
    headerClass = '',
    contentClass = '',
    showActiveFilters = true,
    showSearchInFilters = true,
    multiSelect = true,
    onFilterChange,
    onClearAll,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let expandedSections = $state<Record<string, boolean>>({});
  let searchTerms = $state<Record<string, string>>({});

  $effect(() => {
    // Initialize expanded state
    const initialExpanded: Record<string, boolean> = {};
    for (const filter of filters) {
      initialExpanded[filter.id] = false;
    }
    expandedSections = initialExpanded;
    
    // Initialize search terms
    const initialSearchTerms: Record<string, string> = {};
    for (const filter of filters) {
      initialSearchTerms[filter.id] = '';
    }
    searchTerms = initialSearchTerms;
  });

  function toggleSection(sectionId: string) {
    expandedSections = { ...expandedSections, [sectionId]: !expandedSections[sectionId] };
  }

  function clearAllFilters() {
    activeFilters = [];
    onClearAll?.();
  }

  function removeFilter(filterToRemove: ActiveFilter) {
    activeFilters = activeFilters.filter(
      f => !(f.sectionId === filterToRemove.sectionId && f.value === filterToRemove.value)
    );
    onFilterChange?.(activeFilters);
  }

  function addFilter(sectionId: string, value: string | [number, number]) {
    // Check if this filter is already applied
    const existingIndex = activeFilters.findIndex(
      f => f.sectionId === sectionId && f.value === value
    );
    
    if (existingIndex !== -1) {
      // Remove if already exists (for multi-select)
      activeFilters = activeFilters.filter(
        (_, index) => index !== existingIndex
      );
    } else if (!multiSelect) {
      // If not multi-select, replace any existing filter in this section
      activeFilters = [
        ...activeFilters.filter(f => f.sectionId !== sectionId),
        { sectionId, value }
      ];
    } else {
      // Otherwise, add new filter
      activeFilters = [...activeFilters, { sectionId, value }];
    }
    
    onFilterChange?.(activeFilters);
  }

  function updateRangeFilter(sectionId: string, value: [number, number]) {
    // Check if this filter is already applied
    const existingIndex = activeFilters.findIndex(f => f.sectionId === sectionId);
    
    if (existingIndex !== -1) {
      // Update existing filter
      const newFilters = [...activeFilters];
      newFilters[existingIndex] = { sectionId, value };
      activeFilters = newFilters;
    } else {
      // Add new filter
      activeFilters = [...activeFilters, { sectionId, value }];
    }
    
    onFilterChange?.(activeFilters);
  }

  function getFilterLabel(sectionId: string, value: string | [number, number]): string {
    const section = filters.find(f => f.id === sectionId);
    if (!section) return String(value);
    
    if (Array.isArray(value)) {
      return `${value[0]} - ${value[1]}`;
    }
    
    if (section.options) {
      const option = section.options.find(opt => opt.value === value);
      return option ? option.label : String(value);
    }
    
    return String(value);
  }

  function getActiveFiltersBySection(sectionId: string): ActiveFilter[] {
    return activeFilters.filter(f => f.sectionId === sectionId);
  }

  function isFilterActive(sectionId: string, value: string): boolean {
    return activeFilters.some(f => 
      f.sectionId === sectionId && f.value === value
    );
  }

  function getSectionIcon(sectionType: string) {
    switch (sectionType) {
      case 'price': 
        return DollarSign;
      case 'category':
      case 'tags':
        return Tag;
      case 'size':
      case 'dimensions':
        return Ruler;
      case 'rating':
        return Star;
      default:
        return Filter;
    }
  }

  function formatValue(value: number | string, filterId: string): string {
    if (typeof value === 'string') {
      return value;
    }

    const normalizedId = filterId.toLowerCase();
    if (normalizedId.includes('price')) {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency
      }).format(value);
    }

    if (normalizedId.includes('rating')) {
      return `${value.toFixed(1)}★`;
    }

    if (normalizedId.includes('length') || normalizedId.includes('height') || normalizedId.includes('width')) {
      return `${value}"`;
    }

    return value.toString();
  }

  function getRangeValue(filter: FilterSection): [number, number] {
    const defaultRange: [number, number] = [filter.min ?? 0, filter.max ?? 100];
    const activeValue = getActiveFiltersBySection(filter.id)[0]?.value;

    if (Array.isArray(activeValue)) {
      return activeValue as [number, number];
    }

    return defaultRange;
  }
</script>

<div class={`product-filter ${hostClass}`} {...restProps}>
  {#if showActiveFilters && activeFilters.length > 0}
    <div class="mb-4 p-3 bg-gray-50 rounded-lg">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-sm font-medium text-gray-900">Active Filters</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          onclick={clearAllFilters}
        >
          Clear All
        </Button>
      </div>
      
      <div class="flex flex-wrap gap-2">
        {#each activeFilters as filter}
          <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {getFilterLabel(filter.sectionId, filter.value)}
            <button
              type="button"
              class="ml-2 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-800 hover:bg-blue-200 focus:outline-none"
              aria-label={`Remove ${getFilterLabel(filter.sectionId, filter.value)} filter`}
              onclick={() => removeFilter(filter)}
            >
              <X class="h-3 w-3" />
            </button>
          </span>
        {/each}
      </div>
    </div>
  {/if}
  
  <div class="space-y-4">
    {#each filters as filter}
      {@const SectionIcon = getSectionIcon(filter.id)}
      <div class={`border rounded-lg overflow-hidden ${sectionClass}`}>
        <button
          type="button"
          class={`w-full flex justify-between items-center p-3 text-left font-medium ${
            expandedSections[filter.id] ? 'bg-gray-50' : 'bg-white'
          } ${headerClass}`}
          onclick={() => toggleSection(filter.id)}
          aria-expanded={expandedSections[filter.id]}
        >
          <div class="flex items-center">
            <SectionIcon class="h-4 w-4 mr-2 text-gray-500" />
            <span>{filter.title}</span>
            {#if getActiveFiltersBySection(filter.id).length > 0}
              <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {getActiveFiltersBySection(filter.id).length}
              </span>
            {/if}
          </div>
          <ChevronDown 
            class={`h-5 w-5 text-gray-500 transition-transform ${
              expandedSections[filter.id] ? 'transform rotate-180' : ''
            }`} 
          />
        </button>
        
        {#if expandedSections[filter.id]}
          <div class={`p-3 ${contentClass}`}>
            {#if filter.type === 'checkbox' || filter.type === 'radio'}
              {#if filter.searchable}
                <div class="mb-3">
                  <div class="relative">
                    <input
                      type="text"
                      class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Search options..."
                      value={searchTerms[filter.id]}
                      oninput={(e) => searchTerms = { ...searchTerms, [filter.id]: (e.target as HTMLInputElement).value }}
                    />
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search class="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              {/if}
              
              <div class="space-y-2 max-h-60 overflow-y-auto">
                {#each filter.options || [] as option}
                  {#if !filter.searchable || option.label.toLowerCase().includes(searchTerms[filter.id].toLowerCase())}
                    <div class="flex items-center">
                      <input
                        type={filter.type === 'radio' ? 'radio' : 'checkbox'}
                        id={`filter-${filter.id}-${option.value}`}
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={isFilterActive(filter.id, option.value)}
                        onchange={() => addFilter(filter.id, option.value)}
                      />
                      <label 
                        for={`filter-${filter.id}-${option.value}`} 
                        class="ml-2 block text-sm text-gray-700"
                      >
                        {option.label}
                        {#if option.count !== undefined}
                          <span class="text-gray-500 ml-1">({option.count})</span>
                        {/if}
                      </label>
                    </div>
                  {/if}
                {/each}
              </div>
            {:else if filter.type === 'range' || filter.type === 'slider'}
              {@const rangeValue = getRangeValue(filter)}
              <div class="space-y-4">
                <div class="flex justify-between text-sm text-gray-700">
                  <span>{formatValue(filter.min ?? rangeValue[0], filter.id)}</span>
                  <span>{formatValue(filter.max ?? rangeValue[1], filter.id)}</span>
                </div>
                <RangeSlider
                  id={`filter-range-${filter.id}`}
                  min={filter.min ?? 0}
                  max={filter.max ?? 100}
                  step={filter.step ?? 1}
                  range
                  value={rangeValue}
                  on:change={(event) => {
                    updateRangeFilter(filter.id, (event as CustomEvent<[number, number]>).detail);
                  }}
                />
                <div class="flex justify-between text-sm text-gray-700">
                  <span>{formatValue(rangeValue[0], filter.id)}</span>
                  <span>{formatValue(rangeValue[1], filter.id)}</span>
                </div>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .filter-section {
    transition: max-height 0.3s ease;
  }
</style>
