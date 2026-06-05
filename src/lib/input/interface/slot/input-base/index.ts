import type { HTMLInputAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

import type { SlotInputCore } from '$stylist/input/interface/slot/input-core';
import type { SlotInputWithLabel } from '$stylist/input/interface/slot/input-with-label';
import type { SlotInputWithValidation } from '$stylist/input/interface/slot/input-with-validation';
import type { SlotInputWithHelper } from '$stylist/input/interface/slot/input-with-helper';

export interface SlotInputBase<V extends string = TokenAppearance, S extends string = TokenSize>
	extends SlotInputCore<V, S>,
		SlotInputWithLabel,
		SlotInputWithValidation,
		SlotInputWithHelper,
		Omit<HTMLInputAttributes, 'size' | 'class' | 'disabled' | 'id' | 'autocomplete'> {
	type?: HTMLInputAttributes['type'];
	value?: string;
	placeholder?: string;
	min?: number | string;
	max?: number | string;
	step?: number | string;
	autofocus?: boolean;
	autocomplete?: HTMLInputAttributes['autocomplete'];
	name?: string;
	pattern?: string;
	maxlength?: number;
	minlength?: number;
	readonly?: boolean;
	required?: boolean;
}
