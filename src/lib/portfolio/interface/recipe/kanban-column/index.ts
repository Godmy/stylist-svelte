import type { SlotContent } from '$stylist/theme/interface/slot/content';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { KanbanColumnType } from '$stylist/portfolio/type/struct/kanban-column';
export interface RecipeKanbanColumn extends ComputeIntersectAll<[SlotContent]> {
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
}
