import { InputStyleManager } from '$stylist/input/class/style-manager/input';
import { createInputTextState } from '$stylist/input/function/state/input-text';
import type { IInputGroupProps } from '$stylist/input/interface/component/input/other';

export const createInputGroupState = (props: IInputGroupProps) => {
	const hasError = $derived(!!props.error || (props.errors?.length ?? 0) > 0);
	const errorId = $derived(props.id ? `${props.id}-error` : undefined);
	const labelId = $derived(props.id ? `${props.id}-label` : undefined);
	const inputState = $derived(
		createInputTextState({
			variant: props.variant,
			size: props.size,
			disabled: props.disabled,
			error: hasError,
			block: false,
			class: props.class
		})
	);
	const showHelper = $derived(!!props.helperText && (props.showHelperWhenError || !hasError));

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		props.onValueInput?.(target.value);
	}

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		props.onValueChange?.(target.value);
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
		get groupContainerClasses() {
			return InputStyleManager.getInputGroupContainerClass('flex items-stretch');
		},
		get groupInputClasses() {
			return InputStyleManager.getInputGroupInputClass('');
		},
		get groupButtonClasses() {
			return InputStyleManager.getInputGroupButtonClass('');
		},
		get showHelper() {
			return showHelper;
		},
		handleInput,
		handleChange
	};
};

export default createInputGroupState;
