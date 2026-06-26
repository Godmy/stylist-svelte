import { createFormHelperTextState as createFormHelperTextScriptState } from '$stylist/input/function/script/create-form-helper-text-state';
import type { SlotInputHelper as IInputHelperProps } from '$stylist/input/interface/slot/input-helper';

export const createInputHelperState = (props: IInputHelperProps) => {
	const state = $derived(
		createFormHelperTextScriptState({
			variant: props.variant,
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

export default createInputHelperState;
