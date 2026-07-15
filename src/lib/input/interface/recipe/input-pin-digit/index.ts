import type { SlotPinInputDigit } from '$stylist/input/interface/slot/pin-input-digit';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLInputAttributes } from 'svelte/elements';

export interface RecipePinInputDigit
	extends ComputeIntersectAll<
		[
			SlotPinInputDigit,
			Omit<
				HTMLInputAttributes,
				'size' | 'class' | 'onchange' | 'onfocus' | 'onblur' | 'onkeydown'
			>,
			{ focused?: boolean; invalid?: boolean; variant?: string; size?: 'sm' | 'md' | 'lg' }
		]
	> {}
