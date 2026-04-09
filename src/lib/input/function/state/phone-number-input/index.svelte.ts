import { formatPhoneNumber } from '../format-phone-number';
import { normalizePhoneInputValue } from '../normalize-phone-input-value';
import type { IPhoneNumberInputProps } from '$stylist/input/interface/component/phone-number-input/other';

export const createPhoneNumberInputState = (props: IPhoneNumberInputProps) => {
	const error = $derived(props.error ?? false);
	const disabled = $derived(props.disabled ?? false);
	const containerClass = $derived('relative');
	const inputClass = $derived(
		`w-full py-2 px-3 border ${error ? 'border-[--color-danger-500]' : 'border-[--color-border-primary]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] ${disabled ? 'bg-[--color-background-disabled] cursor-not-allowed' : 'bg-[--color-background-surface]'}`
	);
	const helpTextClass = $derived(
		`mt-1 text-sm ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-secondary]'}`
	);
	const formattedValue = $derived(formatPhoneNumber(props.value ?? ''));

	function handleInput(event: Event) {
		props.onInput?.(event);
		const target = event.target as HTMLInputElement;
		const nextValue = normalizePhoneInputValue(target.value);
		props.value = nextValue;
		props.onValueInput?.(nextValue, event);
		props.onValueChange?.(nextValue);
	}

	return {
		get containerClass() {
			return containerClass;
		},
		get inputClass() {
			return inputClass;
		},
		get helpTextClass() {
			return helpTextClass;
		},
		get formattedValue() {
			return formattedValue;
		},
		handleInput
	};
};

export default createPhoneNumberInputState;
