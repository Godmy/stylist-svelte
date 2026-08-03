import type { SlotPinInputDigit } from '$stylist/input/interface/slot/pin-input-digit';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export interface RecipePinInputDigit
	extends ComputeIntersectAll<[SlotPinInputDigit, { focused?: boolean; invalid?: boolean; variant?: TokenColorTone; size?: 'sm' | 'md' | 'lg' }]> {}
