import { createInputState as createBaseInputState } from '$stylist/design-system/state/input';
import { getCharacterCountState } from '$stylist/utils/input';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/state/input-preset';

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

type InputVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

type InputAddonVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
type FormHelperVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
type FormErrorVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
type CharacterCountVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
type PinDigitVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
const createInputHelpersState = (
	props: InputStateOptions<InputVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_FIELD_PRESET, props);
const createInputAddonState = (
	props: InputStateOptions<InputAddonVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_FIELD_PRESET, props);
const createFormHelperTextState = (
	props: InputStateOptions<FormHelperVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_FIELD_PRESET, props);
const createFormErrorMessageState = (
	props: InputStateOptions<FormErrorVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_FIELD_PRESET, props);

export const createCharacterCountState = (
	ratio: number,
	props: InputStateOptions<CharacterCountVariant, InputSize> & Record<string, unknown>
) => {
	const state = createBaseInputState(INPUT_FIELD_PRESET, props);
	const semanticVariant = getCharacterCountState(ratio);
	const colorClass = INPUT_FIELD_PRESET.classes.variant[semanticVariant];
	return {
		...state,
		colorClass
	};
};
const createPinInputDigitState = (
	props: InputStateOptions<PinDigitVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_FIELD_PRESET, props);

export default createCharacterCountState;

export { INPUT_FIELD_PRESET };



