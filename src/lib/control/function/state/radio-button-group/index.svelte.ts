import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import type { RadioButtonGroupProps } from '$stylist/control/interface/component/toggles';
import { TogglesStyleManager } from '$stylist/control/class/style-manager/toggles';

export const createRadioButtonGroupState = (props: RadioButtonGroupProps) => {
	const containerClass = $derived(TogglesStyleManager.getToggleContainerClasses(props.class));
	const options = $derived(props.options ?? []);
	const name = $derived(props.name ?? '');
	const disabled = $derived(props.disabled ?? false);
	const required = $derived(props.required ?? false);
	let selectedValue = $state(props.value ?? '');

	$effect(() => {
		selectedValue = props.value ?? '';
	});
	
	const getOptionClass = (isDisabled: boolean) => {
		return joinClassNames(
			'flex items-center space-x-2 cursor-pointer',
			isDisabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
		);
	};
	
	const radioInputClass = $derived(
		joinClassNames(
			'h-4 w-4 border-[var(--color-border-primary)] text-[var(--color-primary-600)] focus:ring-blue-500'
		)
	);
	
	const optionLabelClass = $derived(
		joinClassNames(
			'text-sm font-medium text-[var(--color-text-primary)]',
			disabled ? 'opacity-[var(--opacity-50)]' : ''
		)
	);

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











