import type { KanbanBoardType } from '$stylist/portfolio/type/object/kanban-board/kanbanboardtype';

export function archiveKanbanCard(
	boardState: KanbanBoardType,
	columnId: string,
	cardId: string
): KanbanBoardType {
	return {
		...boardState,
		columns: boardState.columns.map((column) => {
			if (column.id !== columnId) return column;

			return {
				...column,
				cards: column.cards.map((card) =>
					card.id === cardId ? { ...card, status: 'archived', updatedAt: new Date() } : card
				)
			};
		})
	};
}
