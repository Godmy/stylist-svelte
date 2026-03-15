import { createInputAddonState as createInputAddonStateImpl } from '$stylist/design-system/runtime/input-state';

export function createInputAddonState(
	...args: Parameters<typeof createInputAddonStateImpl>
): ReturnType<typeof createInputAddonStateImpl> {
	return createInputAddonStateImpl(...args);
}

export default createInputAddonState;


