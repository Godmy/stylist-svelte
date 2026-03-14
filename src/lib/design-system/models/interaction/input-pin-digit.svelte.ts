import { createPinInputDigitState as createPinInputDigitStateImpl } from '$stylist/design-system/utils/model-helpers/input-state';

export function createPinInputDigitState(
	...args: Parameters<typeof createPinInputDigitStateImpl>
): ReturnType<typeof createPinInputDigitStateImpl> {
	return createPinInputDigitStateImpl(...args);
}

export default createPinInputDigitState;


