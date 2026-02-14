type AccessibilityCheckboxStateProps = {
	checked?: boolean;
	disabled?: boolean;
	class?: string;
};

export const createAccessibilityCheckboxState = (props: AccessibilityCheckboxStateProps) => {
	const checked = $derived(props.checked ?? false);
	const disabled = $derived(props.disabled ?? false);
	const containerClasses = $derived(['flex items-center', props.class ?? ''].filter(Boolean).join(' '));
	const indicatorClasses = $derived(
		[
			'w-6 h-6 flex items-center justify-center rounded border',
			checked ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300',
			disabled ? 'opacity-50 cursor-not-allowed' : ''
		]
			.filter(Boolean)
			.join(' ')
	);
	const labelClasses = $derived(['ml-2', disabled ? 'text-gray-400' : 'text-gray-700'].join(' '));

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


