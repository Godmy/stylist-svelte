export const EXCURSION_MOTIFS: Record<
	string,
	{ id: string; d: string; fill?: string; stroke?: string; strokeWidth?: number }[]
> = {
	'ella-tea-mountains': [{ id: 'terraces', d: 'M2 20 6 12 9 17 13 8 17 15 22 20Z' }],
	'mirissa-whales': [
		{
			id: 'whale',
			d: 'M2 15Q4 8 12 8Q14 8 15 6Q16 8 15 10Q20 10 22 13Q18 16 13 15Q10 18 6 17Q3 17 2 15Z'
		}
	],
	'yala-wildlife': [
		{
			id: 'elephant',
			d: 'M4 10Q4 4 12 4Q20 4 20 11Q20 15 16 16L16 20L13 20L13 16Q10 16 8 14L8 18L5 18L5 13Q3 12 4 10Z'
		}
	],
	'galle-culture': [
		{
			id: 'lighthouse',
			d: 'M11 2H13V4H15V6H9V4H11ZM10 6H14L15 19H9ZM8 19H16V21H8Z'
		}
	]
};
