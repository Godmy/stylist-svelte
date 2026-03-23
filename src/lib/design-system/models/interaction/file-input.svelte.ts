import { createInputState as createBaseInputState } from '$stylist/design-system/runtime/interaction/index';
import { INPUT_FIELD_PRESET } from '$stylist/design-system/runtime/input';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { InputStateOptions } from '$stylist/design-system/runtime/types';

export function createFileInputState(
	props: InputStateOptions<TokenAppearance, TokenSize> & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createFileInputState;







