<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct';
  import { Icon as BaseIcon } from '$stylist';
  import { createSortableGridState } from '$stylist/control/function/state/sortable-grid';
  import type { SortableGridItem, SortableGridProps } from '$stylist/control/function/state/sortable-grid';

  const GripVertical = 'grip-vertical';

  let props: SortableGridProps & Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'> = $props();
  const state = createSortableGridState(props);

  const restProps = $derived.by(() => {
    const {
      class: _class,
      items: _items,
      itemClass: _itemClass,
      onItemsChange: _onItemsChange,
      cols: _cols,
      gap: _gap,
      ...rest
    } = props;
    return rest;
  });
</script>

<div class={state.containerClass} {...restProps}>
  <div class={`${state.gridColsClass} ${state.gapClass}`}>
    {#each state.items as item, index}
      <div
        draggable={state.draggable}
        role="gridcell"
        tabindex="0"
        class={`sortable-grid-item ${state.draggedOverIndex === index && state.draggedItem && state.draggedItem.id !== item.id ? 'drag-over' : ''}`}
        ondragstart={(e) => state.handleDragStart(e, item, index)}
        ondragover={(e) => state.handleDragOver(e, index)}
        ondragleave={() => state.handleDragLeave()}
        ondrop={(e) => state.handleDrop(e, index)}
        ondragend={state.handleDragEnd}
        aria-label={`Grid item ${item.title}`}
      >
        <div class="sortable-grid-item-content">
          <BaseIcon name={GripVertical} class="sortable-grid-grip-icon" />
          <div class="flex-1 min-w-0">
            <h3 class="sortable-grid-title">{item.title}</h3>
            {#if item.content}
              <p class="sortable-grid-text">{item.content}</p>
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
