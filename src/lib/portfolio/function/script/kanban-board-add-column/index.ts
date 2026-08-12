import type { KanbanBoardType } from '$stylist/portfolio/type/object/kanban-board/kanbanboardtype';
import type { KanbanColumnType } from '$stylist/portfolio/type/object/kanban-column';

export function addKanbanColumn(boardState: KanbanBoardType): {
	nextBoard: KanbanBoardType;
	newColumn: KanbanColumnType;
} {
	const newColumn: KanbanColumnType = {
		id: `column-${Date.now()}`,
		title: 'New column',
		cards: []
	};

	return {
		nextBoard: { ...boardState, columns: [...boardState.columns, newColumn] },
		newColumn
	};
}
