import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/runtime/input';
import type { InputTextStateOptions } from '../../types/interaction/input-text';

export function createInputTextState(
	props: InputTextStateOptions & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createInputTextState;



