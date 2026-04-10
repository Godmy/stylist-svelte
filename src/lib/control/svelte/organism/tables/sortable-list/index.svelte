<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const GripVertical = 'grip-vertical';
const MoreHorizontal = 'more-horizontal';

  import { SortableListStyleManager } from '$stylist';
  import type { SortableListProps } from '$stylist/control/interface/component/table-controls/other';
  import { createSortableListState } from '$stylist/control/function/state/sortable-list';

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

  const state = createSortableListState({
    items,
    class: className,
    onItemsChange,
    onItemAction,
    disabled,
    showHandle,
    showActions,
    variant,
    ...restProps
  });
</script>

<div class={SortableListStyleManager.root(className)} {...restProps}>
  <div class="space-y-2" role="list">
    {#each items as item, index}
      <div
        role="listitem"
        draggable={!disabled}
        class={`border rounded-md ${variant === 'compact' ? 'p-2' : 'p-3'} ${state.overIndex === index ? 'border-[var(--color-primary-500)]' : 'border-[var(--color-border-primary)]'}`}
        ondragstart={() => state.start(item)}
        ondragover={(e) => { e.preventDefault(); state.handleDragOver(index); }}
        ondrop={() => state.drop(index)}
        ondragend={() => state.endDrag()}
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





