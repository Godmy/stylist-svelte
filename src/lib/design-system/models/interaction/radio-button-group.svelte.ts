import { mergeClasses } from '$stylist/utils/classes';
﻿import type { RadioButtonGroupProps } from '$stylist/design-system/props';
import { TogglesStyleManager } from '$stylist/design-system/styles/interaction/toggles';

export const createRadioButtonGroupState = (props: RadioButtonGroupProps) => {
	const containerClass = $derived(TogglesStyleManager.getToggleContainerClasses(props.class));
	const value = $derived(props.value ?? '');
	const options = $derived(props.options ?? []);
	const name = $derived(props.name ?? '');
	const disabled = $derived(props.disabled ?? false);
	const required = $derived(props.required ?? false);
	
	const getOptionClass = (isDisabled: boolean) => {
		return mergeClasses(
			'flex items-center space-x-2 cursor-pointer',
			isDisabled ? 'opacity-50 cursor-not-allowed' : ''
		);
	};
	
	const radioInputClass = $derived(
		mergeClasses(
			'h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500'
		)
	);
	
	const optionLabelClass = $derived(
		mergeClasses(
			'text-sm font-medium text-gray-700',
			disabled ? 'opacity-50' : ''
		)
	);

	return {
		get containerClass() {
			return containerClass;
		},
		get value() {
			return value;
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
		}
	};
};

export default createRadioButtonGroupState;



