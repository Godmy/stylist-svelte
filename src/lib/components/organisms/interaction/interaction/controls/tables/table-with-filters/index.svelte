<script lang="ts">
  import { TableExtendedStyleManager } from '$stylist/design-system/styles/interaction/table-extended';
  import type { TableWithFiltersProps } from '$stylist/design-system/props/interaction/table-extended';
  let { data = [], columns = [], class: className = '', ...restProps }: TableWithFiltersProps = $props();
  let filters = $state<Record<string,string>>({});
  const filtered = $derived(data.filter((row) => columns.every((c) => String((row as Record<string,unknown>)[c] ?? '').toLowerCase().includes((filters[c] ?? '').toLowerCase()))));
</script>
<div class={TableExtendedStyleManager.root('c-table-with-filters', className)} {...restProps}>
  <div class="border rounded-lg overflow-hidden">
    <table class="min-w-full">
      <thead class="bg-gray-50"><tr>{#each columns as c}<th class="px-3 py-2 text-left text-xs uppercase">{c}<input class="mt-1 w-full border rounded px-2 py-1" value={filters[c] ?? ''} oninput={(e)=>filters={...filters,[c]:(e.target as HTMLInputElement).value}} /></th>{/each}</tr></thead>
      <tbody>{#each filtered as row, i}<tr class={i%2?'bg-gray-50':''}>{#each columns as c}<td class="px-3 py-2 border-t text-sm">{(row as Record<string,unknown>)[c]}</td>{/each}</tr>{/each}</tbody>
    </table>
  </div>
</div>
