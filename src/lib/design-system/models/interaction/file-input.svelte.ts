import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/runtime/input';
import type { InputStateOptions, InputSize, InputVariant } from '../../types/interaction/file-input';

export function createFileInputState(
	props: InputStateOptions<InputVariant, InputSize> & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createFileInputState;






