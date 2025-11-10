<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronUp, ChevronDown } from 'lucide-svelte';

  type Column = {
    key: string;
    title: string;
    sortable?: boolean;
    cellClass?: string;
    headerClass?: string;
    render?: (value: any, item: any) => string;
  };

  type SortConfig = {
    key: string | null;
    direction: 'asc' | 'desc';
  };

  type Props = {
    data: any[];
    columns: Column[];
    striped?: boolean;
    hoverable?: boolean;
    maxHeight?: string;
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
    maxHeight = 'none',
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

  function getSortedData() {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
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

  function getSortIcon(columnKey: string) {
    if (sortConfig.key !== columnKey) return null;
    
    return sortConfig.direction === 'asc' 
      ? ChevronUp 
      : ChevronDown;
  }
</script>

<div class={`overflow-x-auto ${className}`} style={maxHeight !== 'none' ? `max-height: ${maxHeight}` : ''} {...restProps}>
  <table class={`min-w-full divide-y divide-gray-200 ${tableClass}`}>
    <thead class={`bg-gray-50 ${theadClass}`}>
      <tr>
        {#each columns as column}
          <th
            scope="col"
            class={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer ${
              column.sortable ? 'hover:bg-gray-100' : ''
            } ${column.headerClass || thClass}`}
            onclick={() => column.sortable && handleSort(column.key)}
            role="button"
            tabindex="0"
            onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && column.sortable && handleSort(column.key)}
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
    <tbody class={`bg-white divide-y divide-gray-200 ${tbodyClass} ${maxHeight !== 'none' ? 'overflow-y-auto' : ''}`}>
      {#each getSortedData() as item, index}
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