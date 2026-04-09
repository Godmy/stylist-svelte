import { InputStyleManager } from '$stylist/input/class/style-manager/input';
import { createInputTextState } from '$stylist/input/function/state/input-text';
import type { IInputLongProps } from '$stylist/input/interface/component/input/other';

export const createInputLongState = (props: IInputLongProps) => {
	const hasError = $derived(!!props.error || (props.errors?.length ?? 0) > 0);
	const errorId = $derived(props.id ? `${String(props.id)}-error` : undefined);
	const labelId = $derived(props.id ? `${String(props.id)}-label` : undefined);
	const inputState = $derived(
		createInputTextState({
			variant: props.variant,
			size: props.size,
			disabled: props.disabled,
			error: hasError,
			block: props.block,
			class: props.class
		})
	);
	const showHelper = $derived(!!props.helperText && (!!props.showHelperWhenError || !hasError));

	function autoResizeTextarea(textareaElement: HTMLTextAreaElement | null) {
		if (!props.autoResize || !textareaElement) {
			return;
		}

		textareaElement.style.height = 'auto';
		const newHeight = Math.min(textareaElement.scrollHeight, parseFloat(String(props.maxHeight ?? '300')));
		textareaElement.style.height = `${newHeight}px`;
	}

	function handleInput(textareaElement: HTMLTextAreaElement | null) {
		autoResizeTextarea(textareaElement);
	}

	return {
		get hasError() {
			return hasError;
		},
		get errorId() {
			return errorId;
		},
		get labelId() {
			return labelId;
		},
		get inputClasses() {
			return inputState.classes;
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

export default createInputLongState;
