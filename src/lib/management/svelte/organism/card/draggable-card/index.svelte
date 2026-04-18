<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import { Icon as BaseIcon } from '$stylist';
const GripVertical = 'grip-vertical';
const MoreHorizontal = 'more-horizontal';

  import { Button } from '$stylist';
  import BaseCard from '$stylist/commerce/svelte/molecule/cards/base-card/index.svelte';
  import { createDraggableCardState, type CardData, type DraggableCardRestProps } from '$stylist/management/function/state/draggable-card';
  import type { SlotDraggableCard as DraggableCardProps } from '$stylist/management/interface/slot/draggable-card';

  let props: DraggableCardProps = $props();
  const state = createDraggableCardState(props);
</script>

<div
  class={state.rootClass}
  onclick={state.handleClick}
  oncontextmenu={state.handleContextMenu}
  draggable={state.draggable && !state.disabled}
  ondragstart={state.handleDragStart}
  ondragend={state.handleDragEnd}
  {...state.restProps}
>
  <BaseCard
    bodyClass={state.bodyClass}
    headerClass={state.headerClass}
  >
    <div class="flex justify-between items-start">
      {#if state.showHandle && state.variant !== 'compact'}
        <div class={state.handleClass}>
          <BaseIcon name={GripVertical} class={state.gripIconClass} />
        </div>
      {/if}
      <div class="flex-1 min-w-0">
        <h3 class={state.titleClass}>{state.data.title}</h3>
        {#if state.data.description}
          <p class={state.descriptionClass}>{state.data.description}</p>
        {/if}
      </div>
      {#if state.showMenu}
        <Button variant="ghost" size="sm" class="ml-2">
          <BaseIcon name={MoreHorizontal} class="h-4 w-4 text-[var(--color-text-secondary)]" />
        </Button>
      {/if}
    </div>

    {#if state.data.tags && state.data.tags.length > 0}
      <div class={state.tagsContainerClass}>
        {#each state.data.tags as tag}
          <span class={state.tagClass}>
            {tag}
          </span>
        {/each}
      </div>
    {/if}

    {#if state.data.dueDate || state.data.assignedTo}
      <div class={state.metadataClass}>
        {#if state.data.dueDate}
          <div class={state.dateClass}>
            <span>{new Date(state.data.dueDate).toLocaleDateString()}</span>
          </div>
        {/if}
        {#if state.data.assignedTo}
          <div class={state.assigneeClass}>
            <span>Assigned to: {state.data.assignedTo}</span>
          </div>
        {/if}
      </div>
    {/if}
  </BaseCard>
</div>
