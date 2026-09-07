import type { KanbanBoardType } from '$stylist/portfolio/type/object/kanban-board/kanbanboardtype';

export function cloneKanbanBoard(source: KanbanBoardType): KanbanBoardType {
	return {
		...source,
		columns: source.columns.map((column) => ({
			...column,
			cards: [...column.cards]
		}))
	};
}
