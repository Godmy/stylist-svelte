import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { InputStateOptions } from '$stylist/layout/type/struct/component-state-input-state-options';

export function createFileInputState(
	props: InputStateOptions<TokenAppearance, TokenSize> & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createFileInputState;







