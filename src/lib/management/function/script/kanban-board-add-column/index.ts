import type { KanbanBoardType } from '$stylist/management/type/struct/kanban-board';
import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';

export function addKanbanColumn(
  boardState: KanbanBoardType
): { nextBoard: KanbanBoardType; newColumn: KanbanColumnType } {
  const newColumn: KanbanColumnType = {
    id: `column-${Date.now()}`,
    title: 'New column',
    cards: []
  };

  return {
    nextBoard: { ...boardState, columns: [...boardState.columns, newColumn] },
    newColumn
  };
}
