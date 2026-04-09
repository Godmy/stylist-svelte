import type { KanbanBoardType, KanbanBoardAction } from '$stylist/management/type/struct/kanban-board';
import type { KanbanCardType } from '$stylist/management/type/struct/kanban-card';
import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';

export function cloneKanbanBoard(source: KanbanBoardType): KanbanBoardType {
  return {
    ...source,
    columns: source.columns.map((column) => ({
      ...column,
      cards: [...column.cards]
    }))
  };
}

export function moveKanbanCard(
  boardState: KanbanBoardType,
  cardId: string,
  fromColumnId: string,
  toColumnId: string,
  position: number
): { nextBoard: KanbanBoardType; safePosition: number } {
  const columns = boardState.columns.map((column) => ({ ...column, cards: [...column.cards] }));
  const fromColumn = columns.find((column) => column.id === fromColumnId);
  const toColumn = columns.find((column) => column.id === toColumnId);
  
  if (!fromColumn || !toColumn) {
    return { nextBoard: boardState, safePosition: position };
  }

  const fromIndex = fromColumn.cards.findIndex((card) => card.id === cardId);
  if (fromIndex < 0) {
    return { nextBoard: boardState, safePosition: position };
  }

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

  return { nextBoard: { ...boardState, columns }, safePosition };
}

export function addKanbanCard(
  boardState: KanbanBoardType,
  columnId: string
): { nextBoard: KanbanBoardType; newCard: KanbanCardType } {
  const newCard: KanbanCardType = {
    id: `card-${Date.now()}`,
    title: 'New task',
    description: 'Describe the task',
    priority: 'medium',
    tags: ['new'],
    status: 'todo',
    updatedAt: new Date(),
    order: 0
  };

  const nextBoard: KanbanBoardType = {
    ...boardState,
    columns: boardState.columns.map((column) =>
      column.id === columnId
        ? { ...column, cards: [...column.cards, newCard] }
        : column
    )
  };

  return { nextBoard, newCard };
}

export function addKanbanColumn(
  boardState: KanbanBoardType
): { nextBoard: KanbanBoardType; newColumn: KanbanColumnType } {
  const newColumn: KanbanColumnType = {
    id: `column-${Date.now()}`,
    title: 'New column',
    cards: []
  };

  const nextBoard: KanbanBoardType = {
    ...boardState,
    columns: [...boardState.columns, newColumn]
  };

  return { nextBoard, newColumn };
}

export function renameKanbanColumn(
  boardState: KanbanBoardType,
  columnId: string,
  title: string
): KanbanBoardType {
  return {
    ...boardState,
    columns: boardState.columns.map((column) =>
      column.id === columnId ? { ...column, title } : column
    )
  };
}

export function renameKanbanCard(
  boardState: KanbanBoardType,
  columnId: string,
  cardId: string,
  title: string
): KanbanBoardType {
  return {
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
}

export function archiveKanbanCard(
  boardState: KanbanBoardType,
  columnId: string,
  cardId: string
): KanbanBoardType {
  return {
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
}

export function deleteKanbanCard(
  boardState: KanbanBoardType,
  columnId: string,
  cardId: string
): KanbanBoardType {
  return {
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
}
