import type { KanbanBoardType } from '$stylist/portfolio/type/object/kanban-board/kanbanboardtype';

export function renameKanbanColumn(
	boardState: KanbanBoardType,
	columnId: string,
	title: string
): KanbanBoardType {
	return {
		...boardState,
		columns: boardState.columns.map((column) =>
			column.id === columnId ? { ...column, title } : column
		)
	};
}
