import { createFormErrorMessageState as createFormErrorMessageStateImpl } from '$stylist/design-system/utils/model-helpers/input-state';

export function createFormErrorMessageState(
	...args: Parameters<typeof createFormErrorMessageStateImpl>
): ReturnType<typeof createFormErrorMessageStateImpl> {
	return createFormErrorMessageStateImpl(...args);
}

export default createFormErrorMessageState;


