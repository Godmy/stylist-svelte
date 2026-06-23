<script lang="ts">
	import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import createSortableGridState from '$stylist/control/function/state/sortable-grid/index.svelte';
	import type { SortableGridProps } from '$stylist/control/type/alias/sortable-grid-props';

	const GripVertical = 'grip-vertical';

	let props: SortableGridProps & Omit<LayoutHTMLAttributes<HTMLDivElement>, 'class'> =
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

<div
	class={state.containerClass}
	data-cols={state.cols}
	data-gap={state.gap ?? 'md'}
	{...restProps}
>
	<div class="c-sortable-grid__grid">
		{#each state.items as item, index}
			<div
				class="c-sortable-grid__item"
				data-over={(state.draggedOverIndex === index &&
					state.draggedItem &&
					state.draggedItem.id !== item.id) ||
					undefined}
				draggable={state.draggable}
				role="gridcell"
				tabindex="0"
				ondragstart={(e) => state.handleDragStart(e, item, index)}
				ondragover={(e) => state.handleDragOver(e, index)}
				ondragleave={() => state.handleDragLeave()}
				ondrop={(e) => state.handleDrop(e, index)}
				ondragend={state.handleDragEnd}
				aria-label={`Grid item ${item.title}`}
			>
				<div class="c-sortable-grid__item-content">
					<BaseIcon
						name={GripVertical}
						style="width:1rem;height:1rem;"
						class="c-sortable-grid__grip"
					/>
					<div class="c-sortable-grid__item-body">
						<h3 class="c-sortable-grid__title">{item.title}</h3>
						{#if item.content}
							<p class="c-sortable-grid__text">{item.content}</p>
						{/if}
					</div>
				</div>
				{#if item.render}
					<div class="c-sortable-grid__render">
						{@render item.render()}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.c-sortable-grid__grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(3, 1fr);
	}
	.c-sortable-grid[data-cols='1'] .c-sortable-grid__grid {
		grid-template-columns: repeat(1, 1fr);
	}
	.c-sortable-grid[data-cols='2'] .c-sortable-grid__grid {
		grid-template-columns: repeat(2, 1fr);
	}
	.c-sortable-grid[data-cols='3'] .c-sortable-grid__grid {
		grid-template-columns: repeat(3, 1fr);
	}
	.c-sortable-grid[data-cols='4'] .c-sortable-grid__grid {
		grid-template-columns: repeat(4, 1fr);
	}
	.c-sortable-grid[data-gap='none'] .c-sortable-grid__grid {
		gap: 0;
	}
	.c-sortable-grid[data-gap='sm'] .c-sortable-grid__grid {
		gap: 0.5rem;
	}
	.c-sortable-grid[data-gap='md'] .c-sortable-grid__grid {
		gap: 1rem;
	}
	.c-sortable-grid[data-gap='lg'] .c-sortable-grid__grid {
		gap: 1.5rem;
	}
	.c-sortable-grid__item {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		overflow: hidden;
		cursor: grab;
		transition: border-color var(--duration-120, 120ms);
	}
	.c-sortable-grid__item[data-over] {
		border-color: var(--color-primary-500);
	}
	.c-sortable-grid__item-content {
		display: flex;
		align-items: center;
		padding: 0.75rem 1rem;
		gap: 0.5rem;
	}
	.c-sortable-grid__grip {
		color: var(--color-text-tertiary);
		flex-shrink: 0;
	}
	.c-sortable-grid__title {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 600;
	}
	.c-sortable-grid__text {
		margin: 0;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
	.c-sortable-grid__render {
		padding: 0 1rem 1rem;
	}
	.c-sortable-grid__item-body {
		min-width: 0;
		flex: 1;
	}
</style>
