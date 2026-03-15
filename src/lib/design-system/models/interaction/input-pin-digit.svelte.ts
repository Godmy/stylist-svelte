import { createPinInputDigitState as createPinInputDigitStateImpl } from '$stylist/design-system/runtime/input-state';

export function createPinInputDigitState(
	...args: Parameters<typeof createPinInputDigitStateImpl>
): ReturnType<typeof createPinInputDigitStateImpl> {
	return createPinInputDigitStateImpl(...args);
}

export default createPinInputDigitState;


