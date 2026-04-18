import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { TokenSelectionType } from '$stylist/control/type/record/selection-type';

export interface RecipeToggleBaseProps extends StructIntersectAll<[]> {
	disabled?: boolean;
	class?: string;
	size?: TokenSize;
}
