type PhoneNumberInputStateProps = {
	error?: boolean;
	disabled?: boolean;
};

export const formatPhoneNumber = (value: string): string => {
	if (!value) return '';

	const cleaned = value.replace(/\D/g, '');
	let formatted = '+7 (';

	for (let i = 0; i < 11; i++) {
		if (i < cleaned.length) {
			if (i === 0) {
				formatted += cleaned[i];
			} else if (i === 3) {
				formatted += ') ' + cleaned[i];
			} else if (i === 6) {
				formatted += '-' + cleaned[i];
			} else if (i === 8) {
				formatted += '-' + cleaned[i];
			} else {
				formatted += cleaned[i];
			}
		} else if (i === 0) {
			formatted += '_';
		} else if (i === 3) {
			formatted += ') _';
		} else if (i === 6 || i === 8) {
			formatted += '-_';
		} else {
			formatted += '_';
		}
	}

	return formatted;
};

export const normalizePhoneInputValue = (raw: string): string => {
	let unformattedValue = raw.replace(/\D/g, '');
	if (unformattedValue.startsWith('8')) {
		unformattedValue = '7' + unformattedValue.substring(1);
	}
	if (unformattedValue.startsWith('+7')) {
		unformattedValue = unformattedValue.substring(2);
	}
	return unformattedValue.substring(0, 11);
};

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


