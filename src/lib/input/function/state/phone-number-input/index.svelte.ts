import { formatPhoneNumber } from '../format-phone-number';
import { normalizePhoneInputValue } from '../normalize-phone-input-value';

interface PhoneNumberInputStateProps {
	error?: boolean;
	disabled?: boolean;
}

export const createPhoneNumberInputState = (props: PhoneNumberInputStateProps) => {
	const error = $derived(props.error ?? false);
	const disabled = $derived(props.disabled ?? false);
	const containerClass = $derived('relative');
	const inputClass = $derived(
		`w-full py-2 px-3 border ${error ? 'border-[--color-danger-500]' : 'border-[--color-border-primary]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] ${disabled ? 'bg-[--color-background-disabled] cursor-not-allowed' : 'bg-[--color-background-surface]'}`
	);
	const helpTextClass = $derived(
		`mt-1 text-sm ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-secondary]'}`
	);

	return {
		get containerClass() {
			return containerClass;
		},
		get inputClass() {
			return inputClass;
		},
		get helpTextClass() {
			return helpTextClass;
		}
	};
};

export default createPhoneNumberInputState;
