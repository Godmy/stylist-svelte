import type { HTMLTextareaAttributes } from 'svelte/elements';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

import type { SlotInputCore } from '$stylist/input/interface/slot/input-core';
import type { SlotInputWithLabel } from '$stylist/input/interface/slot/input-with-label';
import type { SlotInputWithValidation } from '$stylist/input/interface/slot/input-with-validation';
import type { SlotInputWithHelper } from '$stylist/input/interface/slot/input-with-helper';

export interface SlotTextarea
	extends SlotInputCore<TokenColorTone, TokenSize>,
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
