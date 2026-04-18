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
import type { SlotInputCore } from '$stylist/input/interface/slot/input-core';
import type { SlotInputWithLabel } from '$stylist/input/interface/slot/input-with-label';
import type { SlotInputWithValidation } from '$stylist/input/interface/slot/input-with-validation';
import type { SlotInputWithHelper } from '$stylist/input/interface/slot/input-with-helper';

export interface SlotTextarea
	extends SlotInputCore<TokenAppearance, TokenSize>,
		SlotInputWithLabel,
		SlotInputWithValidation,
		SlotInputWithHelper,
		Omit<HTMLTextareaAttributes, 'class' | 'disabled' | 'id' | 'autocomplete'> {
	value?: string;
	placeholder?: string;
	rows?: number;
	autocomplete?: HTMLTextareaAttributes['autocomplete'];
	name?: string;
	maxlength?: number;
	minlength?: number;
	readonly?: boolean;
	required?: boolean;
	autoResize?: boolean;
}
