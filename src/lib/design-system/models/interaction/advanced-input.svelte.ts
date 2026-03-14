import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/runtime/input';
import type { AdvancedInputStateOptions } from '../../types/interaction/advanced-input';

export function createAdvancedInputState(
	props: AdvancedInputStateOptions & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createAdvancedInputState;


