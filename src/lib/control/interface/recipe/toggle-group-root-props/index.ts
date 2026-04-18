import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HTMLAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';
import type { TokenSelectionType } from '$stylist/control/type/record/selection-type';

export interface RecipeToggleGroupRootProps extends StructIntersectAll<[Omit<HTMLButtonAttributes, 'size' | 'class' | 'type'>]> {
	value?: string;
	disabled?: boolean;
	orientation?: TokenOrientation;
	type?: TokenSelectionType;
	class?: string;
	onValueChange?: (event: CustomEvent<{ value: string | string[] | null }>) => void;
}
