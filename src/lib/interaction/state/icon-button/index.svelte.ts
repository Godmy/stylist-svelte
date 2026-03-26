import { createButtonState as createButtonStateImpl } from '$stylist/interaction/state/button';

export function createIconButtonState(
	...args: Parameters<typeof createButtonStateImpl>
): ReturnType<typeof createButtonStateImpl> {
	return createButtonStateImpl(...args);
}

export default createIconButtonState;







