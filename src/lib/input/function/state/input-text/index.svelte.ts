import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import type { InputStateOptions } from '$stylist/layout/type/struct/component-state';

export function createInputTextState(
	props: InputStateOptions & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createInputTextState;



