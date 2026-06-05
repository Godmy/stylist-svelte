import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { HtmlAttributesWithChildren } from '$stylist/information/interface/slot/html-attributes-with-children';
import type { TokenOrientation } from '$stylist/layout/type/enum/orientation';

export interface RecipeRadioButtonGroupProps
	extends StructIntersectAll<
		[Omit<HtmlAttributesWithChildren<HTMLDivElement>, 'size' | 'class' | 'onchange' | 'oninput'>]
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
