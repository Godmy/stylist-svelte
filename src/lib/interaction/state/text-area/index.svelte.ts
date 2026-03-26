import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { TEXTAREA_PRESET } from '$stylist/interaction/preset/input';
import type { InputStateOptions } from '$stylist/architecture/type/input-state-options/index';


const createTextareaState = (
	props: InputStateOptions & Record<string, unknown>
) => createBaseInputState(TEXTAREA_PRESET, props);

export { createTextareaState };
export default createTextareaState;

export { TEXTAREA_PRESET };





