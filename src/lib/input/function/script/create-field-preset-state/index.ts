import { resolveAllowedOption } from '$stylist/interaction/function/script/resolve-allowed-option';
import { TOKEN_COLOR_TONE } from '$stylist/theme/const/array/color-tone';
import { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { InputStateOptions } from '$stylist/input/type/script/create-input-field-state';

export function createFieldPresetState(props: InputStateOptions & Record<string, unknown>) {
	const variant = resolveAllowedOption(
		props.variant as TokenColorTone | undefined,
		TOKEN_COLOR_TONE,
		'default'
	);
	const size = resolveAllowedOption(props.size as TokenSize | undefined, TOKEN_SIZE, 'md');
	const disabled = !!props.disabled;
	const hasError = !!props.error;

	return { variant, size, disabled, hasError };
}
