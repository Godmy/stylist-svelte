import type { KanbanCardType } from '$stylist/portfolio/type/object/kanban-card/kanbancardtype';

export type KanbanColumnType = {
	id: string;
	title: string;
	description?: string;
	cards: KanbanCardType[];
};
