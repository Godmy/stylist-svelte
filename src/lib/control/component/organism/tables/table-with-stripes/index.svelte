<script lang="ts">
  import type { SlotTableWithStripes as TableWithStripesProps } from '$stylist/control/interface/slot/table-with-stripes';
  import { createTableWithStripesState } from '$stylist/control/function/state/table-with-stripes';

  let props: TableWithStripesProps = $props();
  const state = createTableWithStripesState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      data: _data,
      columns: _columns,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={state.containerClass} {...restProps}>
  <div class="border rounded-lg overflow-hidden">
    <table class="min-w-full">
      <thead class="bg-[var(--color-background-secondary)]"><tr>{#each state.columns as c}<th class="px-3 py-2 text-left text-xs uppercase">{c}</th>{/each}</tr></thead>
      <tbody>{#each state.data as row, i}<tr class={state.getRowClass(i)}>{#each state.columns as c}<td class="px-3 py-2 border-t text-sm">{(row as Record<string,unknown>)[c]}</td>{/each}</tr>{/each}</tbody>
    </table>
  </div>
</div>






