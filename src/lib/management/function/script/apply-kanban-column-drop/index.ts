import { parseDragPayload } from '$stylist/management/function/script/kanban-column';

export function applyKanbanColumnDrop(
  e: DragEvent,
  droppable: boolean,
  columnId: string,
  position: number,
  onCardDrop?: (cardId: string, fromColumnId: string, toColumnId: string, position: number) => void
): void {
  if (!droppable || !onCardDrop) return;
  e.preventDefault();

  const payload = parseDragPayload(e);
  if (!payload) return;

  onCardDrop(payload.cardId, payload.fromColumnId, columnId, position);
}
