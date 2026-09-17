export function formatResultsCount(count: number, selectedLabels: string[] = []): string {
	if (count === 0) return 'Пока нет точного совпадения';
	if (selectedLabels.length === 0) return `${count} приключений ждут вас`;
	if (selectedLabels.length === 1) return `${count} приключений с темой «${selectedLabels[0]}»`;
	return `${count} приключений совпали`;
}
