import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import type { InputStateOptions } from '$stylist/input/type/script/create-input-field-state';

export function createInputFieldState(
	props: InputStateOptions & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}
