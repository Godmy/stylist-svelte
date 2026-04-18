import type { KanbanBoardType } from '$stylist/management/type/struct/kanban-board';
import type { KanbanCardType } from '$stylist/management/type/struct/kanban-card';

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
      column.id === columnId ? { ...column, cards: [...column.cards, newCard] } : column
    )
  };

  return { nextBoard, newCard };
}
