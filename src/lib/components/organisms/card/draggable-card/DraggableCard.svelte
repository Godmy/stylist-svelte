<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { GripVertical, MoreHorizontal } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import BaseCard from '$lib/components/organisms/card/base-card/BaseCard.svelte';

  type CardData = {
    id: string;
    title: string;
    description?: string;
    content?: any;
    status?: string;
    tags?: string[];
    dueDate?: Date;
    assignedTo?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

  type Props = RestProps & {
    data: CardData;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    onDragStart?: (data: CardData) => void;
    onDragEnd?: (data: CardData) => void;
    onCardClick?: (data: CardData) => void;
    onContextMenu?: (data: CardData, event: MouseEvent) => void;
    disabled?: boolean;
    draggable?: boolean;
    showHandle?: boolean;
    showMenu?: boolean;
    variant?: 'default' | 'minimal' | 'compact';
  };

  let {
    data,
    class: hostClass = '',
    contentClass = '',
    headerClass = '',
    bodyClass = '',
    footerClass = '',
    onDragStart,
    onDragEnd,
    onCardClick,
    onContextMenu,
    disabled = false,
    draggable = true,
    showHandle = true,
    showMenu = true,
    variant = 'default',
    ...restProps
  }: Props = $props();

  let isDragging = $state(false);

  function handleDragStart(e: DragEvent) {
    if (disabled || !draggable) return;

    isDragging = true;
    e.dataTransfer?.setData('text/plain', data.id);
    onDragStart?.(data);
  }

  function handleDragEnd() {
    isDragging = false;
    onDragEnd?.(data);
  }

  function handleClick() {
    if (!disabled) {
      onCardClick?.(data);
    }
  }

  function handleContextMenu(e: MouseEvent) {
    e.preventDefault();
    if (!disabled) {
      onContextMenu?.(data, e);
    }
  }
</script>

<div
  class={`draggable-card shadow-md ${
    isDragging ? 'opacity-50 scale-95' : 'opacity-100'
  } ${
    variant === 'compact' ? 'p-2' : ''
  } ${hostClass}`}
  onclick={handleClick}
  oncontextmenu={handleContextMenu}
  draggable={draggable && !disabled}
  ondragstart={handleDragStart}
  ondragend={handleDragEnd}
  {...restProps}
>
  <BaseCard
    bodyClass={bodyClass}
    headerClass={headerClass}
  >
    <div class="flex justify-between items-start">
      {#if showHandle && variant !== 'compact'}
        <div class="flex items-center cursor-move mr-2">
          <GripVertical class="h-5 w-5 text-gray-400" />
        </div>
      {/if}
      <div class="flex-1 min-w-0">
        <h3 class="font-medium text-gray-900 truncate">{data.title}</h3>
        {#if data.description}
          <p class="text-sm text-gray-500 mt-1 truncate">{data.description}</p>
        {/if}
      </div>
      {#if showMenu}
        <Button variant="ghost" size="sm" class="ml-2">
          <MoreHorizontal class="h-4 w-4 text-gray-500" />
        </Button>
      {/if}
    </div>

    {#if data.tags && data.tags.length > 0}
      <div class="mt-2 flex flex-wrap gap-1">
        {#each data.tags as tag}
          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {tag}
          </span>
        {/each}
      </div>
    {/if}

    {#if data.dueDate || data.assignedTo}
      <div class="mt-3 flex items-center justify-between text-xs text-gray-500">
        {#if data.dueDate}
          <div class="flex items-center">
            <span>{new Date(data.dueDate).toLocaleDateString()}</span>
          </div>
        {/if}
        {#if data.assignedTo}
          <div class="flex items-center">
            <span>Assigned to: {data.assignedTo}</span>
          </div>
        {/if}
      </div>
    {/if}
  </BaseCard>
</div>
