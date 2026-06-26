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
		['flex items-center', props.class ?? ''].filter(Boolean).join(' ')
	);
	const indicatorClasses = $derived(
		[
			'w-6 h-6 flex items-center justify-center rounded border',
			localChecked
				? 'bg-[var(--color-primary-500)] border-[var(--color-primary-500)]'
				: 'bg-[var(--color-background-primary)] border-[var(--color-border-primary)]',
			props.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const labelClasses = $derived(
		[
			'ml-2',
			props.disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-primary)]'
		].join(' ')
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
