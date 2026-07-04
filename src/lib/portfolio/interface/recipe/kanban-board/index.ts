import type { SlotContent } from '$stylist/theme/interface/slot/content';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { KanbanBoardType } from '$stylist/portfolio/type/struct/kanban-board/kanbanboardtype';
import type { KanbanBoardAction } from '$stylist/portfolio/type/struct/kanban-board/kanbanboardaction';
import type { KanbanColumnType } from '$stylist/portfolio/type/struct/kanban-column';
import type { KanbanCardType } from '$stylist/portfolio/type/struct/kanban-card/kanbancardtype';
export interface RecipeKanbanBoard extends ComputeIntersectAll<[SlotContent]> {
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
}
