export function resolveFileSelectionLabel(value: File | File[] | null | undefined): string {
	if (!value) return '';
	if (Array.isArray(value)) {
		return value.length > 0 ? `${value.length} file(s) selected` : '';
	}
	return value.name || '';
}

export const getFileSelectionLabel = resolveFileSelectionLabel;
