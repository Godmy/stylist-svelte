import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { InputStyleManager } from '$stylist/input/class/style-manager/input';
import { TEXTAREA_PRESET } from '$stylist/input/preset/input';
import type { TextAreaStateOptions } from '$stylist/input/type/struct/text-area-state-options';

const createTextareaState = (
	props: TextAreaStateOptions
) => {
	const textareaState = createBaseInputState(TEXTAREA_PRESET, props);
	const hasError = $derived(!!props.error);
	const errorId = $derived(props.id ? `${String(props.id)}-error` : undefined);
	const labelId = $derived(props.id ? `${String(props.id)}-label` : undefined);
	const currentLength = $derived(String(props.value ?? '').length);
	const remainingChars = $derived(
		typeof props.maxlength === 'number' ? props.maxlength - currentLength : null
	);
	const showHelper = $derived(!!props.helperText && (!!props.showHelperWhenError || !hasError));

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
		...textareaState,
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
			return InputStyleManager.getContainerClass('');
		},
		get labelClasses() {
			return InputStyleManager.getLabelClass('');
		},
		get helperTextClasses() {
			return InputStyleManager.getHelperTextClass('');
		},
		get errorTextClasses() {
			return InputStyleManager.getErrorTextClass('');
		},
		get requiredIndicatorClasses() {
			return InputStyleManager.getRequiredIndicatorClass('');
		},
		get showHelper() {
			return showHelper;
		},
		autoResizeTextarea,
		handleInput
	};
};

export { createTextareaState };
export default createTextareaState;





