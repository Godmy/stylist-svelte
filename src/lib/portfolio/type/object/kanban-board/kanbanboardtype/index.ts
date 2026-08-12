import type { KanbanColumnType } from '$stylist/portfolio/type/object/kanban-column';

export type KanbanBoardType = {
	id: string;
	title?: string;
	columns: KanbanColumnType[];
};
