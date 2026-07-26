import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TokenSize as InputSize } from '$stylist/theme/type/alias/size';

export type InputStateOptions<V extends string = TokenColorTone, S extends string = InputSize> = {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
};
