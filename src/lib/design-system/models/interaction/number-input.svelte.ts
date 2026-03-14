import type { NumberInputStateProps } from '../../types/interaction/number-input';



export const createNumberInputState = (props: NumberInputStateProps) => {
	const disabled = $derived(props.disabled ?? false);
	const readonly = $derived(props.readonly ?? false);
	const containerClasses = $derived(['relative inline-flex items-center', props.class ?? ''].join(' ').trim());
	const inputClasses = $derived(
		[
			'w-20 p-2 text-center border-y border-[var(--color-border-primary)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
			disabled ? 'bg-[var(--color-background-secondary)]' : 'bg-[var(--color-background-primary)]',
			props.inputClass ?? ''
		]
			.join(' ')
			.trim()
	);
	const buttonClasses = $derived(
		[
			'p-2 border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] hover:bg-[var(--color-background-tertiary)] disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed',
			props.buttonClass ?? '',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
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





