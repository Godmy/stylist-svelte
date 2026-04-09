import { createFormErrorMessageState as createFormErrorMessageScriptState } from '$stylist/input/function/script/create-form-error-message-state';
import type { IFormErrorMessageProps } from '$stylist/input/interface/component/input/other';

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
