<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const ChevronDown = 'chevron-down';
const ChevronUp = 'chevron-up';
const ChevronsUpDown = 'chevrons-up-down';

  import { ColumnManagerStyleManager } from '$stylist';
  import type { ColumnManagerProps } from '$stylist';

  let { columns = [], onColumnsChange, class: className = '', ...restProps }: ColumnManagerProps = $props();
  let localColumns = $state(columns.map((c) => ({ ...c })));
  $effect(() => { localColumns = columns.map((c) => ({ ...c })); });

  function emit(next: typeof localColumns): void { localColumns = next; onColumnsChange?.(next.map((c) => ({ ...c }))); }
  function toggle(index: number): void { emit(localColumns.map((c, i) => i === index ? { ...c, visible: !c.visible } : c)); }
  function move(from: number, to: number): void {
    const next = [...localColumns];
    const [m] = next.splice(from, 1);
    next.splice(to, 0, m);
    emit(next);
  }
</script>

<div class={ColumnManagerStyleManager.root(className)} {...restProps}>
  <div class="flex items-center justify-between mb-3">
    <h3 class="font-medium">Columns</h3>
    <button type="button" class="text-sm" onclick={() => emit(columns.map((c) => ({ ...c, visible: true })))}>Reset</button>
  </div>
  <div class="border rounded divide-y">
    {#each localColumns as column, index}
      <div class="p-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <BaseIcon name={ChevronsUpDown} class="h-4 w-4 text-[var(--color-text-tertiary)]" />
          <input type="checkbox" checked={column.visible} onchange={() => toggle(index)} />
          <span>{column.header}</span>
        </div>
        <div class="flex gap-1">
          <button type="button" disabled={index === 0} onclick={() => move(index, index - 1)}><BaseIcon name={ChevronUp} class="h-4 w-4" /></button>
          <button type="button" disabled={index === localColumns.length - 1} onclick={() => move(index, index + 1)}><BaseIcon name={ChevronDown} class="h-4 w-4" /></button>
        </div>
      </div>
    {/each}
  </div>
</div>





