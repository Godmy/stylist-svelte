import { createButtonState as createButtonStateImpl } from '$stylist/design-system/models/interaction/button.svelte';

export function createSplitButtonState(
	...args: Parameters<typeof createButtonStateImpl>
): ReturnType<typeof createButtonStateImpl> {
	return createButtonStateImpl(...args);
}

export default createSplitButtonState;







