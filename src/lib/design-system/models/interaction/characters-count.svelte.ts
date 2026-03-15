import { createCharacterCountState as createCharacterCountStateImpl } from '$stylist/design-system/runtime/input-state';

export function createCharacterCountState(
	...args: Parameters<typeof createCharacterCountStateImpl>
): ReturnType<typeof createCharacterCountStateImpl> {
	return createCharacterCountStateImpl(...args);
}

export default createCharacterCountState;


