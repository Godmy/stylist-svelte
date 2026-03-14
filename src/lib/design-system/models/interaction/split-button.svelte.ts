import { createButtonState as createButtonStateImpl } from './button.svelte';

export function createSplitButtonState(
	...args: Parameters<typeof createButtonStateImpl>
): ReturnType<typeof createButtonStateImpl> {
	return createButtonStateImpl(...args);
}

export default createSplitButtonState;







