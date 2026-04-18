import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { TokenSelectionType } from '$stylist/control/type/record/selection-type';

export interface RecipeActionSegmentedControlProps extends StructIntersectAll<[]> {
	items: string[];
	selectedIndex?: number;
	onValueInput?: (value: number) => void;
	onValueChange?: (value: number) => void;
	/** @deprecated use onValueChange */
	onChange?: (value: number) => void;
	class?: string;
}
