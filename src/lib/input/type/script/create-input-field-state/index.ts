import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';

type TokenAppearance = (typeof INPUT_FIELD_PRESET.variants)[number];
type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

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
