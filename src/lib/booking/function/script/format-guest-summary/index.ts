export function formatGuestSummary(input: {
	adults: number;
	seniors?: number;
	childrenTeen?: number;
	children?: number;
	childrenUnder2?: number;
}): string {
	function pluralize(count: number, one: string, few: string, many: string): string {
		const mod10 = count % 10;
		const mod100 = count % 100;
		if (mod10 === 1 && mod100 !== 11) return one;
		if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return few;
		return many;
	}

	const { adults, seniors = 0, childrenTeen = 0, children = 0, childrenUnder2 = 0 } = input;
	const parts: string[] = [];
	if (adults > 0) parts.push(`${adults} ${pluralize(adults, 'взрослый', 'взрослых', 'взрослых')}`);
	if (seniors > 0) {
		parts.push(`${seniors} ${pluralize(seniors, 'пенсионер', 'пенсионера', 'пенсионеров')}`);
	}
	if (childrenTeen > 0) {
		parts.push(`${childrenTeen} ${pluralize(childrenTeen, 'ребёнок', 'ребёнка', 'детей')} 13-18`);
	}
	if (children > 0) {
		parts.push(`${children} ${pluralize(children, 'ребёнок', 'ребёнка', 'детей')} до 13`);
	}
	if (childrenUnder2 > 0) parts.push(`${childrenUnder2} до 2 лет`);

	if (parts.length === 0) {
		return `${adults + seniors + childrenTeen + children + childrenUnder2} гостей`;
	}
	return parts.join(', ');
}

export default formatGuestSummary;
