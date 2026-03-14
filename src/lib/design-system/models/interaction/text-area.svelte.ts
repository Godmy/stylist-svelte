import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction';
import { TEXTAREA_PRESET } from '$stylist/design-system/runtime/input';
import type { InputVariant } from '$stylist/design-system/tokens';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { TextareaStateOptions } from '../../types/interaction/text-area';


const createTextareaState = (
	props: TextareaStateOptions & Record<string, unknown>
) => createBaseInputState(TEXTAREA_PRESET, props);

export { createTextareaState };
export default createTextareaState;

export { TEXTAREA_PRESET };





