import { createInputFieldState } from '$stylist/input/function/script/create-input-field-state';
import type { InputStateOptions } from '$stylist/input/type/script/create-input-field-state';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export function createFormHelperTextState(
	props: InputStateOptions<TokenAppearance, TokenSize> & Record<string, unknown>
) {
	return createInputFieldState(props);
}
