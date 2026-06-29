import type { HTMLAttributes } from 'svelte/elements';
import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeRadioButtonGroupProps
	extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'size' | 'class' | 'onchange' | 'oninput'>,
			SlotChildren
		]
	> {
	value?: string;
	disabled?: boolean;
	orientation?: TokenOrientation;
	options: Array<{ value: string; label: string; disabled?: boolean }>;
	optionClass?: string;
	labelClass?: string;
	radioClass?: string;
	name?: string;
	class?: string;
	required?: boolean;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
}
