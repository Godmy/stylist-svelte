import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction/index';
import { TEXTAREA_PRESET } from '$stylist/design-system/runtime/input';
import type { InputStateOptions } from '$stylist/design-system/runtime/types';


const createTextareaState = (
	props: InputStateOptions & Record<string, unknown>
) => createBaseInputState(TEXTAREA_PRESET, props);

export { createTextareaState };
export default createTextareaState;

export { TEXTAREA_PRESET };





