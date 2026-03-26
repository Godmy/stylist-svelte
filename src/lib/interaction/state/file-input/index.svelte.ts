import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { INPUT_FIELD_PRESET } from '$stylist/interaction/preset/input';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { InputStateOptions } from '$stylist/architecture/type/input-state-options/index';

export function createFileInputState(
	props: InputStateOptions<TokenAppearance, TokenSize> & Record<string, unknown>
) {
	return createBaseInputState(INPUT_FIELD_PRESET, props);
}

export default createFileInputState;







