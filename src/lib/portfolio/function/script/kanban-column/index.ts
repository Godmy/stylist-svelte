export function parseDragPayload(e: DragEvent): {
	cardId: string;
	fromColumnId: string;
} | null {
	const raw = e.dataTransfer?.getData('application/json') || e.dataTransfer?.getData('text/plain');
	if (!raw) return null;

	try {
		const payload = JSON.parse(raw) as Partial<{
			cardId: string;
			fromColumnId: string;
		}>;
		if (!payload.cardId || !payload.fromColumnId) return null;
		return { cardId: payload.cardId, fromColumnId: payload.fromColumnId };
	} catch {
		return null;
	}
}
