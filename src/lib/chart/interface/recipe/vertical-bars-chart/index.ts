

export interface RecipeVerticalBarsChart {
	title?: string;
	items: {
	id: string;
	label: string;
	valueLabel?: string | number;
	heightPercent: number;
	color?: string;
	minHeightPercent?: number;
	ariaLabel?: string;
}[];
	height?: string;
	barWidth?: string;
	gap?: string;
	color?: string;
	class?: string;
}
