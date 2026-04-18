import type { KanbanBoardType } from '$stylist/management/type/struct/kanban-board';

export function cloneKanbanBoard(source: KanbanBoardType): KanbanBoardType {
  return {
    ...source,
    columns: source.columns.map((column) => ({
      ...column,
      cards: [...column.cards]
    }))
  };
}
