import type { SlotNumberInput as INumberInputProps } from '$stylist/input/interface/slot/number-input';

export const createNumberInputState = (props: INumberInputProps) => {
	let currentValue = $state(props.value ?? 0);

	$effect(() => {
		currentValue = props.value ?? 0;
	});

	const disabled = $derived(props.disabled ?? false);
	const readonly = $derived(props.readonly ?? false);
	const min = $derived(props.min ?? Number.MIN_SAFE_INTEGER);
	const max = $derived(props.max ?? Number.MAX_SAFE_INTEGER);
	const step = $derived(props.step ?? 1);
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

	function emitChange() {
		props.onValueInput?.(currentValue);
		props.onValueChange?.(currentValue);
		props.onChange?.(currentValue);
	}

	function increment() {
		if (disabled || readonly) return;

		const newValue = currentValue + step;
		if (newValue <= max) {
			currentValue = newValue;
			emitChange();
		}
	}

	function decrement() {
		if (disabled || readonly) return;

		const newValue = currentValue - step;
		if (newValue >= min) {
			currentValue = newValue;
			emitChange();
		}
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		const newValue = parseFloat(target.value);

		if (Number.isNaN(newValue)) {
			return;
		}

		let clampedValue = Math.min(Math.max(newValue, min), max);
		if (step !== 0) {
			clampedValue = Math.round(clampedValue / step) * step;
		}

		currentValue = clampedValue;
		emitChange();
	}

	return {
		get disabled() {
			return disabled;
		},
		get readonly() {
			return readonly;
		},
		get min() {
			return min;
		},
		get max() {
			return max;
		},
		get step() {
			return step;
		},
		get currentValue() {
			return currentValue;
		},
		set currentValue(value: number) {
			currentValue = value;
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
		},
		increment,
		decrement,
		handleInput,
		emitChange
	};
};

export default createNumberInputState;





