<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const ChevronDown = 'chevron-down';
const ChevronUp = 'chevron-up';
const ChevronsUpDown = 'chevrons-up-down';

  import { ColumnManagerStyleManager } from '$stylist';
  import type { SlotColumnManager as ColumnManagerProps } from '$stylist/control/interface/slot/column-manager';
  import { createColumnManagerState } from '$stylist/control/function/state/column-manager';

  let { columns = [], onColumnsChange, class: className = '', ...restProps }: ColumnManagerProps = $props();
  const state = createColumnManagerState({ columns, onColumnsChange, class: className, ...restProps });
</script>

<div class={ColumnManagerStyleManager.root(className)} {...restProps}>
  <div class="flex items-center justify-between mb-3">
    <h3 class="font-medium">Columns</h3>
    <button type="button" class="text-sm" onclick={() => state.reset()}>Reset</button>
  </div>
  <div class="border rounded divide-y">
    {#each state.localColumns as column, index}
      <div class="p-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <BaseIcon name={ChevronsUpDown} class="h-4 w-4 text-[var(--color-text-tertiary)]" />
          <input type="checkbox" checked={column.visible} onchange={() => state.toggle(index)} />
          <span>{column.header}</span>
        </div>
        <div class="flex gap-1">
          <button type="button" disabled={index === 0} onclick={() => state.move(index, index - 1)}><BaseIcon name={ChevronUp} class="h-4 w-4" /></button>
          <button type="button" disabled={index === state.localColumns.length - 1} onclick={() => state.move(index, index + 1)}><BaseIcon name={ChevronDown} class="h-4 w-4" /></button>
        </div>
      </div>
    {/each}
  </div>
</div>





