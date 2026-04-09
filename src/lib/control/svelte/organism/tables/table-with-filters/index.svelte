<script lang="ts">
  import { createTableWithFiltersState } from '$stylist/control/function/state/table-with-filters';
  import type { TableWithFiltersProps } from '$stylist/control/interface/component/table-extended/other';

  let { data = [], columns = [], class: className = '', ...restProps }: TableWithFiltersProps = $props();
  const state = createTableWithFiltersState({ data, columns, class: className });
</script>

<div class={state.rootClass} {...restProps}>
  <div class="border rounded-lg overflow-hidden">
    <table class="min-w-full">
      <thead class="bg-[var(--color-background-secondary)]"><tr>{#each columns as c}<th class="px-3 py-2 text-left text-xs uppercase">{c}<input class="mt-1 w-full border rounded px-2 py-1" value={state.filters[c] ?? ''} oninput={(e)=>state.updateFilter(c, (e.target as HTMLInputElement).value)} /></th>{/each}</tr></thead>
      <tbody>{#each state.filtered as row, i}<tr class={i%2?'bg-[var(--color-background-secondary)]':''}>{#each columns as c}<td class="px-3 py-2 border-t text-sm">{(row as Record<string,unknown>)[c]}</td>{/each}</tr>{/each}</tbody>
    </table>
  </div>
</div>





