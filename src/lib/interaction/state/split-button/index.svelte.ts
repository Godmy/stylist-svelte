import { createButtonState as createButtonStateImpl } from '$stylist/interaction/state/button';

export function createSplitButtonState(
	...args: Parameters<typeof createButtonStateImpl>
): ReturnType<typeof createButtonStateImpl> {
	return createButtonStateImpl(...args);
}

export default createSplitButtonState;







