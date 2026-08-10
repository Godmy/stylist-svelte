import type { RecipeInputField as IInputFieldProps } from '$stylist/input/interface/recipe/input-field';

export const createInputFieldState = (props: IInputFieldProps) => {
	const showHelper = $derived(!!props.helperText && (props.errors?.length ?? 0) === 0);
	const containerClasses = $derived('input-field-container');
	const helperTextClasses = $derived('input-field-helper-text');

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
