<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const ChevronDown = 'chevron-down';
const ChevronUp = 'chevron-up';

  import { DataTableStyleManager } from '$stylist/design-system/styles';
  import type { DataTableProps } from '$stylist/design-system/contracts';

  let {
    data = [],
    columns = [],
    striped = true,
    hoverable = true,
    maxHeight = 'none',
    class: className = '',
    onRowClick,
    ...restProps
  }: DataTableProps<Record<string, unknown>> = $props();

  let sortKey = $state<string | null>(null);
  let sortDirection = $state<'asc' | 'desc'>('asc');

  function sort(columnKey: string): void {
    if (sortKey === columnKey) sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    else { sortKey = columnKey; sortDirection = 'asc'; }
  }

  const sortedData = $derived(
    sortKey
      ? [...data].sort((a, b) => {
          const av = a[sortKey as keyof typeof a];
          const bv = b[sortKey as keyof typeof b];
          const c = String(av ?? '').localeCompare(String(bv ?? ''));
          return sortDirection === 'asc' ? c : -c;
        })
      : data
  );
</script>

<div class={DataTableStyleManager.root(className)} style={maxHeight !== 'none' ? `max-height:${maxHeight}` : ''} {...restProps}>
  <table class="min-w-full border rounded-md overflow-hidden">
    <thead class="bg-[var(--color-background-secondary)]">
      <tr>
        {#each columns as column}
          <th class="text-left px-3 py-2 text-xs uppercase">
            <button type="button" class="flex items-center gap-1" onclick={() => column.sortable && sort(String(column.key))}>
              {column.title}
              {#if column.sortable && sortKey === String(column.key)}
                {#if sortDirection === 'asc'}<BaseIcon name={ChevronUp} class="h-3 w-3" />{:else}<BaseIcon name={ChevronDown} class="h-3 w-3" />{/if}
              {/if}
            </button>
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each sortedData as item, index}
        <tr class={`${striped && index % 2 === 1 ? 'bg-[var(--color-background-secondary)]' : ''} ${hoverable ? 'hover:bg-[var(--color-background-secondary)]' : ''}`} onclick={() => onRowClick?.(item)}>
          {#each columns as column}
            <td class="px-3 py-2 text-sm border-t">{item[column.key]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>





