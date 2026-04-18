import { createFormErrorMessageState as createFormErrorMessageScriptState } from '$stylist/input/function/script/create-form-error-message-state';
import type { SlotFormErrorMessage as IFormErrorMessageProps } from '$stylist/input/interface/slot/form-error-message';

export const createFormErrorMessageState = (props: IFormErrorMessageProps) => {
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

export default createFormErrorMessageState;
