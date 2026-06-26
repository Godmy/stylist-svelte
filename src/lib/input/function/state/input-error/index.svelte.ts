import { createFormErrorMessageState as createFormErrorMessageScriptState } from '$stylist/input/function/script/create-form-error-message-state';
import type { SlotInputError as IInputErrorProps } from '$stylist/input/interface/slot/input-error';

export const createInputErrorState = (props: IInputErrorProps) => {
	const state = $derived(
		createFormErrorMessageScriptState({
			variant: 'error',
			size: 'md',
			class: props.class
		})
	);

	return {
		get classes() {
			return state.classes;
		}
	};
};

export default createInputErrorState;
