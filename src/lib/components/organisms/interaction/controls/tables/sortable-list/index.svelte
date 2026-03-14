<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const GripVertical = 'grip-vertical';
const MoreHorizontal = 'more-horizontal';

  import { SortableListStyleManager } from '$stylist/design-system/styles';
  import type { SortableListProps } from '$stylist/design-system/contracts/interaction/table-controls';
  import type { SortableListItem } from '$stylist/design-system/contracts/interaction/table-controls';

  let {
    items = [],
    class: className = '',
    onItemsChange,
    onItemAction,
    disabled = false,
    showHandle = true,
    showActions = true,
    variant = 'card',
    ...restProps
  }: SortableListProps = $props();

  let dragged: SortableListItem | null = $state(null);
  let overIndex = $state<number | null>(null);

  function start(item: SortableListItem): void { if (!disabled) dragged = item; }
  function drop(index: number): void {
    if (!dragged) return;
    const next = [...items];
    const from = next.findIndex((x) => x.id === dragged?.id);
    const [moved] = next.splice(from, 1);
    next.splice(index, 0, moved);
    onItemsChange?.(next);
    dragged = null;
    overIndex = null;
  }
</script>

<div class={SortableListStyleManager.root(className)} {...restProps}>
  <div class="space-y-2" role="list">
    {#each items as item, index}
      <div
        role="listitem"
        draggable={!disabled}
        class={`border rounded-md ${variant === 'compact' ? 'p-2' : 'p-3'} ${overIndex === index ? 'border-[var(--color-primary-500)]' : 'border-[var(--color-border-primary)]'}`}
        ondragstart={() => start(item)}
        ondragover={(e) => { e.preventDefault(); overIndex = index; }}
        ondrop={() => drop(index)}
        ondragend={() => { dragged = null; overIndex = null; }}
      >
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            {#if showHandle}<BaseIcon name={GripVertical} class="h-4 w-4 text-[var(--color-text-tertiary)]" />{/if}
            <div>
              <div class="font-medium text-sm">{item.title}</div>
              {#if item.description}<div class="text-xs text-[var(--color-text-secondary)]">{item.description}</div>{/if}
            </div>
          </div>
          {#if showActions}
            <button type="button" onclick={() => onItemAction?.(item, 'menu')}><BaseIcon name={MoreHorizontal} class="h-4 w-4 text-[var(--color-text-secondary)]" /></button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>





