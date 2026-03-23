import { INPUT_FIELD_PRESET } from '$stylist/design-system/runtime/input';
import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction/index';
import { getCharacterCountState } from '$stylist/design-system/utils/input';

type TokenAppearance = (typeof INPUT_FIELD_PRESET.variants)[number];
type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

type InputStateOptions<V extends string = TokenAppearance, S extends string = InputSize> = {
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

export function createInputAddonState(
	props: InputStateOptions<TokenAppearance, InputSize> & Record<string, unknown>
) {
	return createInputFieldState(props);
}

export function createFormHelperTextState(
	props: InputStateOptions<TokenAppearance, InputSize> & Record<string, unknown>
) {
	return createInputFieldState(props);
}

export function createFormErrorMessageState(
	props: InputStateOptions<TokenAppearance, InputSize> & Record<string, unknown>
) {
	return createInputFieldState(props);
}

export function createCharacterCountState(
	ratio: number,
	props: InputStateOptions<TokenAppearance, InputSize> & Record<string, unknown>
) {
	const state = createInputFieldState(props);
	const variant = getCharacterCountState(ratio);
	const colorClass = INPUT_FIELD_PRESET.classes.variant[variant];

	return {
		...state,
		colorClass
	};
}

export function createPinInputDigitState(
	props: InputStateOptions<TokenAppearance, InputSize> & Record<string, unknown>
) {
	return createInputFieldState(props);
}

export { INPUT_FIELD_PRESET };
