<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { ChevronUp, ChevronDown, Filter } from 'lucide-svelte';
  import type { IColumn, FilterType } from './types';

  type SortConfig = {
    key: string | null;
    direction: 'asc' | 'desc';
  };

  type FilterConfig = {
    [key: string]: string;
  };

  type Props = {
    data: any[];
    columns: IColumn[];
    striped?: boolean;
    hoverable?: boolean;
    showFilters?: boolean;
    class?: string;
    tableClass?: string;
    theadClass?: string;
    tbodyClass?: string;
    trClass?: string;
    thClass?: string;
    tdClass?: string;
    onRowClick?: (item: any) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    data = [],
    columns = [],
    striped = true,
    hoverable = true,
    showFilters = true,
    class: className = '',
    tableClass = '',
    theadClass = '',
    tbodyClass = '',
    trClass = '',
    thClass = '',
    tdClass = '',
    onRowClick,
    ...restProps
  }: Props = $props();

  let sortConfig: SortConfig = $state({ key: null, direction: 'asc' });
  let filterConfig: FilterConfig = $state({});

  // Initialize filter config
  $effect(() => {
    const initialFilters: FilterConfig = {};
    columns.forEach(col => {
      if (col.filterable) {
        initialFilters[col.key] = '';
      }
    });
    filterConfig = initialFilters;
  });

  function handleSort(columnKey: string) {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;

    if (sortConfig.key === columnKey) {
      // Toggle direction if clicking the same column
      sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
    } else {
      // Set new column with ascending direction
      sortConfig.key = columnKey;
      sortConfig.direction = 'asc';
    }
  }

  function getSortIcon(columnKey: string) {
    if (sortConfig.key !== columnKey) return null;
    
    return sortConfig.direction === 'asc' 
      ? ChevronUp 
      : ChevronDown;
  }

  function handleFilterChange(columnKey: string, value: string) {
    filterConfig[columnKey] = value;
  }

  function getFilteredData() {
    let result = [...data];

    // Apply filters
    Object.entries(filterConfig).forEach(([key, value]) => {
      if (value) {
        result = result.filter(item => {
          const cellValue = item[key];
          if (cellValue === undefined || cellValue === null) return false;
          
          return String(cellValue).toLowerCase().includes(value.toLowerCase());
        });
      }
    });

    // Apply sorting
    if (sortConfig.key) {
      result = result.sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];

        // Handle different data types
        let comparison = 0;
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          comparison = aValue.localeCompare(bValue);
        } else if (typeof aValue === 'number' && typeof bValue === 'number') {
          comparison = aValue - bValue;
        } else {
          // Convert to strings and compare
          comparison = String(aValue).localeCompare(String(bValue));
        }

        return sortConfig.direction === 'asc' ? comparison : -comparison;
      });
    }

    return result;
  }
</script>

<div class={`overflow-x-auto ${className}`} {...restProps}>
  <!-- Filter Controls -->
  {#if showFilters}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
      {#each columns as column}
        {#if column.filterable}
          <div>
            {#if column.filterType === 'select' && column.filterOptions}
              <label for={`select-${column.key}`} class="block text-sm font-medium text-gray-700 mb-1">
                {column.title}
              </label>
              <select
                id={`select-${column.key}`}
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={filterConfig[column.key] || ''}
                onchange={(e) => handleFilterChange(column.key, (e.target as HTMLSelectElement).value)}
              >
                <option value="">All</option>
                {#each column.filterOptions as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
            {:else}
              <label for={`input-${column.key}`} class="block text-sm font-medium text-gray-700 mb-1">
                {column.title}
              </label>
              <input
                id={`input-${column.key}`}
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder={`Filter ${column.title}...`}
                value={filterConfig[column.key] || ''}
                oninput={(e) => handleFilterChange(column.key, (e.target as HTMLInputElement).value)}
              />
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  {/if}

  <table class={`min-w-full divide-y divide-gray-200 ${tableClass}`}>
    <thead class={`bg-gray-50 ${theadClass}`}>
      <tr>
        {#each columns as column}
          <th
            scope="col"
            class={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
              column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
            } ${column.headerClass || thClass}`}
            onclick={() => column.sortable && handleSort(column.key)}
          >
            <div class="flex items-center">
              <span>{column.title}</span>
              {#if column.sortable}
                {@const SortIcon = getSortIcon(column.key)}
                {#if SortIcon}
                  <span class="ml-1">
                    <SortIcon class="w-4 h-4" />
                  </span>
                {/if}
              {/if}
            </div>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody class={`bg-white divide-y divide-gray-200 ${tbodyClass}`}>
      {#each getFilteredData() as item, index}
        <tr 
          class={`{${
            striped && index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          } ${
            hoverable ? 'hover:bg-gray-100' : ''
          } ${trClass}`}
          onclick={() => onRowClick && onRowClick(item)}
        >
          {#each columns as column}
            <td class={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${column.cellClass || tdClass}`}>
              {#if column.render}
                {@html column.render(item[column.key], item)}
              {:else}
                {item[column.key]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>