import type { SlotDatePicker as IDatePickerProps } from '$stylist/input/interface/slot/date-picker';

export const createDatePickerState = (props: IDatePickerProps) => {
	let internalValue = $state('');
	let isOpen = $state(false);

	$effect(() => {
		if (props.value) {
			internalValue = props.value.toISOString().split('T')[0];
			return;
		}

		internalValue = '';
	});

	function handleDateChange(event: Event) {
		const target = event.target as HTMLInputElement;
		internalValue = target.value;
		isOpen = false;
	}

	function openPicker() {
		if (!props.disabled) {
			isOpen = true;
		}
	}

	const displayValue = $derived(internalValue ? new Date(internalValue).toLocaleDateString() : '');
	const minValue = $derived(props.minDate?.toISOString().split('T')[0]);
	const maxValue = $derived(props.maxDate?.toISOString().split('T')[0]);

	return {
		get internalValue() {
			return internalValue;
		},
		set internalValue(value: string) {
			internalValue = value;
		},
		get isOpen() {
			return isOpen;
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get placeholder() {
			return props.placeholder ?? 'Select date';
		},
		get displayValue() {
			return displayValue;
		},
		get minValue() {
			return minValue;
		},
		get maxValue() {
			return maxValue;
		},
		handleDateChange,
		openPicker
	};
};

export default createDatePickerState;
