import { createInputAddonState as createInputAddonStateImpl } from '$stylist/input/function/script/create-input-addon-state';

export function createInputAddonState(
	...args: Parameters<typeof createInputAddonStateImpl>
): ReturnType<typeof createInputAddonStateImpl> {
	return createInputAddonStateImpl(...args);
}

export default createInputAddonState;



