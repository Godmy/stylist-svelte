import { createInputState as createBaseInputState } from '$stylist/interaction/preset/component/index';
import { INPUT_FIELD_PRESET } from '$stylist/input/preset/input';
import { InputStyleManager } from '$stylist/input/class/style-manager/input';
import type { InputTextStateOptions } from '$stylist/input/type/struct/input-text-state-options';

export function createInputTextState(
	props: InputTextStateOptions
) {
	const inputState = createBaseInputState(INPUT_FIELD_PRESET, props);
	const hasError = $derived(!!props.error);
	const errorId = $derived(props.id ? `${String(props.id)}-error` : undefined);
	const labelId = $derived(props.id ? `${String(props.id)}-label` : undefined);
	const showHelper = $derived(!!props.helperText && (!!props.showHelperWhenError || !hasError));

	return {
		...inputState,
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
		}
	};
}

export default createInputTextState;



