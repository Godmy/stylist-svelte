/**
 * Label for the mobile booking accordion's collapsed trigger button: an
 * invitation to pick when nothing is selected yet, otherwise a properly
 * pluralized count of what's been picked (Russian has three plural forms).
 */
export function formatAdventureCountLabel(count: number): string {
	if (count <= 0) return 'Выбрать приключение';

	function pluralize(n: number, one: string, few: string, many: string): string {
		const mod10 = n % 10;
		const mod100 = n % 100;
		if (mod10 === 1 && mod100 !== 11) return one;
		if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return few;
		return many;
	}

	return `Найдено ${count} ${pluralize(count, 'приключение', 'приключения', 'приключений')}`;
}

export default formatAdventureCountLabel;
