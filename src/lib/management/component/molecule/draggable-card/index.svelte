<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const GripVertical = 'grip-vertical';
	const MoreHorizontal = 'more-horizontal';

	import Button from '$stylist/button/component/atom/button/index.svelte';
	import BaseCard from '$stylist/information/component/molecule/base-card/index.svelte';
	import createDraggableCardState from '$stylist/management/function/state/draggable-card/index.svelte';
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
	<BaseCard bodyClass={state.bodyClass} headerClass={state.headerClass}>
		<div class="_c1">
			{#if state.showHandle && state.variant !== 'compact'}
				<div class={state.handleClass}>
					<BaseIcon name={GripVertical} class={state.gripIconClass} />
				</div>
			{/if}
			<div class="_c2">
				<h3 class={state.titleClass}>{state.data.title}</h3>
				{#if state.data.description}
					<p class={state.descriptionClass}>{state.data.description}</p>
				{/if}
			</div>
			{#if state.showMenu}
				<Button variant="ghost" size="sm" class="_c3">
					<BaseIcon name={MoreHorizontal} class="_c4" />
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

<style>
	._c1 {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	._c2 {
		min-width: 0;
		flex: 1 1 0%;
	}
	._c3 {
		margin-left: 0.5rem;
	}
	._c4 {
		height: 1rem;
		width: 1rem;
		color: var(--color-text-secondary);
	}

	.draggable-card__root {
		position: relative;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.draggable-card__compact {
		padding: 0.5rem;
	}

	.draggable-card__default {
		padding: 1rem;
	}

	.draggable-card__handle {
		display: flex;
		align-items: center;
		margin-right: 0.5rem;
	}

	.draggable-card__grip-icon {
		height: 1.25rem;
		width: 1.25rem;
		color: var(--color-text-tertiary);
	}

	.draggable-card__title {
		font-weight: 500;
		color: var(--color-text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.draggable-card__description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
		margin-top: 0.25rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.draggable-card__tags-container {
		margin-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}

	.draggable-card__tag {
		display: inline-flex;
		align-items: center;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		background-color: var(--color-info-100);
		color: var(--color-info-800);
	}

	.draggable-card__metadata {
		margin-top: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}

	.draggable-card__date {
		display: flex;
		align-items: center;
	}

	.draggable-card__assignee {
		display: flex;
		align-items: center;
	}
</style>
