import { createInputFieldState, type InputStateOptions } from '$stylist/input/function/script/create-input-field-state';
import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';

type TokenAppearance = (typeof INPUT_FIELD_PRESET.variants)[number];
type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

export function createInputAddonState(
	props: InputStateOptions<TokenAppearance, InputSize> & Record<string, unknown>
) {
	return createInputFieldState(props);
}
