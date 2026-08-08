export function formatMediaDate(date: Date): string {
	return date.toLocaleDateString([], {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}
