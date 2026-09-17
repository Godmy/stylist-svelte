export const EXPERIENCE_FILTER_MOTIFS: Record<
	string,
	{ id: string; d: string; fill?: string; stroke?: string; strokeWidth?: number }[]
> = {
	'hills-mountains': [{ id: 'peaks', d: 'M2 19 9 6 13 12 17 4 22 19Z' }],
	'waterfalls-rivers': [
		{
			id: 'stream-left',
			d: 'M8 2C10 5 6 8 8 11C10 14 6 17 8 20',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2
		},
		{
			id: 'stream-right',
			d: 'M15 2C17 5 13 8 15 11C17 14 13 17 15 20',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2
		}
	],
	'ocean-fishing': [
		{
			id: 'wave',
			d: 'M2 15Q6 11 10 15T18 15T24 15',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: 2
		}
	],
	'plants-parks': [{ id: 'tree', d: 'M12 2 7 11H10L5 18H11V22H13V18H19L14 11H17Z' }],
	wildlife: [
		{
			id: 'paw',
			d: 'M8.5 14A3.5 3.5 0 1 0 15.5 14A3.5 3.5 0 1 0 8.5 14ZM4.7 8A1.8 1.8 0 1 0 8.3 8A1.8 1.8 0 1 0 4.7 8ZM9.7 5A1.8 1.8 0 1 0 13.3 5A1.8 1.8 0 1 0 9.7 5ZM14.7 7A1.8 1.8 0 1 0 18.3 7A1.8 1.8 0 1 0 14.7 7Z'
		}
	],
	culture: [{ id: 'arch', d: 'M4 20V11A8 8 0 0 1 20 11V20Z' }],
	popular: [
		{
			id: 'star',
			d: 'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z'
		}
	],
	extreme: [{ id: 'bolt', d: 'M13 2 3 14h7l-1 8 10-12h-7l1-8z' }]
};
