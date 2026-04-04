import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';

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

export function createInputFieldState(
	props: InputStateOptions<TokenAppearance, InputSize> & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}
