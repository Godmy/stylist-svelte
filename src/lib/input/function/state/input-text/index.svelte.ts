import { resolveAllowedOption } from '$stylist/interaction/function/script/resolve-allowed-option';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { TOKEN_APPEARANCE } from '$stylist/interaction/const/array/appearance';
import { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { InputTextStateOptions } from '$stylist/input/type/struct/input-text-state-options';

export function createInputTextState(props: InputTextStateOptions) {
	const variant = $derived(
		resolveAllowedOption(props.variant as TokenAppearance | undefined, TOKEN_APPEARANCE, 'default')
	);
	const size = $derived(resolveAllowedOption(props.size as TokenSize | undefined, TOKEN_SIZE, 'md'));
	const disabled = $derived(!!props.disabled);
	const hasError = $derived(!!props.error);
	const errorId = $derived(props.id ? `${String(props.id)}-error` : undefined);
	const labelId = $derived(props.id ? `${String(props.id)}-label` : undefined);
	const showHelper = $derived(!!props.helperText && (!!props.showHelperWhenError || !hasError));
	const classes = $derived(mergeClassNames('input-field__control', props.class));

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get classes() {
			return classes;
		},
		get hasError() {
			return hasError;
		},
		get errorId() {
			return errorId;
		},
		get labelId() {
			return labelId;
		},
		get containerClasses() {
			return 'input-field-container';
		},
		get labelClasses() {
			return 'input-field-label';
		},
		get helperTextClasses() {
			return 'input-field-helper-text';
		},
		get errorTextClasses() {
			return 'input-field-error-text';
		},
		get requiredIndicatorClasses() {
			return 'input-field-required';
		},
		get showHelper() {
			return showHelper;
		}
	};
}

export default createInputTextState;
