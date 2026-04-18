import type { KanbanBoardType } from '$stylist/management/type/struct/kanban-board';
import type { KanbanCardType } from '$stylist/management/type/struct/kanban-card';

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

  const fromIndex = fromColumn.cards.findIndex((card: KanbanCardType) => card.id === cardId);
  if (fromIndex < 0) {
    return { nextBoard: boardState, safePosition: position };
  }

  const [card] = fromColumn.cards.splice(fromIndex, 1);
  const activeTargetCards = toColumn.cards.filter((item: KanbanCardType) => item.status !== 'archived');
  const archivedTargetCards = toColumn.cards.filter((item: KanbanCardType) => item.status === 'archived');
  const safePosition = Math.max(0, Math.min(position, activeTargetCards.length));
  const normalizedCard: KanbanCardType = { ...card, updatedAt: new Date() };

  activeTargetCards.splice(safePosition, 0, normalizedCard);
  toColumn.cards = [...activeTargetCards, ...archivedTargetCards];

  return { nextBoard: { ...boardState, columns }, safePosition };
}
