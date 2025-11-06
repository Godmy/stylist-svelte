<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-svelte';

  export type Column<T> = {
    key: string;
    header: string;
    sortable?: boolean;
    filterable?: boolean;
    width?: string;
    render?: (item: T) => string | number | null | undefined;
  };

  type RestProps = Omit<HTMLAttributes<HTMLTableElement>, 'class'>;

  type Props<T> = RestProps & {
    data: T[];
    columns: Column<T>[];
    caption?: string;
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    pageSize?: number;
    enableFiltering?: boolean;
    enableSorting?: boolean;
    enablePagination?: boolean;
    class?: string;
  };

  let {
    data,
    columns,
    caption,
    striped = false,
    bordered = false,
    hoverable = false,
    pageSize = 10,
    enableFiltering = false,
    enableSorting = false,
    enablePagination = false,
    class: hostClass = '',
    ...restProps
  }: Props<any> = $props();

  let currentPage = $state(1);
  let sortKey = $state<string | null>(null);
  let sortDirection = $state<'asc' | 'desc'>('asc');
  let filters = $state<Record<string, string>>({});

  function getNestedValue(row: any, key: string) {
    return key.split('.').reduce((value, segment) => value?.[segment], row);
  }

  function applySort(rows: any[]) {
    const key = sortKey;
    if (!enableSorting || !key) return rows;

    const sorted = [...rows];
    sorted.sort((a, b) => {
      const aValue = getNestedValue(a, key);
      const bValue = getNestedValue(b, key);

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
        return sortDirection === 'asc' ? comparison : -comparison;
      }

      const numericA = Number(aValue) || 0;
      const numericB = Number(bValue) || 0;
      const comparison = numericA - numericB;
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return sorted;
  }

  const filteredRows = $derived(() => {
    let rows = [...data];

    if (enableFiltering) {
      for (const [key, value] of Object.entries(filters)) {
        if (!value) continue;
        const lowered = value.toLowerCase();
        rows = rows.filter((row) => {
          const cell = getNestedValue(row, key);
          return String(cell ?? '').toLowerCase().includes(lowered);
        });
      }
    }

    return applySort(rows);
  });

  const totalPages = $derived(() => {
    if (!enablePagination) return 1;
    return Math.max(1, Math.ceil(filteredRows().length / pageSize));
  });

  const pageRows = $derived(() => {
    if (!enablePagination) return filteredRows();
    const start = (currentPage - 1) * pageSize;
    return filteredRows().slice(start, start + pageSize);
  });

  $effect(() => {
    if (currentPage > totalPages()) {
      currentPage = totalPages();
    }
  });

  function handleSort(key: string) {
    if (!enableSorting) return;
    if (sortKey === key) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = key;
      sortDirection = 'asc';
    }
  }

  function handleFilterChange(key: string, value: string) {
    if (!enableFiltering) return;
    filters = { ...filters, [key]: value };
    currentPage = 1;
  }

  function handlePageChange(page: number) {
    if (!enablePagination) return;
    if (page >= 1 && page <= totalPages()) {
      currentPage = page;
    }
  }

  function formatCell(column: Column<any>, row: any) {
    if (column.render) {
      return column.render(row) ?? '';
    }
    return getNestedValue(row, column.key) ?? '';
  }

  function computeTableClasses() {
    return [
      'min-w-full',
      'divide-y',
      'divide-gray-200',
      bordered ? 'border border-gray-200' : 'border-0',
      striped ? 'table-striped' : ''
    ]
      .filter(Boolean)
      .join(' ');
  }

  function pageNumbers() {
    if (!enablePagination) return [];

    const pages = totalPages();
    const delta = 2;
    const range: Array<number | '...'> = [];

    range.push(1);

    const start = Math.max(2, currentPage - delta);
    const end = Math.min(pages - 1, currentPage + delta);

    if (start > 2) {
      range.push('...');
    }

    for (let i = start; i <= end; i += 1) {
      range.push(i);
    }

    if (end < pages - 1) {
      range.push('...');
    }

    if (pages > 1) {
      range.push(pages);
    }

    return range;
  }
</script>

<div class={`space-y-3 ${hostClass}`}>
  {#if caption}
    <header class="flex items-center justify-between">
      <h2 class="text-base font-semibold text-gray-900">{caption}</h2>
      {#if enableFiltering}
        <p class="text-sm text-gray-500">
          Отфильтровано записей: {filteredRows().length}
        </p>
      {/if}
    </header>
  {/if}

  {#if enableFiltering}
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#each columns as column}
        {#if column.filterable}
          <label class="space-y-1 text-sm">
            <span class="font-medium text-gray-700">{column.header}</span>
            <input
              type="text"
              class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={`Фильтр по ${column.header}`}
              value={filters[column.key] ?? ''}
              oninput={(event) => handleFilterChange(column.key, (event.currentTarget as HTMLInputElement).value)}
            />
          </label>
        {/if}
      {/each}
    </div>
  {/if}

  <div class="overflow-x-auto rounded-lg border border-gray-200 bg-white">
    <table class={computeTableClasses()} {...restProps}>
      <thead class="bg-gray-50">
        <tr>
          {#each columns as column}
            <th
              scope="col"
              class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
              style={column.width ? `width: ${column.width}` : undefined}
            >
              <span class="inline-flex items-center gap-1">
                {column.header}
                {#if enableSorting && column.sortable}
                  <button
                    type="button"
                    class="text-gray-400 hover:text-gray-600 focus:outline-none"
                    onclick={() => handleSort(column.key)}
                    aria-label={`Сортировать по ${column.header}`}
                  >
                    {#if sortKey === column.key}
                      {#if sortDirection === 'asc'}
                        <ArrowUp class="h-3.5 w-3.5" />
                      {:else}
                        <ArrowDown class="h-3.5 w-3.5" />
                      {/if}
                    {:else}
                      <ArrowUpDown class="h-3.5 w-3.5" />
                    {/if}
                  </button>
                {/if}
              </span>
            </th>
          {/each}
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-200">
        {#if pageRows().length === 0}
          <tr>
            <td colspan={columns.length} class="px-4 py-6 text-center text-sm text-gray-500">
              Нет данных для отображения
            </td>
          </tr>
        {:else}
          {#each pageRows() as row, index (row.id ?? `${index}`)}
            <tr class={striped && index % 2 ? 'bg-gray-50' : hoverable ? 'hover:bg-gray-50 transition-colors' : ''}>
              {#each columns as column}
                <td class="px-4 py-3 text-sm text-gray-700">
                  {formatCell(column, row)}
                </td>
              {/each}
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>

  {#if enablePagination && totalPages() > 1}
    <nav class="flex items-center justify-between">
      <div class="text-sm text-gray-600">
        Страница {currentPage} из {totalPages()}
      </div>
      <div class="inline-flex items-center gap-1">
        <button
          type="button"
          class="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 focus:outline-none disabled:opacity-50"
          disabled={currentPage <= 1}
          onclick={() => handlePageChange(currentPage - 1)}
        >
          Назад
        </button>
        {#each pageNumbers() as page, idx}
          {#if page === '...'}
            <span class="px-2 text-sm text-gray-400" aria-hidden="true">…</span>
          {:else}
            <button
              type="button"
              class={`rounded-md px-2 py-1 text-sm focus:outline-none ${currentPage === page ? 'bg-indigo-600 text-white' : 'border border-gray-300 bg-white text-gray-600 hover:bg-gray-100'}`}
              onclick={() => handlePageChange(page)}
            >
              {page}
            </button>
          {/if}
        {/each}
        <button
          type="button"
          class="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 focus:outline-none disabled:opacity-50"
          disabled={currentPage >= totalPages()}
          onclick={() => handlePageChange(currentPage + 1)}
        >
          Вперёд
        </button>
      </div>
    </nav>
  {/if}
</div>
