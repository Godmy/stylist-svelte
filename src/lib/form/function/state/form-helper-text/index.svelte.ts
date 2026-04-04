import { createFormHelperTextState as createFormHelperTextStateImpl } from '$stylist/input/function/script/create-form-helper-text-state';

export function createFormHelperTextState(
	...args: Parameters<typeof createFormHelperTextStateImpl>
): ReturnType<typeof createFormHelperTextStateImpl> {
	return createFormHelperTextStateImpl(...args);
}

export default createFormHelperTextState;



