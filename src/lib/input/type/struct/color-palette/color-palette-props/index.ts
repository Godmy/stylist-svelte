import type { HTMLAttributes } from 'svelte/elements';
import type { ColorItem } from '../color-item';

export type ColorPaletteProps = HTMLAttributes<HTMLDivElement> & {
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
