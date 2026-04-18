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
