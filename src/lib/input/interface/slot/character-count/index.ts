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
import type { SlotInputHelper } from '$stylist/input/interface/slot/input-helper';

export interface SlotCharacterCount extends SlotInputHelper<HTMLDivElement> {
	current?: number;
	max?: number;
	showPercentage?: boolean;
}
