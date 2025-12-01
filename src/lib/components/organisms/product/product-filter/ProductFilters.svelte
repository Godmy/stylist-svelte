<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Filter as FilterIcon, X, ChevronDown, SlidersHorizontal } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import RangeSlider from '../../atoms/controls/sliders/RangeSlider.svelte';

  type FilterOption = {
    id: string;
    label: string;
    value: string;
    count?: number; // For showing number of items matching this filter
  };

  type Filter = {
    id: string;
    name: string;
    type: 'checkbox' | 'radio' | 'range' | 'select';
    options?: FilterOption[];
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: string | number | string[]; // For range filters, this would be [min, max]
  };

  type ActiveFilter = {
    filterId: string;
    value: string | number | [number, number];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    filters: Filter[];
    activeFilters?: ActiveFilter[];
    showAppliedFilters?: boolean;
    showExpandAll?: boolean;
    expandByDefault?: boolean;
    onFilterChange?: (activeFilters: ActiveFilter[]) => void;
    class?: string;
    filterClass?: string;
    appliedFiltersClass?: string;
    sectionClass?: string;
    headerClass?: string;
    contentClass?: string;
  };

  let {
    filters = [],
    activeFilters = [],
    showAppliedFilters = true,
    showExpandAll = true,
    expandByDefault = false,
    onFilterChange,
    class: hostClass = '',
    filterClass = '',
    appliedFiltersClass = '',
    sectionClass = '',
    headerClass = '',
    contentClass = '',
    ...restProps
  }: Props = $props();

  let expandedSections = $state<Record<string, boolean>>({});
  type AppliedFilterValue = string | number | [number, number] | string[];

  let appliedFilterValues = $state<Record<string, AppliedFilterValue>>({});

  const isRangeValue = (value: AppliedFilterValue | undefined): value is [number, number] =>
    Array.isArray(value) &&
    value.length === 2 &&
    value.every((item) => typeof item === 'number');

  const isStringArrayValue = (value: AppliedFilterValue | undefined): value is string[] =>
    Array.isArray(value) && (value.length === 0 || typeof value[0] === 'string');

  function buildActiveFilters(values: Record<string, AppliedFilterValue>): ActiveFilter[] {
    const active: ActiveFilter[] = [];

    for (const [id, val] of Object.entries(values)) {
      if (isStringArrayValue(val)) {
        for (const entry of val) {
          active.push({ filterId: id, value: entry });
        }
      } else if (isRangeValue(val)) {
        active.push({ filterId: id, value: val });
      } else if (val !== undefined) {
        active.push({ filterId: id, value: val });
      }
    }

    return active;
  }

  $effect(() => {
    // Initialize expanded state based on expandByDefault
    const newExpanded: Record<string, boolean> = {};
    for (const filter of filters) {
      newExpanded[filter.id] = expandByDefault;
    }
    expandedSections = newExpanded;
    
    // Initialize applied filter values from activeFilters prop
    const initialValues: Record<string, AppliedFilterValue> = {};
    for (const activeFilter of activeFilters) {
      initialValues[activeFilter.filterId] = activeFilter.value;
    }
    appliedFilterValues = initialValues;
  });

  function toggleSection(sectionId: string) {
    expandedSections = { ...expandedSections, [sectionId]: !expandedSections[sectionId] };
  }

  function clearAllFilters() {
    appliedFilterValues = {};
    expandedSections = Object.keys(expandedSections).reduce((acc, key) => ({ ...acc, [key]: expandByDefault }), {});
    onFilterChange?.([]);
  }

  function removeFilter(filterId: string, value: string | number | [number, number] | string[]) {
    const newAppliedFilters: Record<string, AppliedFilterValue> = { ...appliedFilterValues };
    const filterValue = newAppliedFilters[filterId];

    if (isStringArrayValue(filterValue)) {
      // For multi-select filters
      const newArray = filterValue.filter((v) => v !== value);
      newAppliedFilters[filterId] = newArray;
      if (newArray.length === 0) {
        delete newAppliedFilters[filterId];
      }
    } else {
      delete newAppliedFilters[filterId];
    }

    appliedFilterValues = newAppliedFilters;

    // Convert to ActiveFilter[] format
    onFilterChange?.(buildActiveFilters(newAppliedFilters));
  }

  function handleCheckboxChange(filterId: string, optionValue: string, checked: boolean) {
    let currentValues: string[] = [];
    const existingValue = appliedFilterValues[filterId];

    if (existingValue && isStringArrayValue(existingValue)) {
      currentValues = existingValue;
    } else if (existingValue && typeof existingValue === 'string') {
      currentValues = [existingValue];
    }

    if (checked) {
      currentValues = [...currentValues, optionValue];
    } else {
      currentValues = currentValues.filter(v => v !== optionValue);
    }

    appliedFilterValues = { ...appliedFilterValues, [filterId]: currentValues };

    // Convert to ActiveFilter[] format
    onFilterChange?.(buildActiveFilters(appliedFilterValues));
  }

  function handleRadioChange(filterId: string, optionValue: string) {
    appliedFilterValues = { ...appliedFilterValues, [filterId]: optionValue };

    // Convert to ActiveFilter[] format
    onFilterChange?.(buildActiveFilters(appliedFilterValues));
  }

  function handleRangeChange(filterId: string, value: [number, number]) {
    appliedFilterValues = { ...appliedFilterValues, [filterId]: value };

    // Convert to ActiveFilter[] format
    onFilterChange?.(buildActiveFilters(appliedFilterValues));
  }

  function isFilterActive(filterId: string, value: string | number): boolean {
    const filterValue = appliedFilterValues[filterId];

    if (isStringArrayValue(filterValue)) {
      return filterValue.includes(String(value));
    }

    return filterValue === value;
  }

  function getActiveFilterLabel(filterId: string, value: string | number | [number, number]): string {
    const filter = filters.find(f => f.id === filterId);
    if (!filter) return String(value);

    if (Array.isArray(value) && value.length === 2 && typeof value[0] === 'number' && typeof value[1] === 'number') {
      return `${filter.name}: ${value[0]} - ${value[1]}`;
    }

    if (filter.type === 'checkbox' || filter.type === 'radio') {
      const option = filter.options?.find(o => o.value === String(value));
      return option ? option.label : String(value);
    }

    return `${filter.name}: ${value}`;
  }
</script>

<div class={`product-filters ${hostClass}`} {...restProps}>
  <div class="border-b border-gray-200 pb-4 mb-4">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-medium text-gray-900 flex items-center">
        <FilterIcon class="h-5 w-5 mr-2" />
        Filters
      </h3>
      
      {#if Object.keys(appliedFilterValues).length > 0}
        <button
          type="button"
          class="text-sm font-medium text-blue-600 hover:text-blue-500"
          onclick={clearAllFilters}
        >
          Clear all
        </button>
      {/if}
    </div>
  </div>
  
  {#if showAppliedFilters && Object.keys(appliedFilterValues).length > 0}
    <div class={`flex flex-wrap gap-2 mb-4 p-3 bg-gray-50 rounded-lg ${appliedFiltersClass}`}>
      {#each Object.entries(appliedFilterValues) as [filterId, value]}
        {#if isStringArrayValue(value)}
          {#each value as val}
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {getActiveFilterLabel(filterId, val)}
              <button
                type="button"
                class="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-800 hover:bg-blue-200 focus:outline-none"
                aria-label={`Remove ${val} filter`}
                onclick={() => removeFilter(filterId, val)}
              >
                <X class="h-3 w-3" />
              </button>
            </span>
          {/each}
        {:else}
          <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {getActiveFilterLabel(filterId, value)}
            <button
              type="button"
              class="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center text-blue-800 hover:bg-blue-200 focus:outline-none"
              aria-label={`Remove ${value} filter`}
              onclick={() => removeFilter(filterId, value)}
            >
              <X class="h-3 w-3" />
            </button>
          </span>
        {/if}
      {/each}
    </div>
  {/if}
  
  <div class="space-y-5">
    {#each filters as filter}
      <div class={`border-b border-gray-200 pb-4 ${sectionClass}`}>
        <h4 class={`flex justify-between items-center ${headerClass}`}>
          <button
            type="button"
            class="flex items-center text-sm font-medium text-gray-900 w-full justify-between"
            onclick={() => toggleSection(filter.id)}
            aria-expanded={expandedSections[filter.id]}
          >
            <span>{filter.name}</span>
            <ChevronDown 
              class={`h-5 w-5 text-gray-400 transition-transform ${
                expandedSections[filter.id] ? 'transform rotate-180' : ''
              }`} 
            />
          </button>
        </h4>
        
        {#if expandedSections[filter.id]}
          <div class={`mt-4 space-y-3 ${contentClass}`}>
            {#if filter.type === 'checkbox' || filter.type === 'radio'}
              <div class="space-y-3">
                {#each filter.options as option}
                  <div class="flex items-center">
                    {#if filter.type === 'checkbox'}
                      <input
                        type="checkbox"
                        id={`filter-${filter.id}-${option.value}`}
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        checked={isFilterActive(filter.id, option.value)}
                        onchange={(e) => handleCheckboxChange(filter.id, option.value, (e.target as HTMLInputElement).checked)}
                      />
                    {:else}
                      <input
                        type="radio"
                        id={`filter-${filter.id}-${option.value}`}
                        name={`filter-${filter.id}`}
                        class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        checked={isFilterActive(filter.id, option.value)}
                        onchange={(e) => handleRadioChange(filter.id, option.value)}
                      />
                    {/if}
                    <label for={`filter-${filter.id}-${option.value}`} class="ml-3 text-sm text-gray-600">
                      <span class="flex justify-between w-full">
                        <span>{option.label}</span>
                        {#if option.count !== undefined}
                          <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {option.count}
                          </span>
                        {/if}
                      </span>
                    </label>
                  </div>
                {/each}
              </div>
            {:else if filter.type === 'range' && filter.min !== undefined && filter.max !== undefined}
              <RangeSlider
                id={`product-filter-range-${filter.id}`}
                min={filter.min}
                max={filter.max}
                step={filter.step || 1}
                range
                value={isRangeValue(appliedFilterValues[filter.id]) && Array.isArray(appliedFilterValues[filter.id])
                  ? appliedFilterValues[filter.id] as [number, number]
                  : [filter.min ?? 0, filter.max ?? 0]}
                onchange={(event: CustomEvent<[number, number]>) => {
                  // Handle RangeSlider change - e.detail should be the new range as [min, max]
                  const e = event as CustomEvent<[number, number]>;
                  if (e && e.detail && Array.isArray(e.detail) && e.detail.length === 2) {
                    handleRangeChange(filter.id, e.detail);
                  }
                }}
              />
              <div class="flex justify-between text-xs text-gray-500">
                <span>
                  {(() => {
                    const filterValue = appliedFilterValues[filter.id];
                    if (filterValue && isStringArrayValue(filterValue)) {
                      return filter.min;
                    } else if (Array.isArray(filterValue) && filterValue.length === 2) {
                      return (filterValue as [number, number])[0];
                    } else {
                      return filter.min;
                    }
                  })()}
                </span>
                <span>
                  {(() => {
                    const filterValue = appliedFilterValues[filter.id];
                    if (filterValue && isStringArrayValue(filterValue)) {
                      return filter.max;
                    } else if (Array.isArray(filterValue) && filterValue.length === 2) {
                      return (filterValue as [number, number])[1];
                    } else {
                      return filter.max;
                    }
                  })()}
                </span>
              </div>
            {/if}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
