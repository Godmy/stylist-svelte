import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';

export type KanbanBoardType = {
  id: string;
	title?: string;
	columns: KanbanColumnType[];
};
