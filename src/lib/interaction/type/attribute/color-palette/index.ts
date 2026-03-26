import type { HTMLAttributes } from 'svelte/elements';

export interface ColorItem {
	name: string;
	value: string;
	category?: string;
}

export interface ColorPaletteProps extends HTMLAttributes<HTMLDivElement> {
	colors: ColorItem[];
	title?: string;
	showLabels?: boolean;
	showValues?: boolean;
	columns?: number;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	onValueInput?: (color: ColorItem) => void;
	onValueChange?: (color: ColorItem) => void;
}
