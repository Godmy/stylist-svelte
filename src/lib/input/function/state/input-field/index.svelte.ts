import { InputStyleManager } from '$stylist/input/class/style-manager/input';
import type { IInputFieldProps } from '$stylist/input/interface/component/input/other';

export const createInputFieldState = (props: IInputFieldProps) => {
	const showHelper = $derived(!!props.helperText && (props.errors?.length ?? 0) === 0);
	const containerClasses = $derived('input-field-container');
	const helperTextClasses = $derived(InputStyleManager.getHelperTextClass(''));

	return {
		get showHelper() {
			return showHelper;
		},
		get containerClasses() {
			return containerClasses;
		},
		get helperTextClasses() {
			return helperTextClasses;
		}
	};
};

export default createInputFieldState;
