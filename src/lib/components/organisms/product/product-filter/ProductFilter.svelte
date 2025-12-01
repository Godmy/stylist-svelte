<script lang="ts">
  let {
    filters = [],
    selectedFilters = {},
    onFilterChange = (filterId: string, value: any) => {},
    class: className = ''
  } = $props<{
    filters: Array<{
      id: string;
      label: string;
      type: 'checkbox' | 'radio' | 'range' | 'select';
      options?: Array<{ value: string; label: string }>;
      min?: number;
      max?: number;
      step?: number;
    }>;
    selectedFilters?: Record<string, any>;
    onFilterChange?: (filterId: string, value: any) => void;
    class?: string;
  }>();

  let localSelectedFilters = $state({ ...selectedFilters });

  $effect(() => {
    localSelectedFilters = { ...selectedFilters };
  });

  const updateFilter = (filterId: string, value: any) => {
    localSelectedFilters[filterId] = value;
    onFilterChange(filterId, value);
  };
</script>

<div class={`bg-white p-4 rounded-lg shadow ${className}`}>
  <h3 class="font-bold text-lg mb-4">Filters</h3>
  <div class="space-y-4">
    {#each filters as filter}
      <div>
        <h4 class="font-medium mb-2">{filter.label}</h4>
        
        {#if filter.type === 'checkbox' || filter.type === 'radio'}
          <div class="space-y-2">
            {#each filter.options as option}
              <label class="flex items-center">
                <input
                  type={filter.type}
                  name={filter.type === 'radio' ? filter.id : undefined}
                  checked={filter.type === 'radio' 
                    ? localSelectedFilters[filter.id] === option.value
                    : localSelectedFilters[filter.id]?.includes(option.value)
                  }
                  onchange={() => {
                    if (filter.type === 'radio') {
                      updateFilter(filter.id, option.value);
                    } else {
                      const currentValues = localSelectedFilters[filter.id] || [];
                      const index = currentValues.indexOf(option.value);
                      if (index > -1) {
                        updateFilter(filter.id, [
                          ...currentValues.slice(0, index),
                          ...currentValues.slice(index + 1)
                        ]);
                      } else {
                        updateFilter(filter.id, [...currentValues, option.value]);
                      }
                    }
                  }}
                  class="mr-2"
                />
                {option.label}
              </label>
            {/each}
          </div>
        {:else if filter.type === 'range'}
          <div>
            <input
              type="range"
              min={filter.min}
              max={filter.max}
              step={filter.step}
              value={localSelectedFilters[filter.id] || filter.min}
              oninput={(e) => updateFilter(filter.id, parseInt((e.target as HTMLInputElement).value))}
              class="w-full"
            />
            <div class="flex justify-between text-sm text-gray-600">
              <span>{filter.min}</span>
              <span>{localSelectedFilters[filter.id] || filter.min}</span>
              <span>{filter.max}</span>
            </div>
          </div>
        {:else if filter.type === 'select'}
          <select
            value={localSelectedFilters[filter.id] || ''}
            onchange={(e) => updateFilter(filter.id, (e.target as HTMLSelectElement).value)}
            class="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All {filter.label}</option>
            {#each filter.options as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        {/if}
      </div>
    {/each}
  </div>
</div>