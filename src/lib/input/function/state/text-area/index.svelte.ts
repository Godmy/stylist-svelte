import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { TEXTAREA_PRESET } from '$stylist/input/preset/input';
import type { InputStateOptions } from '$stylist/layout/type/struct/component-state';


const createTextareaState = (
	props: InputStateOptions & Record<string, unknown>
) => createBaseInputState(TEXTAREA_PRESET, props);

export { createTextareaState };
export default createTextareaState;

export { TEXTAREA_PRESET };





