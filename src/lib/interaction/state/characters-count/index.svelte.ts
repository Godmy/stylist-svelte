import { createCharacterCountState as createCharacterCountStateImpl } from '$stylist/interaction/function/input-state/index';

export function createCharacterCountState(
	...args: Parameters<typeof createCharacterCountStateImpl>
): ReturnType<typeof createCharacterCountStateImpl> {
	return createCharacterCountStateImpl(...args);
}

export default createCharacterCountState;


