import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import { createInputFieldState, type InputStateOptions } from '$stylist/input/function/script/create-input-field-state';
import { resolveCharacterCountState } from '$stylist/input/function/script/resolve-character-count-state';

type TokenAppearance = (typeof INPUT_FIELD_PRESET.variants)[number];
type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

export function createCharacterCountState(
	ratio: number,
	props: InputStateOptions<TokenAppearance, InputSize> & Record<string, unknown>
) {
	const state = createInputFieldState(props);
	const variant = resolveCharacterCountState(ratio);
	const colorClass = INPUT_FIELD_PRESET.classes.variant[variant];

	return {
		...state,
		colorClass
	};
}
