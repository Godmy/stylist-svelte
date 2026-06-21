<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	const Archive = 'archive';
	const Check = 'check';
	const GripVertical = 'grip-vertical';
	const Pencil = 'pencil';
	const Trash2 = 'trash-2';
	const X = 'x';

	import Divider from '$stylist/layout/component/atom/divider/index.svelte';
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';
	import createKanbanCardState from '$stylist/management/function/state/kanban-card/index.svelte';
	import type { RecipeKanbanCard as KanbanCardProps } from '$stylist/management/interface/recipe/kanban-card';

	let props: KanbanCardProps = $props();
	const state = createKanbanCardState(props);
</script>

<div
	class={state.containerClasses}
	class:drag-handle={state.draggable}
	class:kanban-card--selected={state.selected}
	draggable={state.draggable}
	role="listitem"
	ondragstart={props.ondragstart}
	ondragend={props.ondragend}
>
	<div class="_c1">
		<div class="_c2">
			{#if state.isEditingTitle}
				<div class="_c3">
					<input
						class="_c4 _c1"
						bind:value={state.draftTitle}
						onblur={state.commitTitleEdit}
						onkeydown={(e) => {
							if (e.key === 'Enter') state.commitTitleEdit();
							if (e.key === 'Escape') state.cancelTitleEdit();
						}}
					/>
					<button
						type="button"
						class="_c5 _c2"
						onclick={state.commitTitleEdit}
						aria-label="Save title"
					>
						<BaseIcon name={Check} class="_c6" />
					</button>
					<button
						type="button"
						class="_c7 _c3"
						onclick={state.cancelTitleEdit}
						aria-label="Cancel title edit"
					>
						<BaseIcon name={X} class="_c6" />
					</button>
				</div>
			{:else}
				<button
					type="button"
					class="_c8 _c4"
					ondblclick={state.startTitleEdit}
					onclick={(e) => {
						if (e.altKey) state.startTitleEdit();
					}}
					aria-label="Edit card title"
				>
					{state.card.title}
				</button>
			{/if}
		</div>
		{#if state.card.priority}
			<Badge variant={state.getPriorityColor(state.card.priority) as any} size="sm">
				{state.card.priority}
			</Badge>
		{/if}
	</div>

	{#if state.card.description}
		<div class="_c9">
			{state.card.description}
		</div>
	{/if}

	{#if state.card.tags?.length}
		<div class="_c10">
			{#each state.card.tags as tag}
				<Badge variant="default" size="sm">
					{tag}
				</Badge>
			{/each}
		</div>
	{/if}

	<Divider class="_c11" />

	<div class="_c12">
		{#if state.card.assignee}
			<div class="_c13">
				{#if typeof state.card.assignee === 'object'}
					<Avatar name={state.card.assignee.name} size="sm" class="_c14" />
					<span>{state.card.assignee.name}</span>
				{:else}
					<Avatar name={state.card.assignee} size="sm" class="_c14" />
					<span>{state.card.assignee}</span>
				{/if}
			</div>
		{/if}

		<div class="_c15">{state.card.updatedAt ? state.formatDate(state.card.updatedAt) : ''}</div>
	</div>

	<div class="_c16">
		{#if state.editable}
			<button type="button" class="_c17 _c5" onclick={state.startTitleEdit} aria-label="Edit card">
				<BaseIcon name={Pencil} class="_c6" />
			</button>
		{/if}
		{#if state.archivable}
			<button
				type="button"
				class="_c17 _c6"
				onclick={() => props.onArchive?.()}
				aria-label="Archive card"
			>
				<BaseIcon name={Archive} class="_c6" />
			</button>
		{/if}
		{#if state.deletable}
			<button
				type="button"
				class="_c17 _c7"
				onclick={() => props.onDelete?.()}
				aria-label="Delete card"
			>
				<BaseIcon name={Trash2} class="_c6" />
			</button>
		{/if}
		<BaseIcon name={GripVertical} class="_c18" />
	</div>

	{#if props.children}
		<div class="_c19">
			{#if props.children}{@render props.children()}{/if}
		</div>
	{/if}
</div>

<style>
	._c1 {
		margin-bottom: 0.5rem;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
	}
	._c10 {
		margin-bottom: 0.75rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
	}
	._c11 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	._c12 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c13 {
		display: flex;
		align-items: center;
	}
	._c14 {
		margin-right: 0.5rem;
	}
	._c15 {
		margin-left: auto;
	}
	._c16 {
		margin-top: 0.5rem;
		display: flex;
		justify-content: flex-end;
	}
	._c17 {
		margin-right: 0.5rem;
		color: var(--color-text-tertiary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
	._c18 {
		height: 1rem;
		width: 1rem;
		color: var(--color-text-tertiary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
	._c19 {
		margin-top: 0.75rem;
	}
	._c2 {
		min-width: 0;
		flex: 1 1 0%;
	}
	._c3 {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	._c4 {
		width: 100%;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		color: var(--color-success-600);
	}
	._c6 {
		height: 1rem;
		width: 1rem;
	}
	._c7 {
		color: var(--color-text-secondary);
	}
	._c8 {
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: left;
		font-weight: 600;
		color: var(--color-text-primary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
	._c9 {
		margin-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.625;
		color: var(--color-text-secondary);
	}

	._c1 {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	._c1:focus {
		border-color: var(--color-primary-500);
	}
	._c2:hover {
		color: var(--color-success-700);
	}
	._c3:hover {
		color: var(--color-text-primary);
	}
	._c4:hover {
		color: var(--color-primary-700);
	}
	._c5:hover {
		color: var(--color-primary-600);
	}
	._c6:hover {
		color: var(--color-warning-600);
	}
	._c7:hover {
		color: var(--color-danger-600);
	}

	.kanban-card--selected {
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}

	:global(*):hover > .kanban-card .c18,
	.kanban-card:hover ._c18 {
		color: var(--color-text-secondary);
	}
</style>
