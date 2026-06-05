import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { InputLabelProps } from '$stylist/input/type/struct/input-label-props';
import type { InputValueProps } from '$stylist/input/type/struct/input-value-props';
import type { SlotInputBase } from '$stylist/input/interface/slot/input-base';

export interface SlotInputGroup
	extends Omit<SlotInputBase, 'type'>,
		InputLabelProps,
		Omit<InputValueProps, 'defaultValue'> {
	buttonLabel?: string;
	buttonVariant?: TokenAppearance;
	buttonDisabled?: boolean;
	onButtonClick?: () => void;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
}
