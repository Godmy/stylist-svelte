<script lang="ts">
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import { createKanbanBoardState } from '$stylist/portfolio/function/state/kanban-board/index.svelte';
	import KanbanColumn from '$stylist/portfolio/component/molecule/kanban-column/index.svelte';
	import type { KanbanBoardType } from '$stylist/portfolio/type/struct/kanban-board/kanbanboardtype';
	import type { KanbanBoardAction } from '$stylist/portfolio/type/struct/kanban-board/kanbanboardaction';
	import type { KanbanColumnType } from '$stylist/portfolio/type/struct/kanban-column';
	import type { KanbanCardType } from '$stylist/portfolio/type/struct/kanban-card/kanbancardtype';
	import type { Snippet } from 'svelte';

	let {
		board,
		controlled = false,
		allowReordering = true,
		allowColumnAdd = true,
		allowCardAdd = true,
		allowInlineEdit = true,
		allowCardArchive = true,
		allowCardDelete = true,
		showArchivedCards = false,
		onCardMove,
		onColumnAdd,
		onCardAdd,
		onColumnTitleChange,
		onCardTitleChange,
		onCardArchive,
		onCardDelete,
		onBoardChange,
		content
	}: {
		board: KanbanBoardType;
		controlled?: boolean;
		allowReordering?: boolean;
		allowColumnAdd?: boolean;
		allowCardAdd?: boolean;
		allowInlineEdit?: boolean;
		allowCardArchive?: boolean;
		allowCardDelete?: boolean;
		showArchivedCards?: boolean;
		onCardMove?: (
			cardId: string,
			fromColumnId: string,
			toColumnId: string,
			position: number
		) => void;
		onColumnAdd?: (column: KanbanColumnType) => void;
		onCardAdd?: (columnId: string, card: KanbanCardType) => void;
		onColumnTitleChange?: (columnId: string, title: string) => void;
		onCardTitleChange?: (columnId: string, cardId: string, title: string) => void;
		onCardArchive?: (columnId: string, cardId: string) => void;
		onCardDelete?: (columnId: string, cardId: string) => void;
		onBoardChange?: (nextBoard: KanbanBoardType, action: KanbanBoardAction) => void;
		content?: Snippet;
	} = $props();

	const state = createKanbanBoardState({
		board,
		controlled,
		allowReordering,
		allowColumnAdd,
		allowCardAdd,
		allowInlineEdit,
		allowCardArchive,
		allowCardDelete,
		showArchivedCards,
		onCardMove,
		onColumnAdd,
		onCardAdd,
		onColumnTitleChange,
		onCardTitleChange,
		onCardArchive,
		onCardDelete,
		onBoardChange,
		content
	});
</script>

<section class="_c1">
	{#if state.boardState.title}
		<header class="_c2">
			<h2 class="_c3">
				{state.boardState.title}
			</h2>
			<p class="_c4">Drag tasks between lanes, edit inline, archive or delete when done.</p>
		</header>
	{/if}

	<div class={state.containerClass}>
		{#each state.boardState.columns as column (column.id)}
			<div class={state.columnContainerClass}>
				<KanbanColumn
					{column}
					droppable={state.allowReordering}
					editable={state.allowInlineEdit}
					showArchivedCards={state.showArchivedCards}
					onAddCard={state.handleAddCard}
					onCardDrop={state.handleCardDrop}
					onColumnTitleChange={state.handleColumnTitleChange}
					onCardTitleChange={state.handleCardTitleChange}
					onCardArchive={state.handleCardArchive}
					onCardDelete={state.handleCardDelete}
				/>
			</div>
		{/each}

		{#if state.allowColumnAdd}
			<div class={state.buttonContainerClass}>
				<Button
					variant="secondary"
					size="md"
					onclick={state.handleAddColumn}
					class={state.addButtonClass}
				>
					<BaseIcon name={state.plusIcon} class={state.iconClass} /> Add Column
				</Button>
			</div>
		{/if}

		{#if state.content}
			<div class={state.contentContainerClass}>
				{@render state.content()}
			</div>
		{/if}
	</div>
</section>

<style>
	._c1 {
		display: flex;
		height: 100%;
		flex-direction: column;
		gap: 0.75rem;
	}
	._c2 {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}
	._c3 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		letter-spacing: -0.025em;
		color: var(--color-text-primary);
	}
	._c4 {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}

	.kanban-board {
		display: flex;
		height: 100%;
		overflow-x: auto;
		gap: 1.25rem;
		border-radius: 1rem;
		padding: 1rem;
		padding-bottom: 1.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: color:var(--color-border-secondary);
	}

	.kanban-board__column-container {
		min-width: 340px;
		max-width: 340px;
	}

	.kanban-board__button-container {
		display: flex;
		align-items: flex-start;
		padding-top: 0.25rem;
	}

	.kanban-board__add-button {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: dashed;
		border-color: color:var(--color-border-secondary);
		color: var(--color-text-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	.kanban-board__add-button:hover {
		background-color: var(--color-background-primary);
	}

	.kanban-board__icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
	}

	.kanban-board__content-container {
		margin-left: 0.5rem;
		display: flex;
		align-items: flex-start;
	}
</style>
