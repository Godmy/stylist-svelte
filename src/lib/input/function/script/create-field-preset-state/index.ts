import { resolveAllowedOption } from '$stylist/interaction/function/script/resolve-allowed-option';
import { TOKEN_APPEARANCE } from '$stylist/interaction/const/array/appearance';
import { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { InputStateOptions } from '$stylist/input/type/script/create-input-field-state';

export function createFieldPresetState(props: InputStateOptions & Record<string, unknown>) {
	const variant = resolveAllowedOption(
		props.variant as TokenAppearance | undefined,
		TOKEN_APPEARANCE,
		'default'
	);
	const size = resolveAllowedOption(props.size as TokenSize | undefined, TOKEN_SIZE, 'md');
	const disabled = !!props.disabled;
	const hasError = !!props.error;

	return { variant, size, disabled, hasError };
}
