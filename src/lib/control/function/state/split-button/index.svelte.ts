import { createButtonState as createButtonStateImpl } from '$stylist/control/function/state/button';

export function createSplitButtonState(
	...args: Parameters<typeof createButtonStateImpl>
): ReturnType<typeof createButtonStateImpl> {
	return createButtonStateImpl(...args);
}

export default createSplitButtonState;







