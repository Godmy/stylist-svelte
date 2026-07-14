import { resolveAllowedOption } from '$stylist/interaction/function/script/resolve-allowed-option';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { TOKEN_APPEARANCE } from '$stylist/interaction/const/array/appearance';
import { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TextAreaStateOptions } from '$stylist/input/type/struct/text-area-state-options';

export const createTextareaState = (props: TextAreaStateOptions) => {
	const variant = $derived(
		resolveAllowedOption(props.variant as TokenAppearance | undefined, TOKEN_APPEARANCE, 'default')
	);
	const size = $derived(resolveAllowedOption(props.size as TokenSize | undefined, TOKEN_SIZE, 'md'));
	const disabled = $derived(!!props.disabled);
	const hasError = $derived(!!props.error);
	const errorId = $derived(props.id ? `${String(props.id)}-error` : undefined);
	const labelId = $derived(props.id ? `${String(props.id)}-label` : undefined);
	const currentLength = $derived(String(props.value ?? '').length);
	const remainingChars = $derived(
		typeof props.maxlength === 'number' ? props.maxlength - currentLength : null
	);
	const showHelper = $derived(!!props.helperText && (!!props.showHelperWhenError || !hasError));
	const classes = $derived(mergeClassNames('input-field__control', props.class));

	function autoResizeTextarea(textareaElement: HTMLTextAreaElement | null) {
		if (!props.autoResize || !textareaElement) {
			return;
		}

		textareaElement.style.height = 'auto';
		textareaElement.style.height = `${textareaElement.scrollHeight}px`;
	}

	function handleInput(textareaElement: HTMLTextAreaElement | null) {
		autoResizeTextarea(textareaElement);
	}

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
		get currentLength() {
			return currentLength;
		},
		get remainingChars() {
			return remainingChars;
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
		},
		autoResizeTextarea,
		handleInput
	};
};

export default createTextareaState;
