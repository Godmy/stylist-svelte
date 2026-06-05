import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';

export interface SlotInputPassword extends Omit<SlotInputBase, 'type'> {
	showPassword?: boolean;
	allowTogglePassword?: boolean;
	showPasswordStrength?: boolean;
}
