import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export interface SlotInputGroup {
	htmlFor?: string;
	buttonLabel?: string;
	buttonVariant?: TokenColorTone;
	buttonDisabled?: boolean;
	onButtonClick?: () => void;
	onValueInput?: (value: string) => void;
	onValueChange?: (value: string) => void;
}
