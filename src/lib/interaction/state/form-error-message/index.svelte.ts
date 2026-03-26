import { createFormErrorMessageState as createFormErrorMessageStateImpl } from '$stylist/interaction/function/input-state/index';

export function createFormErrorMessageState(
	...args: Parameters<typeof createFormErrorMessageStateImpl>
): ReturnType<typeof createFormErrorMessageStateImpl> {
	return createFormErrorMessageStateImpl(...args);
}

export default createFormErrorMessageState;


