import { createFieldPresetState } from '$stylist/input/function/script/create-field-preset-state';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { InputStateOptions } from '$stylist/input/type/script/create-input-field-state';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export function createFormErrorMessageState(
	props: InputStateOptions<TokenAppearance, TokenSize> & Record<string, unknown>
) {
	const state = createFieldPresetState(props);
	return {
		...state,
		classes: mergeClassNames('input-field-error-text', props.class as string | undefined)
	};
}
