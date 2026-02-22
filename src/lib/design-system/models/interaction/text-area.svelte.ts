import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction';
import { TEXTAREA_PRESET } from '$stylist/design-system/runtime/input';
import type { InputVariant } from '$stylist/design-system/tokens/architecture/variants';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/sizes';

type TextareaStateOptions = {
	variant?: InputVariant;
	size?: ComponentSize;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
};

const createTextareaState = (
	props: TextareaStateOptions & Record<string, unknown>
) => createBaseInputState(TEXTAREA_PRESET, props);

export { createTextareaState };
export default createTextareaState;

export { TEXTAREA_PRESET };
