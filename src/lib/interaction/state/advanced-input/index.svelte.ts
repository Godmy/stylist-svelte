import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { INPUT_FIELD_PRESET } from '$stylist/interaction/preset/input';
import type { InputStateOptions } from '$stylist/architecture/type/input-state-options/index';

export function createAdvancedInputState(
	props: InputStateOptions & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createAdvancedInputState;


