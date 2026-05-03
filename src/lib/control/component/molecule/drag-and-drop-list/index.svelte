<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import BaseCard from '$stylist/commerce/component/molecule/base-card/index.svelte';
  import type { DragAndDropListProps } from '$stylist/control/type/struct/drag-and-drop-list-props';
  import { createDragAndDropListState } from '$stylist/control/function/state/drag-and-drop-list';

  const GripVertical = 'grip-vertical';

  let props: DragAndDropListProps = $props();
  const state = createDragAndDropListState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      items: _items,
      itemClass: _itemClass,
      headerClass: _headerClass,
      bodyClass: _bodyClass,
      onItemsChange: _onItemsChange,
      onItemDragStart: _onItemDragStart,
      onItemDragEnd: _onItemDragEnd,
      disabled: _disabled,
      variant: _variant,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={`drag-and-drop-list ${state.hostClass}`} {...restProps}>
  <div class="space-y-2">
    {#each state.items as item, index}
      <div
        draggable={!state.disabled}
        role="listitem"
        class={`relative ${
          state.isDragging && state.draggedItem?.id === item.id ? 'opacity-[var(--opacity-50)]' : 'opacity-[var(--opacity-100)]'
        } ${
          state.draggedOverIndex === index && state.draggedItem && state.draggedItem.id !== item.id
            ? 'border-t-2 border-[var(--color-primary-500)]'
            : 'border border-[var(--color-border-primary)]'
        } rounded-lg ${state.variant === 'card' ? 'bg-[var(--color-background-primary)]' : ''} ${state.itemClass}`}
        ondragstart={(e) => state.handleDragStart(e, item, index)}
        ondragover={(e) => state.handleDragOver(e, index)}
        ondragleave={() => state.handleDragLeave()}
        ondrop={(e) => state.handleDrop(e, index)}
        ondragend={() => state.handleDragEnd(item)}
      >
        {#if state.variant === 'card'}
          <BaseCard
            title={item.title}
            description={item.content}
            class="shadow-none border-0"
            bodyClass={state.bodyClass}
            headerClass={state.headerClass}
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <BaseIcon name={GripVertical} class="h-4 w-4 text-[var(--color-text-tertiary)] cursor-move mr-2" />
                {item.title}
              </div>
              <div class="text-sm text-[var(--color-text-secondary)]">
                <!-- Item-specific actions could go here -->
              </div>
            </div>
          </BaseCard>
        {:else}
          <div class="flex items-center p-3">
            <BaseIcon name={GripVertical} class="h-4 w-4 text-[var(--color-text-tertiary)] cursor-move mr-2" />
            <span class={`flex-1 ${state.bodyClass}`}>{item.title}</span>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>





