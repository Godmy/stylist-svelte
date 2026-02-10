import { createInputState as createBaseInputState } from '$stylist/design-system/factory/interaction/input-factory';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/presets';
import type { InputStateOptions } from '$stylist/design-system/presets';

type InputVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

export const createInputFieldState = (
	props: InputStateOptions<InputVariant, InputSize> & Record<string, unknown>
) => createBaseInputState(INPUT_FIELD_PRESET, props);

export const createInputGroupState = (className = '') => ({
	containerClasses: 'flex rounded-md shadow-sm',
	inputClasses: `rounded-none rounded-l-md focus:z-10 border-r-0 ${className}`.trim(),
	buttonClasses: 'rounded-none rounded-r-md -ml-px'
});
