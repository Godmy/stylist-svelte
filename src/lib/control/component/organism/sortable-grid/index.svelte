<script lang="ts">
	import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import createSortableGridState from '$stylist/control/function/state/sortable-grid/index.svelte';
	import type { SortableGridProps } from '$stylist/control/type/alias/sortable-grid-props';

	const GripVertical = 'grip-vertical';

	let props: SortableGridProps & Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'> =
		$props();
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
					<div class="min-w-0 flex-1">
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
