export function resolveSize(value?: number | string): string {
	if (value === undefined || value === null || value === '') {
		return '';
	}
	return typeof value === 'number' ? `${value}px` : String(value);
}
