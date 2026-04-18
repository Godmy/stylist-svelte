import type { HTMLInputAttributes, HTMLTextareaAttributes, HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ChildrenProp, ClassProp, ContentProp } from '$stylist/information/type/struct';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot';
import type {
	InputAttributesBase,
	InputFieldBaseProps,
	InputFieldRequiredProps,
	InputLabelProps,
	InputValidationProps,
	InputValueProps
} from '$stylist/input/type/struct';
import type { TextInputBaseProps } from '$stylist/typography/type/struct/text-input-base-props';

export interface SlotInputDouble {
	label1?: string;
	label2?: string;
	id1?: string;
	id2?: string;
	value1?: string;
	value2?: string;
	placeholder1?: string;
	placeholder2?: string;
	type1?: HTMLInputAttributes['type'];
	type2?: HTMLInputAttributes['type'];
	disabled1?: boolean;
	disabled2?: boolean;
	errors1?: string[];
	errors2?: string[];
	required1?: boolean;
	required2?: boolean;
	variant?: TokenAppearance;
	size?: TokenSize;
	class?: string;
}
