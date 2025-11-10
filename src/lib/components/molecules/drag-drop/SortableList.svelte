<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { GripVertical, MoreHorizontal } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';

  type ListItem = {
    id: string;
    title: string;
    description?: string;
    content?: string;
    status?: string;
    data?: any;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    items: ListItem[];
    class?: string;
    itemClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    onItemsChange?: (items: ListItem[]) => void;
    onItemDragStart?: (item: ListItem) => void;
    onItemDragEnd?: (item: ListItem) => void;
    onItemAction?: (item: ListItem, action: string) => void;
    disabled?: boolean;
    droppable?: boolean;
    showHandle?: boolean;
    showActions?: boolean;
    variant?: 'minimal' | 'card' | 'compact';
  };

  let {
    items = [],
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    onItemsChange,
    onItemDragStart,
    onItemDragEnd,
    onItemAction,
    disabled = false,
    droppable = true,
    showHandle = true,
    showActions = true,
    variant = 'card',
    ...restProps
  }: Props = $props();

  let draggedItem: ListItem | null = $state(null);
  let draggedOverIndex: number | null = $state(null);
  let isDragging = $state(false);

  function handleDragStart(e: DragEvent, item: ListItem, index: number) {
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

  function handleItemAction(item: ListItem, action: string) {
    onItemAction?.(item, action);
  }
</script>

<div class={`sortable-list ${hostClass}`} {...restProps}>
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
        } rounded-lg ${
          variant === 'card' ? 'bg-white shadow-sm' : 
          variant === 'compact' ? 'px-2 py-1' : 
          'bg-white'
        } ${itemClass}`}
        ondragstart={(e) => handleDragStart(e, item, index)}
        ondragover={(e) => handleDragOver(e, index)}
        ondragleave={handleDragLeave}
        ondrop={(e) => handleDrop(e, index)}
        ondragend={handleDragEndEvent}
      >
        {#if variant === 'card'}
          <div class="flex items-start p-4">
            {#if showHandle}
              <div class="mr-3 mt-1">
                <GripVertical class="h-5 w-5 text-gray-400 cursor-move" />
              </div>
            {/if}
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900 truncate">{item.title}</h3>
                {#if showActions}
                  <div class="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onclick={(e) => {
                        e.stopPropagation();
                        handleItemAction(item, 'menu');
                      }}
                    >
                      <MoreHorizontal class="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>
                {/if}
              </div>
              {#if item.description}
                <p class="mt-1 text-xs text-gray-500 truncate">{item.description}</p>
              {/if}
              {#if item.content}
                <div class="mt-2 text-sm text-gray-700">
                  {item.content}
                </div>
              {/if}
            </div>
          </div>
        {:else if variant === 'compact'}
          <div class="flex items-center p-2">
            {#if showHandle}
              <GripVertical class="h-4 w-4 text-gray-400 cursor-move mr-2" />
            {/if}
            <span class={`flex-1 truncate ${bodyClass}`}>{item.title}</span>
            {#if showActions}
              <Button 
                variant="ghost" 
                size="sm"
                onclick={(e) => {
                  e.stopPropagation();
                  handleItemAction(item, 'menu');
                }}
              >
                <MoreHorizontal class="h-3 w-3 text-gray-500" />
              </Button>
            {/if}
          </div>
        {:else}
          <div class="flex items-center p-3">
            {#if showHandle}
              <GripVertical class="h-5 w-5 text-gray-400 cursor-move mr-3" />
            {/if}
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-900">{item.title}</span>
                {#if showActions}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onclick={(e) => {
                      e.stopPropagation();
                      handleItemAction(item, 'menu');
                    }}
                  >
                    <MoreHorizontal class="h-4 w-4 text-gray-500" />
                  </Button>
                {/if}
              </div>
              {#if item.description}
                <p class="text-xs text-gray-500 truncate mt-1">{item.description}</p>
              {/if}
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
