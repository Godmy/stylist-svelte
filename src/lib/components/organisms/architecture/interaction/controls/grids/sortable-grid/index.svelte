<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { GripVertical } from 'lucide-svelte';
  import { SortableGridStyleManager } from '$stylist/design-system/styles';
  import type { SortableGridProps, SortableGridItem, GridItem } from '$stylist/design-system/props';

  let {
    items = [],
    class: hostClass = '',
    itemClass = '',
    gridClass = '',
    onItemsChange,
    onItemDragStart,
    onItemDragEnd,
    disabled = false,
    cols = 3,
    gap = 'md',
    variant = 'card',
    size = 'md',
    ...restProps
  }: SortableGridProps & Omit<HTMLAttributes<HTMLDivElement>, 'class'> = $props();

  let draggedItem: SortableGridItem | null = $state(null);
  let draggedOverIndex: number | null = $state(null);
  let isDragging = $state(false);

  let gridColsClass = $derived({
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
    7: 'grid-cols-7',
    8: 'grid-cols-8',
    9: 'grid-cols-9',
    10: 'grid-cols-10',
    11: 'grid-cols-11',
    12: 'grid-cols-12'
  }[cols] || 'grid-cols-3');

  let gapClass = $derived({
    'sm': 'gap-2',
    'md': 'gap-4',
    'lg': 'gap-6'
  }[gap] || 'gap-4');

  function handleDragStart(e: DragEvent, item: GridItem, index: number) {
    if (disabled) return;

    e.dataTransfer?.setData('text/plain', item.id);
    draggedItem = item as SortableGridItem;
    isDragging = true;
    onItemDragStart?.(item as SortableGridItem);
  }

  function handleDragOver(e: DragEvent, index: number) {
    e.preventDefault();
    draggedOverIndex = index;
  }

  function handleDragLeave() {
    draggedOverIndex = null;
  }

  function handleDrop(e: DragEvent, dropIndex: number) {
    e.preventDefault();
    draggedOverIndex = null;

    if (!draggedItem) return;

    // Only reorder if dropping in a different position
    if (dropIndex !== items.findIndex(item => item.id === draggedItem!.id)) {
      const newItems = [...items];
      const dragIndex = newItems.findIndex(item => item.id === draggedItem!.id);

      // Remove item from original position
      const [removed] = newItems.splice(dragIndex, 1);

      // Adjust drop index if needed (since we removed an item)
      const adjustedDropIndex = dropIndex > dragIndex ? dropIndex - 1 : dropIndex;

      // Insert item at new position
      newItems.splice(adjustedDropIndex, 0, removed);

      items = newItems;
      onItemsChange?.(newItems);
    }

    handleDragEnd();
  }

  function handleDragEnd() {
    if (draggedItem) {
      onItemDragEnd?.(draggedItem as SortableGridItem);
    }
    draggedItem = null;
    isDragging = false;
  }

  function handleDragEndEvent(e: DragEvent) {
    handleDragEnd();
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(SortableGridStyleManager.getContainerClass(variant, size, disabled, hostClass));
  const gridClassComputed = $derived(SortableGridStyleManager.getGridClass(gridClass, gridColsClass, gapClass));
  const itemClassComputed = $derived(SortableGridStyleManager.getItemClass(variant, size, isDragging, draggedItem, itemClass));
  const itemDraggingClass = $derived(SortableGridStyleManager.getItemDraggingClass());
  const itemDragOverClass = $derived(SortableGridStyleManager.getItemDragOverClass());
  const itemContentClass = $derived(SortableGridStyleManager.getItemContentClass(variant));
  const itemTitleClass = $derived(SortableGridStyleManager.getItemTitleClass());
  const itemContentTextClass = $derived(SortableGridStyleManager.getItemContentTextClass());
  const gripIconClass = $derived(SortableGridStyleManager.getGripIconClass());
</script>

<div class={containerClass} {...restProps}>
  <div class={gridClassComputed}>
    {#each items as item, index}
      <div
        draggable={!disabled}
        role="gridcell"
        tabindex="0"
        class={itemClassComputed + (
          draggedOverIndex === index && draggedItem && draggedItem.id !== item.id
            ? ' ' + itemDragOverClass
            : ''
        )}
        ondragstart={(e) => handleDragStart(e, item as GridItem, index)}
        ondragover={(e) => handleDragOver(e, index)}
        ondragleave={handleDragLeave}
        ondrop={(e) => handleDrop(e, index)}
        ondragend={handleDragEndEvent}
        aria-label={`Grid item ${(item as SortableGridItem).title}`}
      >
        <div class={itemContentClass}>
          <GripVertical class={gripIconClass} />
          <div class="flex-1 min-w-0">
            <h3 class={itemTitleClass}>{(item as SortableGridItem).title}</h3>
            {#if (item as SortableGridItem).content}
              <p class={itemContentTextClass}>{(item as SortableGridItem).content}</p>
            {/if}
          </div>
        </div>
        {#if item.render}
          <div class="px-4 pb-4">
            {@render item.render()}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
