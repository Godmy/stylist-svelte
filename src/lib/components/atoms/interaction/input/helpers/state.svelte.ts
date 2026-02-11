import { createInputState as createBaseInputState } from '$stylist/design-system/state/input';
import { getCharacterCountState } from '$stylist/utils/input';
import { INPUT_FIELD_PRESET, INPUT_HELPER_PRESET, INPUT_ADDON_PRESET, FORM_HELPER_TEXT_PRESET, FORM_ERROR_MESSAGE_PRESET, CHARACTER_COUNT_PRESET, PIN_INPUT_DIGIT_PRESET } from '$stylist/design-system/classes/input';

type InputStateOptions<V extends string, S extends string> = {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
};

type InputVariant = (typeof INPUT_HELPER_PRESET.variants)[number];
type InputSize = (typeof INPUT_HELPER_PRESET.sizes)[number];

export const createInputHelpersState = (
	props: InputStateOptions<InputVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_HELPER_PRESET, props);

type InputAddonVariant = (typeof INPUT_ADDON_PRESET.variants)[number];
type FormHelperVariant = (typeof FORM_HELPER_TEXT_PRESET.variants)[number];
type FormErrorVariant = (typeof FORM_ERROR_MESSAGE_PRESET.variants)[number];
type CharacterCountVariant = (typeof CHARACTER_COUNT_PRESET.variants)[number];
type PinDigitVariant = (typeof PIN_INPUT_DIGIT_PRESET.variants)[number];

export const createInputAddonState = (
	props: InputStateOptions<InputAddonVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_ADDON_PRESET, props);

export const createFormHelperTextState = (
	props: InputStateOptions<FormHelperVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(FORM_HELPER_TEXT_PRESET, props);

export const createFormErrorMessageState = (
	props: InputStateOptions<FormErrorVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(FORM_ERROR_MESSAGE_PRESET, props);

export const createCharacterCountState = (
	ratio: number,
	props: InputStateOptions<CharacterCountVariant, InputSize> & Record<string, unknown>
) => {
	const state = createBaseInputState(CHARACTER_COUNT_PRESET, props);
	const semanticVariant = getCharacterCountState(ratio);
	const colorClass = CHARACTER_COUNT_PRESET.classes.variant[semanticVariant];
	return {
		...state,
		colorClass
	};
};

export const createPinInputDigitState = (
	props: InputStateOptions<PinDigitVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(PIN_INPUT_DIGIT_PRESET, props);
