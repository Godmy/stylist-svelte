import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';
import type { Snippet } from 'svelte';

export interface KanbanColumnStateProps extends StructIntersectAll<[]> {
  column: KanbanColumnType;
  droppable?: boolean;
  editable?: boolean;
  showArchivedCards?: boolean;
  onAddCard?: (columnId: string) => void;
  onCardDrop?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void;
  onColumnTitleChange?: (columnId: string, title: string) => void;
  onCardTitleChange?: (columnId: string, cardId: string, title: string) => void;
  onCardDelete?: (columnId: string, cardId: string) => void;
  onCardArchive?: (columnId: string, cardId: string) => void;
  content?: Snippet;
}
