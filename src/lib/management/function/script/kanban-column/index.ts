import type { DragPayload } from '$stylist/management/type/struct/drag-payload';

export function parseDragPayload(e: DragEvent): DragPayload | null {
  const raw = e.dataTransfer?.getData('application/json') || e.dataTransfer?.getData('text/plain');
  if (!raw) return null;

  try {
    const payload = JSON.parse(raw) as Partial<DragPayload>;
    if (!payload.cardId || !payload.fromColumnId) return null;
    return { cardId: payload.cardId, fromColumnId: payload.fromColumnId };
  } catch {
    return null;
  }
}

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
