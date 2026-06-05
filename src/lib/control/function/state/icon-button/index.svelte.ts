import createButtonStateImpl from '$stylist/control/function/state/button/index.svelte';

export function createIconButtonState(
	...args: Parameters<typeof createButtonStateImpl>
): ReturnType<typeof createButtonStateImpl> {
	return createButtonStateImpl(...args);
}

export default createIconButtonState;
