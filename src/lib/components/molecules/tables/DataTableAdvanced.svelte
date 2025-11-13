<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { ChevronUp, ChevronDown, ChevronsUpDown, Search, Download, Settings } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Input from '../../atoms/input/base/Input.svelte';

  type SortDirection = 'asc' | 'desc' | null;

  type ColumnDefinition<T> = {
    key: keyof T;
    header: string;
    sortable?: boolean;
    filterable?: boolean;
    renderCell?: (item: T) => any; // Using 'any' to avoid Snippet type issues in Svelte 5
    width?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props<T> = RestProps & {
    data: T[];
    columns: ColumnDefinition<T>[];
    title?: string;
    searchPlaceholder?: string;
    showSearch?: boolean;
    showFilters?: boolean;
    showExport?: boolean;
    pageSizeOptions?: number[];
    defaultPageSize?: number;
    class?: string;
    tableClass?: string;
    headerClass?: string;
    bodyClass?: string;
    rowClass?: string;
    cellClass?: string;
    onExport?: () => void;
    onRowClick?: (item: T) => void;
    loading?: boolean;
  };

  let {
    data = [],
    columns = [],
    title,
    searchPlaceholder = 'Search...',
    showSearch = true,
    showFilters = true,
    showExport = true,
    pageSizeOptions = [10, 25, 50, 100],
    defaultPageSize = 10,
    class: hostClass = '',
    tableClass = '',
    headerClass = '',
    bodyClass = '',
    rowClass = '',
    cellClass = '',
    onExport,
    onRowClick,
    loading = false,
    ...restProps
  }: Props<any> = $props();

  let currentPage = $state(1);
  let pageSize = $state(defaultPageSize);
  let searchTerm = $state('');
  let sortKey: string | null = $state(null);
  let sortDirection: SortDirection = $state(null);
  let activeFilters: Record<string, any> = $state({});

  let filteredData = $derived.by<any[]>(() => getFilteredData());
  let totalPages = $derived.by(() => Math.max(1, Math.ceil(filteredData.length / Math.max(pageSize, 1))));
  let paginatedData = $derived.by<any[]>(() => {
    const size = Math.max(pageSize, 1);
    const start = (currentPage - 1) * size;
    const end = start + size;
    return filteredData.slice(start, end);
  });
  let visiblePages = $derived.by<Array<number | '...'>>(() => buildVisiblePages(totalPages, currentPage));

  $effect(() => {
    const maxPage = Math.max(totalPages, 1);
    if (currentPage > maxPage) {
      currentPage = maxPage;
    }
  });

  function getFilteredData() {
    let result = [...data];

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      result = result.filter((item) =>
        Object.values(item ?? {}).some((val) => String(val ?? '').toLowerCase().includes(lowerSearch))
      );
    }

    for (const [key, value] of Object.entries(activeFilters)) {
      if (value !== undefined && value !== null && value !== '') {
        result = result.filter((item) => {
          const typedItem = item as Record<string, unknown>;
          const itemValue = typedItem?.[key];

          if (value && typeof value === 'object' && 'min' in value && 'max' in value) {
            const range = value as { min: number; max: number };
            const numericValue = Number(itemValue);
            return !Number.isNaN(numericValue) && numericValue >= range.min && numericValue <= range.max;
          }

          return String(itemValue ?? '').toLowerCase().includes(String(value).toLowerCase());
        });
      }
    }

    const activeSortKey = sortKey;
    if (activeSortKey && sortDirection) {
      const direction = sortDirection === 'asc' ? 1 : -1;
      result.sort((a, b) => {
        const aRecord = a as Record<string, unknown>;
        const bRecord = b as Record<string, unknown>;
        const aVal = aRecord?.[activeSortKey];
        const bVal = bRecord?.[activeSortKey];

        if (aVal === bVal) return 0;
        if (aVal == null) return 1;
        if (bVal == null) return -1;

        if (aVal < bVal) return -1 * direction;
        if (aVal > bVal) return 1 * direction;
        return 0;
      });
    }

    return result;
  }

  function buildVisiblePages(total: number, current: number): Array<number | '...'> {
    if (total <= 1) {
      return [1];
    }

    if (total <= 7) {
      return Array.from({ length: total }, (_, index) => index + 1);
    }

    const delta = 2;
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);
    const pages: Array<number | '...'> = [1];

    if (left > 2) {
      pages.push('...');
    }

    for (let page = left; page <= right; page += 1) {
      pages.push(page);
    }

    if (right < total - 1) {
      pages.push('...');
    }

    pages.push(total);
    return pages;
  }

  function handleSort(key: string) {
    if (sortKey === key) {
      // Cycle: asc -> desc -> null
      if (sortDirection === 'asc') {
        sortDirection = 'desc';
      } else if (sortDirection === 'desc') {
        sortDirection = null;
        sortKey = null;
      } else {
        sortDirection = 'asc';
      }
    } else {
      sortKey = key;
      sortDirection = 'asc';
    }
  }

  function handleFilterChange(columnKey: string, value: any) {
    activeFilters = { ...activeFilters, [columnKey]: value };
    currentPage = 1; // Reset to first page when filter changes
  }

  function handleExport() {
    onExport?.();
  }

  function handleRowClick(item: any) {
    onRowClick?.(item);
  }

  function handleSearchInput(e: Event) {
    const target = e.target as HTMLInputElement;
    searchTerm = target.value;
    currentPage = 1; // Reset to first page when search changes
  }

  function getSortIcon(key: string) {
    if (sortKey !== key) return ChevronsUpDown;
    if (sortDirection === 'asc') return ChevronUp;
    if (sortDirection === 'desc') return ChevronDown;
    return ChevronsUpDown;
  }

  // Pagination logic handled via buildVisiblePages helper
</script>

<div class={`data-table-advanced ${hostClass}`} {...restProps}>
  <!-- Table header with controls -->
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
    {#if title}
      <h2 class="text-xl font-semibold text-gray-800">{title}</h2>
    {/if}

    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      {#if showSearch}
        <div class="relative flex-1 sm:flex-none min-w-[200px]">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder={searchPlaceholder}
            value={searchTerm}
            oninput={handleSearchInput}
          />
        </div>
      {/if}

      {#if showExport}
        <Button variant="secondary" onclick={handleExport}>
          <Download class="h-4 w-4 mr-2" />
          Export
        </Button>
      {/if}

      <select
        class="ml-4 rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={pageSize.toString()}
        onchange={(e) => {
          pageSize = parseInt((e.target as HTMLSelectElement).value, 10);
          currentPage = 1;
        }}
      >
        {#each pageSizeOptions as option}
          <option value={option}>{option} / page</option>
        {/each}
      </select>
    </div>
  </div>

  <!-- Table -->
  <div class="overflow-x-auto border border-gray-200 rounded-lg">
    {#if loading}
      <div class="flex justify-center items-center p-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    {:else}
      <table class={`min-w-full divide-y divide-gray-200 ${tableClass}`}>
        <thead class="bg-gray-50">
          <tr>
            {#each columns as column}
              <th 
                scope="col" 
                class={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${headerClass} ${
                  column.sortable ? 'cursor-pointer hover:bg-gray-100' : ''
                }`}
                style={column.width ? `width: ${column.width}` : ''}
                onclick={() => column.sortable && handleSort(String(column.key))}
              >
                <div class="flex items-center">
                  <span>{column.header}</span>
                  {#if column.sortable}
                    {@const SortIcon = getSortIcon(String(column.key))}
                    <SortIcon class="ml-1 h-4 w-4" />
                  {/if}
                </div>
                
                {#if column.filterable && showFilters}
                  <div class="mt-1">
                    <input
                      type="text"
                      class="block w-full px-2 py-1 text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder={`Filter ${column.header}...`}
                      oninput={(e) => handleFilterChange(String(column.key), (e.target as HTMLInputElement).value)}
                    />
                  </div>
                {/if}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class={`bg-white divide-y divide-gray-200 ${bodyClass}`}>
          {#if paginatedData.length === 0}
            <tr>
              <td colspan={columns.length} class="px-6 py-4 text-center text-sm text-gray-500">
                No data found
              </td>
            </tr>
          {:else}
            {#each paginatedData as item, index}
              <tr 
                class={`hover:bg-gray-50 ${rowClass}`}
                onclick={() => handleRowClick(item)}
              >
                {#each columns as column}
                  <td class={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 ${cellClass}`}>
                    {#if column.renderCell}
                      {@render column.renderCell(item)}
                    {:else}
                      {item[column.key]}
                    {/if}
                  </td>
                {/each}
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    {/if}
  </div>

  <!-- Pagination -->
  {#if totalPages > 1}
    <div class="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-4">
      <div class="flex flex-1 justify-between sm:hidden">
        <button
          class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          disabled={currentPage === 1}
          onclick={() => currentPage--}
        >
          Previous
        </button>
        <button
          class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onclick={() => currentPage++}
        >
          Next
        </button>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing <span class="font-medium">{(currentPage - 1) * pageSize + 1}</span> to 
            <span class="font-medium">{Math.min(currentPage * pageSize, filteredData.length)}</span> of 
            <span class="font-medium">{filteredData.length}</span> results
          </p>
        </div>
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              disabled={currentPage === 1}
              onclick={() => currentPage--}
            >
              <span>Previous</span>
            </button>
            
            {#each visiblePages as page}
              {#if page === '...'}
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
                  ...
                </span>
              {:else}
                <button
                  class={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === page 
                      ? 'z-10 bg-blue-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600' 
                      : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  }`}
                  onclick={() => currentPage = page as number}
                >
                  {page}
                </button>
              {/if}
            {/each}
            
            <button
              class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              disabled={currentPage === totalPages}
              onclick={() => currentPage++}
            >
              <span>Next</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  {/if}
</div>
