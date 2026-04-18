import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { KanbanBoardType, KanbanBoardAction } from '$stylist/management/type/struct/kanban-board';
import type { KanbanColumnType } from '$stylist/management/type/struct/kanban-column';
import type { KanbanCardType } from '$stylist/management/interface/slot/kanban-card-type';
import type { Snippet } from 'svelte';

export interface KanbanBoardStateProps extends StructIntersectAll<[]> {
  board: KanbanBoardType;
  controlled?: boolean;
  allowReordering?: boolean;
  allowColumnAdd?: boolean;
  allowCardAdd?: boolean;
  allowInlineEdit?: boolean;
  allowCardArchive?: boolean;
  allowCardDelete?: boolean;
  showArchivedCards?: boolean;
  onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void;
  onColumnAdd?: (column: KanbanColumnType) => void;
  onCardAdd?: (columnId: string, card: KanbanCardType) => void;
  onColumnTitleChange?: (columnId: string, title: string) => void;
  onCardTitleChange?: (columnId: string, cardId: string, title: string) => void;
  onCardArchive?: (columnId: string, cardId: string) => void;
  onCardDelete?: (columnId: string, cardId: string) => void;
  onBoardChange?: (nextBoard: KanbanBoardType, action: KanbanBoardAction) => void;
  content?: Snippet;
}
