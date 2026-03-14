import { createButtonState as createButtonStateImpl } from './button.svelte';

export function createIconButtonState(
	...args: Parameters<typeof createButtonStateImpl>
): ReturnType<typeof createButtonStateImpl> {
	return createButtonStateImpl(...args);
}

export default createIconButtonState;







