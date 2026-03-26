import { createPinInputDigitState as createPinInputDigitStateImpl } from '$stylist/interaction/function/input-state/index';

export function createPinInputDigitState(
	...args: Parameters<typeof createPinInputDigitStateImpl>
): ReturnType<typeof createPinInputDigitStateImpl> {
	return createPinInputDigitStateImpl(...args);
}

export default createPinInputDigitState;


