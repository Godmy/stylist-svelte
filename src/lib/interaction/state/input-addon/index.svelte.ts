import { createInputAddonState as createInputAddonStateImpl } from '$stylist/interaction/function/input-state/index';

export function createInputAddonState(
	...args: Parameters<typeof createInputAddonStateImpl>
): ReturnType<typeof createInputAddonStateImpl> {
	return createInputAddonStateImpl(...args);
}

export default createInputAddonState;


