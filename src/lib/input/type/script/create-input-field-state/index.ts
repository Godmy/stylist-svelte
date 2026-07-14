import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize as InputSize } from '$stylist/theme/type/alias/size';

export type InputStateOptions<V extends string = TokenAppearance, S extends string = InputSize> = {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
};
