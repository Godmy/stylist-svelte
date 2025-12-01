<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { GripVertical } from 'lucide-svelte';

  type GridItem = {
    id: string;
    title: string;
    content?: string;
    render?: Snippet;
    data?: any;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    items: GridItem[];
    class?: string;
    itemClass?: string;
    gridClass?: string;
    onItemsChange?: (items: GridItem[]) => void;
    onItemDragStart?: (item: GridItem) => void;
    onItemDragEnd?: (item: GridItem) => void;
    disabled?: boolean;
    cols?: number;
    gap?: 'sm' | 'md' | 'lg';
    variant?: 'card' | 'minimal';
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
    ...restProps
  }: Props = $props();

  let draggedItem: GridItem | null = $state(null);
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
    draggedItem = null;
    isDragging = false;
    onItemDragEnd?.(draggedItem!);
  }

  function handleDragEndEvent(e: DragEvent) {
    handleDragEnd();
  }
</script>

<div class={`sortable-grid ${hostClass}`} {...restProps}>
  <div class={`grid ${gridColsClass} ${gapClass} ${gridClass}`}>
    {#each items as item, index}
      <div
        draggable={!disabled}
        role="gridcell"
        tabindex="0"
        class={`relative flex flex-col ${
          isDragging && draggedItem?.id === item.id ? 'opacity-50' : 'opacity-100'
        } ${
          draggedOverIndex === index && draggedItem && draggedItem.id !== item.id 
            ? 'border-2 border-blue-500'
            : 'border border-gray-200'
        } rounded-lg ${
          variant === 'card' ? 'bg-white shadow-sm' : 'bg-gray-50'
        } transition-all ${itemClass}`}
        ondragstart={(e) => handleDragStart(e, item, index)}
        ondragover={(e) => handleDragOver(e, index)}
        ondragleave={handleDragLeave}
        ondrop={(e) => handleDrop(e, index)}
        ondragend={handleDragEndEvent}
      >
        {#if variant === 'card'}
          <div class="p-4 flex items-start">
            <GripVertical class="h-5 w-5 text-gray-400 cursor-move mr-2 flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-medium text-gray-900 truncate">{item.title}</h3>
              {#if item.content}
                <p class="mt-1 text-xs text-gray-500 line-clamp-2">{item.content}</p>
              {/if}
            </div>
          </div>
          {#if item.render}
            <div class="px-4 pb-4">
              {@render item.render()}
            </div>
          {/if}
        {:else}
          <div class="p-3 flex items-center">
            <GripVertical class="h-4 w-4 text-gray-400 cursor-move mr-2 flex-shrink-0" />
            <span class="text-sm text-gray-700 truncate">{item.title}</span>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
