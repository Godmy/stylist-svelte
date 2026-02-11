import { createInputState as createBaseInputState } from '$stylist/design-system/state/input';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/classes/input';
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

export const createInputState = (
	props: InputStateOptions<InputVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_FIELD_PRESET, props);
