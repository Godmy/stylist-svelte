<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { GripVertical, MoreHorizontal } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import BaseCard from '$stylist/components/molecules/information/cards/base-card/index.svelte';
  import { DraggableCardStyleManager } from '$stylist/design-system/styles/interaction/draggable-card';

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

  // Compute CSS classes using the style manager
  const rootClass = $derived(
    DraggableCardStyleManager.getRootClass(
      `${isDragging ? DraggableCardStyleManager.getDraggingClass() : 'opacity-100'} ${
        variant === 'compact' ? DraggableCardStyleManager.getCompactClass() : DraggableCardStyleManager.getDefaultClass()
      } ${hostClass}`
    )
  );
  const handleClass = $derived(DraggableCardStyleManager.getHandleClass());
  const gripIconClass = $derived(DraggableCardStyleManager.getGripIconClass());
  const titleClass = $derived(DraggableCardStyleManager.getTitleClass());
  const descriptionClass = $derived(DraggableCardStyleManager.getDescriptionClass());
  const tagsContainerClass = $derived(DraggableCardStyleManager.getTagsContainerClass());
  const tagClass = $derived(DraggableCardStyleManager.getTagClass());
  const metadataClass = $derived(DraggableCardStyleManager.getMetadataClass());
  const dateClass = $derived(DraggableCardStyleManager.getDateClass());
  const assigneeClass = $derived(DraggableCardStyleManager.getAssigneeClass());

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
  class={rootClass}
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
        <div class={handleClass}>
          <GripVertical class={gripIconClass} />
        </div>
      {/if}
      <div class="flex-1 min-w-0">
        <h3 class={titleClass}>{data.title}</h3>
        {#if data.description}
          <p class={descriptionClass}>{data.description}</p>
        {/if}
      </div>
      {#if showMenu}
        <Button variant="ghost" size="sm" class="ml-2">
          <MoreHorizontal class="h-4 w-4 text-gray-500" />
        </Button>
      {/if}
    </div>

    {#if data.tags && data.tags.length > 0}
      <div class={tagsContainerClass}>
        {#each data.tags as tag}
          <span class={tagClass}>
            {tag}
          </span>
        {/each}
      </div>
    {/if}

    {#if data.dueDate || data.assignedTo}
      <div class={metadataClass}>
        {#if data.dueDate}
          <div class={dateClass}>
            <span>{new Date(data.dueDate).toLocaleDateString()}</span>
          </div>
        {/if}
        {#if data.assignedTo}
          <div class={assigneeClass}>
            <span>Assigned to: {data.assignedTo}</span>
          </div>
        {/if}
      </div>
    {/if}
  </BaseCard>
</div>
