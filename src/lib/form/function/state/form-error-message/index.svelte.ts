import { createFormErrorMessageState as createFormErrorMessageStateImpl } from '$stylist/input/function/script/create-form-error-message-state';

export function createFormErrorMessageState(
	...args: Parameters<typeof createFormErrorMessageStateImpl>
): ReturnType<typeof createFormErrorMessageStateImpl> {
	return createFormErrorMessageStateImpl(...args);
}

export default createFormErrorMessageState;



