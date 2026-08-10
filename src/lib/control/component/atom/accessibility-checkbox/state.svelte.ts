export const createInputAccessibilityCheckboxState = (
	props: {
		label?: string;
		checked?: boolean;
		disabled?: boolean;
		onValueInput?: (value: boolean) => void;
		onValueChange?: (value: boolean) => void;
		onChange?: (value: boolean) => void;
		class?: string;
	} & Record<string, unknown>
) => {
	let localChecked = $state(props.checked ?? false);

	$effect(() => {
		localChecked = props.checked ?? false;
	});

	const containerClasses = $derived(
		['a-checkbox', props.class ?? ''].filter(Boolean).join(' ')
	);
	const indicatorClasses = $derived(
		[
			'a-checkbox__indicator',
			localChecked ? 'a-checkbox__indicator--checked' : '',
			props.disabled ? 'a-checkbox__indicator--disabled' : ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const labelClasses = $derived(
		['a-checkbox__text', props.disabled ? 'a-checkbox__text--disabled' : '']
			.filter(Boolean)
			.join(' ')
	);

	function handleChange() {
		if (props.disabled) return;
		localChecked = !localChecked;
		props.onValueInput?.(localChecked);
		props.onValueChange?.(localChecked);
		props.onChange?.(localChecked);
	}

	return {
		get checked() {
			return localChecked;
		},
		get containerClasses() {
			return containerClasses;
		},
		get indicatorClasses() {
			return indicatorClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		handleChange
	};
};

export default createInputAccessibilityCheckboxState;
