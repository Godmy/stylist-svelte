import { KanbanBoardStyleManager } from '$stylist/management/class/style-manager/kanban-board';
import type { KanbanBoardType, KanbanBoardAction } from '$stylist/management/type/struct/kanban-board';
import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';
import type { KanbanCardType } from '$stylist/management/type/struct/kanban-card';
import type { Snippet } from 'svelte';
import {
  cloneKanbanBoard,
  moveKanbanCard,
  addKanbanCard,
  addKanbanColumn,
  renameKanbanColumn,
  renameKanbanCard,
  archiveKanbanCard,
  deleteKanbanCard
} from '$stylist/management/function/script/kanban-board';

const Plus = 'plus';

export interface KanbanBoardStateProps {
  board: KanbanBoardType;
  controlled?: boolean;
  allowReordering?: boolean;
  allowColumnAdd?: boolean;
  allowCardAdd?: boolean;
  allowInlineEdit?: boolean;
  allowCardArchive?: boolean;
  allowCardDelete?: boolean;
  showArchivedCards?: boolean;
  onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void;
  onColumnAdd?: (column: KanbanColumnType) => void;
  onCardAdd?: (columnId: string, card: KanbanCardType) => void;
  onColumnTitleChange?: (columnId: string, title: string) => void;
  onCardTitleChange?: (columnId: string, cardId: string, title: string) => void;
  onCardArchive?: (columnId: string, cardId: string) => void;
  onCardDelete?: (columnId: string, cardId: string) => void;
  onBoardChange?: (nextBoard: KanbanBoardType, action: KanbanBoardAction) => void;
  content?: Snippet;
}

export function createKanbanBoardState(props: KanbanBoardStateProps) {
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

  // State
  let internalBoard = $state<KanbanBoardType>(cloneKanbanBoard(board));
  let previousBoardRef = $state(board);

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

  function handleCardMove(cardId: string, fromColumnId: string, toColumnId: string, position: number): void {
    const { nextBoard, safePosition } = moveKanbanCard(boardState, cardId, fromColumnId, toColumnId, position);
    publishBoard(nextBoard, { type: 'move-card', cardId, fromColumnId, toColumnId, position: safePosition });
    onCardMove?.(cardId, fromColumnId, toColumnId, safePosition);
  }

  function handleCardDrop(cardId: string, fromColumnId: string, toColumnId: string, position: number): void {
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
  const containerClass = $derived(KanbanBoardStyleManager.getContainerClass());
  const columnContainerClass = $derived(KanbanBoardStyleManager.getColumnContainerClass());
  const buttonContainerClass = $derived(KanbanBoardStyleManager.getButtonContainerClass());
  const addButtonClass = $derived(KanbanBoardStyleManager.getAddButtonClass());
  const iconClass = $derived(KanbanBoardStyleManager.getIconClass());
  const contentContainerClass = $derived(KanbanBoardStyleManager.getContentContainerClass());

  return {
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
    handleCardDrop,
    handleAddCard,
    handleAddColumn,
    handleColumnTitleChange,
    handleCardTitleChange,
    handleCardArchive,
    handleCardDelete
  };
}

export default createKanbanBoardState;
