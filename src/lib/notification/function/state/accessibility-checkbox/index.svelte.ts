interface AccessibilityCheckboxStateProps {
	checked?: boolean;
	disabled?: boolean;
	class?: string;
}

export const createAccessibilityCheckboxState = (props: AccessibilityCheckboxStateProps) => {
	const checked = $derived(props.checked ?? false);
	const disabled = $derived(props.disabled ?? false);
	const containerClasses = $derived(['flex items-center', props.class ?? ''].filter(Boolean).join(' '));
	const indicatorClasses = $derived(
		[
			'w-6 h-6 flex items-center justify-center rounded border',
			checked ? 'bg-[var(--color-primary-500)] border-[var(--color-primary-500)]' : 'bg-[var(--color-background-primary)] border-[var(--color-border-primary)]',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const labelClasses = $derived(['ml-2', disabled ? 'text-[var(--color-text-tertiary)]' : 'text-[var(--color-text-primary)]'].join(' '));

	return {
		get checked() {
			return checked;
		},
		get disabled() {
			return disabled;
		},
		get containerClasses() {
			return containerClasses;
		},
		get indicatorClasses() {
			return indicatorClasses;
		},
		get labelClasses() {
			return labelClasses;
		}
	};
};

export default createAccessibilityCheckboxState;
