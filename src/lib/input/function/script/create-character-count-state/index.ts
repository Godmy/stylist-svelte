import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import { createInputFieldState } from '$stylist/input/function/script/create-input-field-state';
import type { InputStateOptions } from '$stylist/input/type/script/create-input-field-state';
import { resolveCharacterCountState } from '$stylist/input/function/script/resolve-character-count-state';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export function createCharacterCountState(
	ratio: number,
	props: InputStateOptions<TokenAppearance, TokenSize> & Record<string, unknown>
) {
	const state = createInputFieldState(props);
	const variant = resolveCharacterCountState(ratio);
	const colorClass = INPUT_FIELD_PRESET.classes.variant[variant];

	return {
		...state,
		colorClass
	};
}
