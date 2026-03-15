import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/runtime/input';
import type { InputVariant } from '$stylist/design-system/tokens/interaction/variants';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { InputStateOptions } from '../../runtime/types';

export function createFileInputState(
	props: InputStateOptions<InputVariant, ComponentSize> & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createFileInputState;






