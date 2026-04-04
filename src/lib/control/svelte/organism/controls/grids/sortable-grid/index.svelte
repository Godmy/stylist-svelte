<script lang="ts">
  import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
const GripVertical = 'grip-vertical';

  import { SortableGridStyleManager } from '$stylist/control/class/style-manager/sortable-grid';
  const gridColsMap = {
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
  } as const;

  const gapMap = {
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-10',
    '1/4': 'gap-1',
    '1/3': 'gap-2',
    '2/5': 'gap-2',
    '1/2': 'gap-4',
    '3/5': 'gap-4',
    '2/3': 'gap-6',
    '3/4': 'gap-8',
    full: 'gap-10'
  } as const;

  type SortableGridItem = {
    id: string;
    title: string;
    content?: string;
    render?: Snippet;
  };

  type SortableGridProps = {
    items?: SortableGridItem[];
    class?: string;
    itemClass?: string;
    gridClass?: string;
    onItemsChange?: (items: SortableGridItem[]) => void;
    onItemDragStart?: (item: SortableGridItem) => void;
    onItemDragEnd?: (item: SortableGridItem) => void;
    disabled?: boolean;
    cols?: keyof typeof gridColsMap;
    gap?: keyof typeof gapMap;
    variant?: string;
    size?: string;
  };

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
  }: SortableGridProps & Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'> = $props();

  let draggedItem = $state<SortableGridItem | null>(null);
  let draggedOverIndex: number | null = $state(null);
  let isDragging = $state(false);

  let gridColsClass = $derived(gridColsMap[cols] || 'grid-cols-3');

  let gapClass = $derived(gapMap[gap] || 'gap-4');

  function handleDragStart(e: DragEvent, item: SortableGridItem, index: number) {
    if (disabled) return;

    e.dataTransfer?.setData('text/plain', item.id);
    draggedItem = item;
    isDragging = true;
    onItemDragStart?.(item);
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
    if (dropIndex !== items.findIndex((item: SortableGridItem) => item.id === draggedItem!.id)) {
      const newItems = [...items];
      const dragIndex = newItems.findIndex((item: SortableGridItem) => item.id === draggedItem!.id);

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
      onItemDragEnd?.(draggedItem);
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
  const itemDraggingClass = SortableGridStyleManager.getItemDraggingClass();
  const itemDragOverClass = SortableGridStyleManager.getItemDragOverClass();
  const itemContentClass = $derived(SortableGridStyleManager.getItemContentClass(variant));
  const itemTitleClass = SortableGridStyleManager.getItemTitleClass();
  const itemContentTextClass = SortableGridStyleManager.getItemContentTextClass();
  const gripIconClass = SortableGridStyleManager.getGripIconClass();
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
        ondragstart={(e) => handleDragStart(e, item, index)}
        ondragover={(e) => handleDragOver(e, index)}
        ondragleave={handleDragLeave}
        ondrop={(e) => handleDrop(e, index)}
        ondragend={handleDragEndEvent}
        aria-label={`Grid item ${item.title}`}
      >
        <div class={itemContentClass}>
          <BaseIcon name={GripVertical} class={gripIconClass} />
          <div class="flex-1 min-w-0">
            <h3 class={itemTitleClass}>{item.title}</h3>
            {#if item.content}
              <p class={itemContentTextClass}>{item.content}</p>
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



