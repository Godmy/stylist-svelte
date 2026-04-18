import type { KanbanBoardType } from '$stylist/management/type/struct/kanban-board';

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
