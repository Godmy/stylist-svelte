import { untrack } from 'svelte';
import type { KanbanBoardType } from '$stylist/portfolio/type/struct/kanban-board/kanbanboardtype';
import type { KanbanBoardAction } from '$stylist/portfolio/type/struct/kanban-board/kanbanboardaction';
import type { RecipeKanbanBoard } from '$stylist/portfolio/interface/recipe/kanban-board';
import { addKanbanCard } from '$stylist/portfolio/function/script/kanban-board-add-card';
import { addKanbanColumn } from '$stylist/portfolio/function/script/kanban-board-add-column';
import { archiveKanbanCard } from '$stylist/portfolio/function/script/kanban-board-archive-card';
import { cloneKanbanBoard } from '$stylist/portfolio/function/script/kanban-board';
import { deleteKanbanCard } from '$stylist/portfolio/function/script/kanban-board-delete-card';
import { moveKanbanCard } from '$stylist/portfolio/function/script/kanban-board-move-card';
import { renameKanbanCard } from '$stylist/portfolio/function/script/kanban-board-rename-card';
import { renameKanbanColumn } from '$stylist/portfolio/function/script/kanban-board-rename-column';

const Plus = 'plus';

export function createKanbanBoardState(props: RecipeKanbanBoard) {
	// Props with defaults
	const board = $derived(props.board);
	const controlled = $derived(props.controlled ?? false);
	const allowReordering = $derived(props.allowReordering ?? true);
	const allowColumnAdd = $derived(props.allowColumnAdd ?? true);
	const allowCardAdd = $derived(props.allowCardAdd ?? true);
	const allowInlineEdit = $derived(props.allowInlineEdit ?? true);
	const allowCardArchive = $derived(props.allowCardArchive ?? true);
	const allowCardDelete = $derived(props.allowCardDelete ?? true);
	const showArchivedCards = $derived(props.showArchivedCards ?? false);
	const onCardMove = $derived(props.onCardMove);
	const onColumnAdd = $derived(props.onColumnAdd);
	const onCardAdd = $derived(props.onCardAdd);
	const onColumnTitleChange = $derived(props.onColumnTitleChange);
	const onCardTitleChange = $derived(props.onCardTitleChange);
	const onCardArchive = $derived(props.onCardArchive);
	const onCardDelete = $derived(props.onCardDelete);
	const onBoardChange = $derived(props.onBoardChange);
	const content = $derived(props.content);

	// SlotState
	let internalBoard = $state<KanbanBoardType>(untrack(() => cloneKanbanBoard(board)));
	let previousBoardRef = $state(untrack(() => board));

	// Sync with external board
	$effect(() => {
		if (controlled) {
			internalBoard = cloneKanbanBoard(board);
			previousBoardRef = board;
			return;
		}

		if (board !== previousBoardRef) {
			internalBoard = cloneKanbanBoard(board);
			previousBoardRef = board;
		}
	});

	// Computed
	const boardState = $derived(controlled ? board : internalBoard);
	const plusIcon = Plus;

	// Methods
	function publishBoard(nextBoard: KanbanBoardType, action: KanbanBoardAction): void {
		if (!controlled) {
			internalBoard = nextBoard;
		}
		onBoardChange?.(nextBoard, action);
	}

	function handleCardMove(
		cardId: string,
		fromColumnId: string,
		toColumnId: string,
		position: number
	): void {
		const { nextBoard, safePosition } = moveKanbanCard(
			boardState,
			cardId,
			fromColumnId,
			toColumnId,
			position
		);
		publishBoard(nextBoard, {
			type: 'move-card',
			cardId,
			fromColumnId,
			toColumnId,
			position: safePosition
		});
		onCardMove?.(cardId, fromColumnId, toColumnId, safePosition);
	}

	function handleCardDrop(
		cardId: string,
		fromColumnId: string,
		toColumnId: string,
		position: number
	): void {
		if (!allowReordering) return;
		handleCardMove(cardId, fromColumnId, toColumnId, position);
	}

	function handleAddCard(columnId: string): void {
		if (!allowCardAdd) return;
		const { nextBoard, newCard } = addKanbanCard(boardState, columnId);
		publishBoard(nextBoard, { type: 'add-card', columnId, cardId: newCard.id });
		onCardAdd?.(columnId, newCard);
	}

	function handleAddColumn(): void {
		if (!allowColumnAdd) return;
		const { nextBoard, newColumn } = addKanbanColumn(boardState);
		publishBoard(nextBoard, { type: 'add-column', columnId: newColumn.id });
		onColumnAdd?.(newColumn);
	}

	function handleColumnTitleChange(columnId: string, title: string): void {
		const nextBoard = renameKanbanColumn(boardState, columnId, title);
		publishBoard(nextBoard, { type: 'rename-column', columnId, title });
		onColumnTitleChange?.(columnId, title);
	}

	function handleCardTitleChange(columnId: string, cardId: string, title: string): void {
		const nextBoard = renameKanbanCard(boardState, columnId, cardId, title);
		publishBoard(nextBoard, { type: 'rename-card', columnId, cardId, title });
		onCardTitleChange?.(columnId, cardId, title);
	}

	function handleCardArchive(columnId: string, cardId: string): void {
		if (!allowCardArchive) return;
		const nextBoard = archiveKanbanCard(boardState, columnId, cardId);
		publishBoard(nextBoard, { type: 'archive-card', columnId, cardId });
		onCardArchive?.(columnId, cardId);
	}

	function handleCardDelete(columnId: string, cardId: string): void {
		if (!allowCardDelete) return;
		const nextBoard = deleteKanbanCard(boardState, columnId, cardId);
		publishBoard(nextBoard, { type: 'delete-card', columnId, cardId });
		onCardDelete?.(columnId, cardId);
	}

	// CSS classes
	const containerClass = 'kanban-board';
	const columnContainerClass = 'kanban-board__column-container';
	const buttonContainerClass = 'kanban-board__button-container';
	const addButtonClass = 'kanban-board__add-button';
	const iconClass = 'kanban-board__icon';
	const contentContainerClass = 'kanban-board__content-container';

	return {
		get containerClass() {
			return containerClass;
		},
		get columnContainerClass() {
			return columnContainerClass;
		},
		get buttonContainerClass() {
			return buttonContainerClass;
		},
		get addButtonClass() {
			return addButtonClass;
		},
		get iconClass() {
			return iconClass;
		},
		get contentContainerClass() {
			return contentContainerClass;
		},
		get boardState() {
			return boardState;
		},
		get controlled() {
			return controlled;
		},
		get allowReordering() {
			return allowReordering;
		},
		get allowColumnAdd() {
			return allowColumnAdd;
		},
		get allowCardAdd() {
			return allowCardAdd;
		},
		get allowInlineEdit() {
			return allowInlineEdit;
		},
		get allowCardArchive() {
			return allowCardArchive;
		},
		get allowCardDelete() {
			return allowCardDelete;
		},
		get showArchivedCards() {
			return showArchivedCards;
		},
		get content() {
			return content;
		},
		get plusIcon() {
			return plusIcon;
		},
		handleCardDrop,
		handleAddCard,
		handleAddColumn,
		handleColumnTitleChange,
		handleCardTitleChange,
		handleCardArchive,
		handleCardDelete
	};
}
