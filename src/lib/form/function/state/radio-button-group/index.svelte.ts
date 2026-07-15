import type { RecipeRadioButtonGroupProps as RecipeRadioButtonGroupProps } from '$stylist/form/interface/recipe/radio-button-group-props';

export const createRadioButtonGroupState = (props: RecipeRadioButtonGroupProps) => {
	const containerClass = $derived(['c-radio-group', props.class].filter(Boolean).join(' '));
	const options = $derived(props.options ?? []);
	const name = $derived(props.name ?? '');
	const disabled = $derived(props.disabled ?? false);
	const required = $derived(props.required ?? false);
	let selectedValue = $state(props.value ?? '');

	$effect(() => {
		selectedValue = props.value ?? '';
	});

	const getOptionClass = (_isDisabled: boolean) => {
		return 'c-radio-group__option';
	};

	const radioInputClass = 'c-radio-group__input';

	const optionLabelClass = 'c-radio-group__label';

	return {
		get containerClass() {
			return containerClass;
		},
		get value() {
			return selectedValue;
		},
		get options() {
			return options;
		},
		get name() {
			return name;
		},
		get disabled() {
			return disabled;
		},
		get required() {
			return required;
		},
		getOptionClass,
		get radioInputClass() {
			return radioInputClass;
		},
		get optionLabelClass() {
			return optionLabelClass;
		},
		handleInput(optionValue: string) {
			selectedValue = optionValue;
			props.onValueInput?.(optionValue);
		},
		handleChange(optionValue: string) {
			selectedValue = optionValue;
			props.onValueChange?.(optionValue);
		}
	};
};

export default createRadioButtonGroupState;
