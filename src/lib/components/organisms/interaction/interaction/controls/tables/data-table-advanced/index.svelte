<script lang="ts">
  import { DataTableAdvancedStyleManager } from '$stylist/design-system/styles';
  import type { DataTableAdvancedProps } from '$stylist/design-system/props';

  let {
    data = [],
    columns = [],
    title = 'Advanced Data Table',
    searchPlaceholder = 'Search...',
    showSearch = true,
    showExport = true,
    pageSizeOptions = [10, 25, 50],
    defaultPageSize = 10,
    class: className = '',
    onExport,
    onRowClick,
    loading = false,
    ...restProps
  }: DataTableAdvancedProps<Record<string, unknown>> = $props();

  let searchTerm = $state('');
  let pageSize = $state(defaultPageSize);
  let currentPage = $state(1);

  const filtered = $derived(searchTerm ? data.filter((row) => Object.values(row).some((v) => String(v ?? '').toLowerCase().includes(searchTerm.toLowerCase()))) : data);
  const totalPages = $derived(Math.max(1, Math.ceil(filtered.length / pageSize)));
  const pageData = $derived(filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize));
</script>

<div class={DataTableAdvancedStyleManager.root(className)} {...restProps}>
  <div class="flex items-center justify-between gap-3 mb-3">
    <h3 class="text-lg font-semibold">{title}</h3>
    <div class="flex items-center gap-2">
      {#if showSearch}
        <input class="border rounded px-3 py-1" placeholder={searchPlaceholder} value={searchTerm} oninput={(e) => { searchTerm = (e.target as HTMLInputElement).value; currentPage = 1; }} />
      {/if}
      {#if showExport}<button class="px-3 py-1 border rounded" onclick={onExport}>Export</button>{/if}
      <select class="border rounded px-2 py-1" bind:value={pageSize}>
        {#each pageSizeOptions as option}<option value={option}>{option} / page</option>{/each}
      </select>
    </div>
  </div>

  <div class="overflow-x-auto border rounded-lg">
    {#if loading}
      <div class="p-6 text-center">Loading...</div>
    {:else}
      <table class="min-w-full">
        <thead class="bg-gray-50"><tr>{#each columns as c}<th class="text-left px-3 py-2 text-xs uppercase">{c.header}</th>{/each}</tr></thead>
        <tbody>
          {#if pageData.length === 0}
            <tr><td colspan={columns.length} class="px-3 py-4 text-center text-sm text-gray-500">No data</td></tr>
          {:else}
            {#each pageData as row}
              <tr class="border-t hover:bg-gray-50" onclick={() => onRowClick?.(row)}>
                {#each columns as c}
                  <td class="px-3 py-2 text-sm">{row[c.key]}</td>
                {/each}
              </tr>
            {/each}
          {/if}
        </tbody>
      </table>
    {/if}
  </div>

  <div class="mt-3 flex items-center justify-between text-sm">
    <span>Page {currentPage} of {totalPages}</span>
    <div class="flex gap-2">
      <button class="px-2 py-1 border rounded" disabled={currentPage <= 1} onclick={() => currentPage -= 1}>Prev</button>
      <button class="px-2 py-1 border rounded" disabled={currentPage >= totalPages} onclick={() => currentPage += 1}>Next</button>
    </div>
  </div>
</div>

