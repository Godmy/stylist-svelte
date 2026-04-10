import type { ToggleButtonGroupProps } from '$stylist/control/type/struct/toggle-button-group-props';

export function createToggleButtonGroupState(props: ToggleButtonGroupProps) {
	let selectedValues = $state<string[]>(
		Array.isArray(props.value) ? props.value : props.value ? [props.value] : []
	);

	$effect(() => {
		const nextValue = Array.isArray(props.value) ? props.value : props.value ? [props.value] : [];
		if (JSON.stringify(selectedValues) !== JSON.stringify(nextValue)) {
			selectedValues = nextValue;
		}
	});

	const sizeClasses = $derived(
		props.size === 'sm'
			? 'text-xs px-2 py-1'
			: props.size === 'md'
				? 'text-sm px-3 py-2'
				: props.size === 'lg'
					? 'text-base px-4 py-3'
					: 'text-sm px-3 py-2'
	);

	function handleToggle(optionValue: string) {
		if (props.disabled || props.options.find((option) => option.value === optionValue)?.disabled) {
			return;
		}

		let nextValues: string[];

		if (props.multiple) {
			nextValues = selectedValues.includes(optionValue)
				? selectedValues.filter((value) => value !== optionValue)
				: [...selectedValues, optionValue];
		} else {
			nextValues = selectedValues.includes(optionValue) ? [] : [optionValue];
		}

		selectedValues = nextValues;

		const nextValue = props.multiple ? nextValues : nextValues[0] || '';
		props.onValueInput?.(nextValue);
		props.onValueChange?.(nextValue);
		props.onInput?.(nextValue);
		props.onChange?.(nextValue);
	}

	function isSelected(optionValue: string) {
		return selectedValues.includes(optionValue);
	}

	return {
		get selectedValues() {
			return selectedValues;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		handleToggle,
		isSelected
	};
}

export default createToggleButtonGroupState;
