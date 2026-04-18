import { createFormHelperTextState as createFormHelperTextScriptState } from '$stylist/input/function/script/create-form-helper-text-state';
import type { SlotFormHelperText as IFormHelperTextProps } from '$stylist/input/interface/slot/form-helper-text';

export const createFormHelperTextState = (props: IFormHelperTextProps) => {
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

export default createFormHelperTextState;
