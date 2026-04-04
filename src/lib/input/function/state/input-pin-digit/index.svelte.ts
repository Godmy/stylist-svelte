import { createPinInputDigitState as createPinInputDigitStateImpl } from '$stylist/input/function/script/create-pin-input-digit-state';

export function createPinInputDigitState(
	...args: Parameters<typeof createPinInputDigitStateImpl>
): ReturnType<typeof createPinInputDigitStateImpl> {
	return createPinInputDigitStateImpl(...args);
}

export default createPinInputDigitState;



