import { createCharacterCountState as createCharacterCountStateImpl } from '$stylist/input/function/script/create-character-count-state';

export function createCharacterCountState(
	...args: Parameters<typeof createCharacterCountStateImpl>
): ReturnType<typeof createCharacterCountStateImpl> {
	return createCharacterCountStateImpl(...args);
}

export default createCharacterCountState;



