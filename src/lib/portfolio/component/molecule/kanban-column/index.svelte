<script lang="ts">
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';
	import { createKanbanColumnState } from '$stylist/portfolio/function/state/kanban-column/index.svelte';
	import KanbanCard from '$stylist/portfolio/component/molecule/kanban-card/index.svelte';
	import type { KanbanColumnType } from '$stylist/portfolio/type/struct/kanban-column';
	import type { Snippet } from 'svelte';

	let {
		column,
		droppable = true,
		editable = true,
		showArchivedCards = false,
		onAddCard,
		onCardDrop,
		onColumnTitleChange,
		onCardTitleChange,
		onCardDelete,
		onCardArchive,
		content
	}: {
		column: KanbanColumnType;
		droppable?: boolean;
		editable?: boolean;
		showArchivedCards?: boolean;
		onAddCard?: (columnId: string) => void;
		onCardDrop?: (
			cardId: string,
			fromColumnId: string,
			toColumnId: string,
			position: number
		) => void;
		onColumnTitleChange?: (columnId: string, title: string) => void;
		onCardTitleChange?: (columnId: string, cardId: string, title: string) => void;
		onCardDelete?: (columnId: string, cardId: string) => void;
		onCardArchive?: (columnId: string, cardId: string) => void;
		content?: Snippet;
	} = $props();

	const state = createKanbanColumnState({
		column,
		droppable,
		editable,
		showArchivedCards,
		onAddCard,
		onCardDrop,
		onColumnTitleChange,
		onCardTitleChange,
		onCardDelete,
		onCardArchive,
		content
	});
</script>

<div
	class={state.containerClass}
	ondrop={state.handleColumnDrop}
	ondragover={state.handleDragOver}
	role="list"
	aria-label="Kanban column: {state.column.title}"
>
	<div class="_c1 [background-image:var(--gradient-neutral)]">
		<div class="_c2">
			{#if state.isEditingTitle}
				<div class="_c3">
					<input
						class="_c4 _c1"
						bind:value={state.draftTitle}
						onkeydown={(e) => {
							if (e.key === 'Enter') state.commitTitleEdit();
							if (e.key === 'Escape') state.cancelTitleEdit();
						}}
						onblur={state.commitTitleEdit}
					/>
					<button
						type="button"
						class="_c5 _c2"
						onclick={state.commitTitleEdit}
						aria-label="Save column title"
					>
						<BaseIcon name={state.checkIcon} class="_c6" />
					</button>
					<button
						type="button"
						class="_c7 _c3"
						onclick={state.cancelTitleEdit}
						aria-label="Cancel column title edit"
					>
						<BaseIcon name={state.xIcon} class="_c6" />
					</button>
				</div>
			{:else}
				<h3 class="_c8">
					{state.column.title}
				</h3>
			{/if}
			<div class="_c9">
				<Badge variant="default" size="sm">{state.visibleCards.length}</Badge>
				{#if state.editable && !state.isEditingTitle}
					<button
						type="button"
						class="_c10 _c4"
						onclick={state.startTitleEdit}
						aria-label="Edit column title"
					>
						<BaseIcon name={state.pencilIcon} class="_c6" />
					</button>
				{/if}
			</div>
		</div>

		{#if state.column.description}
			<p class="_c11">{state.column.description}</p>
		{/if}

		<div class="_c12">
			<Button variant="ghost" size="sm" onclick={state.handleAddCard} class="_c13 _c3">
				<BaseIcon name={state.plusIcon} class="_c14" />
				Add Card
			</Button>
		</div>
	</div>

	<div
		class="_c15"
		style="--gradient-inner: color-mix(in srgb, var(--color-border-primary) 8%, transparent); --gradient-outer: transparent; background-image: var(--gradient-radial-center);"
	>
		{#each state.visibleCards as card, index (card.id)}
			{#if state.dragOverIndex === index}
				<div class="kc-drop-indicator _c16 _c5" aria-hidden="true"></div>
			{/if}

			<div
				role="listitem"
				ondrop={(e) => state.handleCardDrop(e, index)}
				ondragover={(e) => state.handleDragOver(e, index)}
			>
				<KanbanCard
					{card}
					draggable={state.droppable}
					editable={state.editable}
					ondragstart={(e: DragEvent) => state.handleCardDragStart(e, card)}
					ondragend={state.handleCardDragEnd}
					onTitleChange={(title) => onCardTitleChange?.(state.column.id, card.id, title)}
					onDelete={() => onCardDelete?.(state.column.id, card.id)}
					onArchive={() => onCardArchive?.(state.column.id, card.id)}
				/>
			</div>
		{/each}

		{#if state.dragOverIndex === state.visibleCards.length}
			<div class="kc-drop-indicator _c16 _c5" aria-hidden="true"></div>
		{/if}
	</div>

	{#if state.content}
		<div class="_c17">
			{@render state.content()}
		</div>
	{/if}
</div>

<style>
	._c1 {
		border-bottom-width: 1px;
		border-style: solid;
		border-color: color:var(--color-border-primary);
		padding: 1rem;
	}
	._c10 {
		color: var(--color-text-tertiary);
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}
	._c11 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c12 {
		margin-top: 0.75rem;
	}
	._c13 {
		border-radius: 0.5rem;
		color: var(--color-text-secondary);
	}
	._c14 {
		margin-right: 0.25rem;
		height: 1rem;
		width: 1rem;
	}
	._c15 {
		max-height: calc(100vh-250px);
		flex-grow: 1;
		overflow-y: auto;
		padding: 0.75rem;
	}
	._c15 > * + * {
		margin-top: 0.75rem;
	}
	._c16 {
		height: 0.5rem;
		border-radius: 9999px;
		border-width: 1px;
		border-style: solid;
	}
	._c17 {
		margin-top: auto;
		padding: 0.5rem;
	}
	._c2 {
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	._c3 {
		display: flex;
		min-width: 0;
		flex: 1 1 0%;
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
		font-weight: 600;
		letter-spacing: -0.025em;
		color: var(--color-text-primary);
	}
	._c9 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
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
		color: var(--color-primary-600);
	}
	._c5 {
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}


	.kc-drop-indicator {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		border: 1px solid color-mix(in srgb, var(--color-primary-400) 60%, transparent);
		background-color: color-mix(in srgb, var(--color-primary-500) 22%, transparent);
		box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary-300) 40%, transparent);
	}
	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}
</style>
