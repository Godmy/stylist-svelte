import { createFormHelperTextState as createFormHelperTextStateImpl } from '$stylist/design-system/runtime/input-state/index';

export function createFormHelperTextState(
	...args: Parameters<typeof createFormHelperTextStateImpl>
): ReturnType<typeof createFormHelperTextStateImpl> {
	return createFormHelperTextStateImpl(...args);
}

export default createFormHelperTextState;


