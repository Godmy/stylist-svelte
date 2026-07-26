import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';

export interface SlotInputGroup extends Omit<SlotInputBase, 'type'> {
	label?: string;
	htmlFor?: string;
	value?: string;
	buttonLabel?: string;
	buttonVariant?: TokenColorTone;
	buttonDisabled?: boolean;
	onButtonClick?: () => void;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
}
