import { createFormHelperTextState as createFormHelperTextStateImpl } from '$stylist/design-system/utils/model-helpers/input-state';

export function createFormHelperTextState(
	...args: Parameters<typeof createFormHelperTextStateImpl>
): ReturnType<typeof createFormHelperTextStateImpl> {
	return createFormHelperTextStateImpl(...args);
}

export default createFormHelperTextState;


