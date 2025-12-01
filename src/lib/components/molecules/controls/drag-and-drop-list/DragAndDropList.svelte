<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { GripVertical } from 'lucide-svelte';
  import BaseCard from '../card/BaseCard.svelte';

  type DragItem = {
    id: string;
    title: string;
    content?: string;
    data?: any;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    items: DragItem[];
    class?: string;
    itemClass?: string;
    headerClass?: string;
    bodyClass?: string;
    onItemsChange?: (items: DragItem[]) => void;
    onItemDragStart?: (item: DragItem) => void;
    onItemDragEnd?: (item: DragItem) => void;
    disabled?: boolean;
    variant?: 'minimal' | 'card';
  };

  let {
    items = [],
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    bodyClass = '',
    onItemsChange,
    onItemDragStart,
    onItemDragEnd,
    disabled = false,
    variant = 'card',
    ...restProps
  }: Props = $props();

  let draggedItem: DragItem | null = $state(null);
  let draggedOverIndex: number | null = $state(null);
  let isDragging = $state(false);

  function handleDragStart(e: DragEvent, item: DragItem, index: number) {
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

<div class={`drag-and-drop-list ${hostClass}`} {...restProps}>
  <div class="space-y-2">
    {#each items as item, index}
      <div 
        draggable={!disabled}
        role="listitem"
        class={`relative ${
          isDragging && draggedItem?.id === item.id ? 'opacity-50' : 'opacity-100'
        } ${
          draggedOverIndex === index && draggedItem && draggedItem.id !== item.id 
            ? 'border-t-2 border-blue-500'
            : 'border border-gray-200'
        } rounded-lg ${variant === 'card' ? 'bg-white' : ''} ${itemClass}`}
        ondragstart={(e) => handleDragStart(e, item, index)}
        ondragover={(e) => handleDragOver(e, index)}
        ondragleave={handleDragLeave}
        ondrop={(e) => handleDrop(e, index)}
        ondragend={handleDragEndEvent}
      >
        {#if variant === 'card'}
          <BaseCard 
            title={item.title}
            description={item.content}
            class="shadow-none border-0"
            bodyClass={bodyClass}
            headerClass={headerClass}
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <GripVertical class="h-4 w-4 text-gray-400 cursor-move mr-2" />
                {item.title}
              </div>
              <div class="text-sm text-gray-500">
                <!-- Item-specific actions could go here -->
              </div>
            </div>
          </BaseCard>
        {:else}
          <div class="flex items-center p-3">
            <GripVertical class="h-4 w-4 text-gray-400 cursor-move mr-2" />
            <span class={`flex-1 ${bodyClass}`}>{item.title}</span>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
