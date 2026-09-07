import type { KanbanBoardType } from '$stylist/portfolio/type/object/kanban-board/kanbanboardtype';

export function deleteKanbanCard(
	boardState: KanbanBoardType,
	columnId: string,
	cardId: string
): KanbanBoardType {
	return {
		...boardState,
		columns: boardState.columns.map((column) =>
			column.id !== columnId
				? column
				: {
						...column,
						cards: column.cards.filter((card) => card.id !== cardId)
					}
		)
	};
}
