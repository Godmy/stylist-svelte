type NumberInputStateProps = {
	disabled?: boolean;
	readonly?: boolean;
	class?: string;
	inputClass?: string;
	buttonClass?: string;
};

export const createNumberInputState = (props: NumberInputStateProps) => {
	const disabled = $derived(props.disabled ?? false);
	const readonly = $derived(props.readonly ?? false);
	const containerClasses = $derived(['relative inline-flex items-center', props.class ?? ''].join(' ').trim());
	const inputClasses = $derived(
		[
			'w-20 p-2 text-center border-y border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
			disabled ? 'bg-gray-100' : 'bg-white',
			props.inputClass ?? ''
		]
			.join(' ')
			.trim()
	);
	const buttonClasses = $derived(
		[
			'p-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed',
			props.buttonClass ?? '',
			disabled ? 'opacity-50 cursor-not-allowed' : ''
		]
			.join(' ')
			.trim()
	);

	return {
		get disabled() {
			return disabled;
		},
		get readonly() {
			return readonly;
		},
		get containerClasses() {
			return containerClasses;
		},
		get inputClasses() {
			return inputClasses;
		},
		get decrementButtonClasses() {
			return `${buttonClasses} rounded-l-md border-r-0`;
		},
		get incrementButtonClasses() {
			return `${buttonClasses} rounded-r-md border-l-0`;
		}
	};
};

export default createNumberInputState;


