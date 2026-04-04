<script lang="ts">
  import { Icon as BaseIcon, Button } from '$stylist';
  import { KanbanBoardStyleManager } from '$stylist/management/class/style-manager/kanban-board';
  import KanbanColumn, { type KanbanColumnType } from '$stylist/management/svelte/molecule/kanban/kanban-column/index.svelte';
  import type { KanbanCardType } from '$stylist/management/svelte/organism/card/kanban-card/index.svelte';
  import type { Snippet } from 'svelte';

  const Plus = 'plus';

  export type KanbanBoardType = {
    id: string;
    title?: string;
    columns: KanbanColumnType[];
  };

  export type KanbanBoardAction =
    | { type: 'move-card'; cardId: string; fromColumnId: string; toColumnId: string; position: number }
    | { type: 'add-card'; columnId: string; cardId: string }
    | { type: 'add-column'; columnId: string }
    | { type: 'rename-column'; columnId: string; title: string }
    | { type: 'rename-card'; columnId: string; cardId: string; title: string }
    | { type: 'archive-card'; columnId: string; cardId: string }
    | { type: 'delete-card'; columnId: string; cardId: string };

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
    onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void;
    onColumnAdd?: (column: KanbanColumnType) => void;
    onCardAdd?: (columnId: string, card: KanbanCardType) => void;
    onColumnTitleChange?: (columnId: string, title: string) => void;
    onCardTitleChange?: (columnId: string, cardId: string, title: string) => void;
    onCardArchive?: (columnId: string, cardId: string) => void;
    onCardDelete?: (columnId: string, cardId: string) => void;
    onBoardChange?: (nextBoard: KanbanBoardType, action: KanbanBoardAction) => void;
    content?: Snippet;
  } = $props();

  function cloneBoard(source: KanbanBoardType): KanbanBoardType {
    return {
      ...source,
      columns: source.columns.map((column) => ({
        ...column,
        cards: [...column.cards]
      }))
    };
  }

  let internalBoard = $state<KanbanBoardType>(cloneBoard(board));
  let previousBoardRef = $state(board);

  $effect(() => {
    if (controlled) {
      internalBoard = cloneBoard(board);
      previousBoardRef = board;
      return;
    }

    if (board !== previousBoardRef) {
      internalBoard = cloneBoard(board);
      previousBoardRef = board;
    }
  });

  const boardState = $derived(controlled ? board : internalBoard);

  function publishBoard(nextBoard: KanbanBoardType, action: KanbanBoardAction) {
    if (!controlled) {
      internalBoard = nextBoard;
    }
    onBoardChange?.(nextBoard, action);
  }

  function moveCard(cardId: string, fromColumnId: string, toColumnId: string, position: number) {
    const columns = boardState.columns.map((column) => ({ ...column, cards: [...column.cards] }));
    const fromColumn = columns.find((column) => column.id === fromColumnId);
    const toColumn = columns.find((column) => column.id === toColumnId);
    if (!fromColumn || !toColumn) return;

    const fromIndex = fromColumn.cards.findIndex((card) => card.id === cardId);
    if (fromIndex < 0) return;

    const [card] = fromColumn.cards.splice(fromIndex, 1);

    const activeTargetCards = toColumn.cards.filter((item) => item.status !== 'archived');
    const archivedTargetCards = toColumn.cards.filter((item) => item.status === 'archived');
    const safePosition = Math.max(0, Math.min(position, activeTargetCards.length));

    const normalizedCard: KanbanCardType = {
      ...card,
      updatedAt: new Date()
    };

    activeTargetCards.splice(safePosition, 0, normalizedCard);
    toColumn.cards = [...activeTargetCards, ...archivedTargetCards];

    const nextBoard: KanbanBoardType = { ...boardState, columns };
    publishBoard(nextBoard, { type: 'move-card', cardId, fromColumnId, toColumnId, position: safePosition });
    onCardMove?.(cardId, fromColumnId, toColumnId, safePosition);
  }

  function handleCardDrop(cardId: string, fromColumnId: string, toColumnId: string, position: number) {
    if (!allowReordering) return;
    moveCard(cardId, fromColumnId, toColumnId, position);
  }

  function handleAddCard(columnId: string) {
    if (!allowCardAdd) return;

    const newCard: KanbanCardType = {
      id: `card-${Date.now()}`,
      title: 'New task',
      description: 'Describe the task',
      priority: 'medium',
      tags: ['new'],
      status: 'todo',
      updatedAt: new Date()
    };

    const nextBoard: KanbanBoardType = {
      ...boardState,
      columns: boardState.columns.map((column) =>
        column.id === columnId
          ? { ...column, cards: [...column.cards, newCard] }
          : column
      )
    };

    publishBoard(nextBoard, { type: 'add-card', columnId, cardId: newCard.id });
    onCardAdd?.(columnId, newCard);
  }

  function handleAddColumn() {
    if (!allowColumnAdd) return;

    const newColumn: KanbanColumnType = {
      id: `column-${Date.now()}`,
      title: 'New column',
      cards: []
    };

    const nextBoard: KanbanBoardType = {
      ...boardState,
      columns: [...boardState.columns, newColumn]
    };

    publishBoard(nextBoard, { type: 'add-column', columnId: newColumn.id });
    onColumnAdd?.(newColumn);
  }

  function handleColumnTitleChange(columnId: string, title: string) {
    const nextBoard: KanbanBoardType = {
      ...boardState,
      columns: boardState.columns.map((column) =>
        column.id === columnId ? { ...column, title } : column
      )
    };

    publishBoard(nextBoard, { type: 'rename-column', columnId, title });
    onColumnTitleChange?.(columnId, title);
  }

  function handleCardTitleChange(columnId: string, cardId: string, title: string) {
    const nextBoard: KanbanBoardType = {
      ...boardState,
      columns: boardState.columns.map((column) =>
        column.id !== columnId
          ? column
          : {
              ...column,
              cards: column.cards.map((card) =>
                card.id === cardId ? { ...card, title, updatedAt: new Date() } : card
              )
            }
      )
    };

    publishBoard(nextBoard, { type: 'rename-card', columnId, cardId, title });
    onCardTitleChange?.(columnId, cardId, title);
  }

  function handleCardArchive(columnId: string, cardId: string) {
    if (!allowCardArchive) return;

    const nextBoard: KanbanBoardType = {
      ...boardState,
      columns: boardState.columns.map((column) => {
        if (column.id !== columnId) return column;

        return {
          ...column,
          cards: column.cards.map((card) =>
            card.id === cardId
              ? { ...card, status: 'archived', updatedAt: new Date() }
              : card
          )
        };
      })
    };

    publishBoard(nextBoard, { type: 'archive-card', columnId, cardId });
    onCardArchive?.(columnId, cardId);
  }

  function handleCardDelete(columnId: string, cardId: string) {
    if (!allowCardDelete) return;

    const nextBoard: KanbanBoardType = {
      ...boardState,
      columns: boardState.columns.map((column) =>
        column.id !== columnId
          ? column
          : {
              ...column,
              cards: column.cards.filter((card) => card.id !== cardId)
            }
      )
    };

    publishBoard(nextBoard, { type: 'delete-card', columnId, cardId });
    onCardDelete?.(columnId, cardId);
  }

  const containerClass = $derived(KanbanBoardStyleManager.getContainerClass());
  const columnContainerClass = $derived(KanbanBoardStyleManager.getColumnContainerClass());
  const buttonContainerClass = $derived(KanbanBoardStyleManager.getButtonContainerClass());
  const addButtonClass = $derived(KanbanBoardStyleManager.getAddButtonClass());
  const iconClass = $derived(KanbanBoardStyleManager.getIconClass());
  const contentContainerClass = $derived(KanbanBoardStyleManager.getContentContainerClass());
</script>

<section class="flex h-full flex-col gap-3">
  {#if boardState.title}
    <header class="px-1">
      <h2 class="text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">{boardState.title}</h2>
      <p class="text-xs text-[var(--color-text-secondary)]">Drag tasks between lanes, edit inline, archive or delete when done.</p>
    </header>
  {/if}

  <div class={containerClass}>
    {#each boardState.columns as column (column.id)}
      <div class={columnContainerClass}>
        <KanbanColumn
          {column}
          droppable={allowReordering}
          editable={allowInlineEdit}
          showArchivedCards={showArchivedCards}
          onAddCard={handleAddCard}
          onCardDrop={handleCardDrop}
          onColumnTitleChange={handleColumnTitleChange}
          onCardTitleChange={handleCardTitleChange}
          onCardArchive={handleCardArchive}
          onCardDelete={handleCardDelete}
        />
      </div>
    {/each}

    {#if allowColumnAdd}
      <div class={buttonContainerClass}>
        <Button
          variant="secondary"
          size="md"
          onclick={handleAddColumn}
          class={addButtonClass}
        >
          <BaseIcon name={Plus} class={iconClass} /> Add Column
        </Button>
      </div>
    {/if}

    {#if content}
      <div class={contentContainerClass}>
        {@render content()}
      </div>
    {/if}
  </div>
</section>





