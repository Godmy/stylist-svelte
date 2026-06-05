<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	const GripVertical = 'grip-vertical';
	const MoreHorizontal = 'more-horizontal';

	import { SortableListStyleManager } from '$stylist/control/class/style-manager/sortable-list-style-manager';
	import type { SlotSortableList as SortableListProps } from '$stylist/control/interface/slot/sortable-list';
	import createSortableListState from '$stylist/control/function/state/sortable-list/index.svelte';

	let {
		items = [],
		class: className = '',
		onItemsChange,
		onItemAction,
		disabled = false,
		showHandle = true,
		showActions = true,
		variant = 'card',
		...restProps
	}: SortableListProps = $props();

	const state = createSortableListState({
		items,
		class: className,
		onItemsChange,
		onItemAction,
		disabled,
		showHandle,
		showActions,
		variant,
		...restProps
	});
</script>

<div class={SortableListStyleManager.root(className)} {...restProps}>
	<div class="space-y-2" role="list">
		{#each items as item, index}
			<div
				role="listitem"
				draggable={!disabled}
				class={`rounded-md border ${variant === 'compact' ? 'p-2' : 'p-3'} ${state.overIndex === index ? 'border-[var(--color-primary-500)]' : 'border-[var(--color-border-primary)]'}`}
				ondragstart={() => state.start(item)}
				ondragover={(e) => {
					e.preventDefault();
					state.handleDragOver(index);
				}}
				ondrop={() => state.drop(index)}
				ondragend={() => state.endDrag()}
			>
				<div class="flex items-center justify-between gap-2">
					<div class="flex items-center gap-2">
						{#if showHandle}<BaseIcon
								name={GripVertical}
								class="h-4 w-4 text-[var(--color-text-tertiary)]"
							/>{/if}
						<div>
							<div class="text-sm font-medium">{item.title}</div>
							{#if item.description}<div class="text-xs text-[var(--color-text-secondary)]">
									{item.description}
								</div>{/if}
						</div>
					</div>
					{#if showActions}
						<button type="button" onclick={() => onItemAction?.(item, 'menu')}
							><BaseIcon
								name={MoreHorizontal}
								class="h-4 w-4 text-[var(--color-text-secondary)]"
							/></button
						>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
