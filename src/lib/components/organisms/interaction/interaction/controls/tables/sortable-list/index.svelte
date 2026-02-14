<script lang="ts">
  import { GripVertical, MoreHorizontal } from 'lucide-svelte';
  import { SortableListStyleManager } from '$stylist/design-system/styles';
  import type { SortableListProps, SortableListItem } from '$stylist/design-system/props';

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
        class={`border rounded-md ${variant === 'compact' ? 'p-2' : 'p-3'} ${overIndex === index ? 'border-blue-500' : 'border-gray-200'}`}
        ondragstart={() => start(item)}
        ondragover={(e) => { e.preventDefault(); overIndex = index; }}
        ondrop={() => drop(index)}
        ondragend={() => { dragged = null; overIndex = null; }}
      >
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            {#if showHandle}<GripVertical class="h-4 w-4 text-gray-400" />{/if}
            <div>
              <div class="font-medium text-sm">{item.title}</div>
              {#if item.description}<div class="text-xs text-gray-500">{item.description}</div>{/if}
            </div>
          </div>
          {#if showActions}
            <button type="button" onclick={() => onItemAction?.(item, 'menu')}><MoreHorizontal class="h-4 w-4 text-gray-500" /></button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>

