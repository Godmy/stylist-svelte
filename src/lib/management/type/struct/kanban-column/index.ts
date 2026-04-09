import type { KanbanCardType } from '$stylist/management/type/struct/kanban-card';

export type KanbanColumnType = {
  id: string;
  title: string;
  description?: string;
  cards: KanbanCardType[];
};
