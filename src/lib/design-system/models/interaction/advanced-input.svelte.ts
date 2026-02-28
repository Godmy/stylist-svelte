import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/runtime/input';
import type { InputVariant } from '$stylist/design-system/tokens';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';

type InputStateOptions = {
	variant?: InputVariant;
	size?: ComponentSize;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
};

const createInputState = (
	props: InputStateOptions & Record<string, unknown>
) => createBaseInputState(INPUT_FIELD_PRESET, props);

export { createInputState };
export const createAdvancedInputState = createInputState;
export default createAdvancedInputState;








