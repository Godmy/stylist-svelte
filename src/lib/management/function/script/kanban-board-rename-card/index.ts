import type { KanbanBoardType } from '$stylist/management/type/struct/kanban-board';

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
