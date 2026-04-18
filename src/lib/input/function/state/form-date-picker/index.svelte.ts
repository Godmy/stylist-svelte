import type { SlotFormDatePicker as IFormDatePickerProps } from '$stylist/input/interface/slot/form-date-picker';

export const createFormDatePickerState = (props: IFormDatePickerProps) => {
	let selectedDate = $state(props.value ?? '');
	let showCalendar = $state(false);

	$effect(() => {
		selectedDate = props.value ?? '';
	});

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		selectedDate = target.value;
		props.onValueInput?.(selectedDate, event);
		props.onValueChange?.(selectedDate, event);
		props.onInput?.(selectedDate, event);
	}

	function handleChange(event: Event) {
		const target = event.target as HTMLInputElement;
		selectedDate = target.value;
		props.onValueChange?.(selectedDate, event);
		props.onChange?.(selectedDate, event);
		showCalendar = false;
	}

	function formatDate(dateString: string) {
		if (!dateString) return '';
		return new Date(dateString).toLocaleDateString();
	}

	function toggleCalendar() {
		showCalendar = !showCalendar;
	}

	function closeCalendar() {
		showCalendar = false;
	}

	return {
		get selectedDate() {
			return selectedDate;
		},
		get showCalendar() {
			return showCalendar;
		},
		get hostClass() {
			return props.class ?? '';
		},
		get inputClass() {
			return props.inputClass ?? '';
		},
		get calendarClass() {
			return props.calendarClass ?? '';
		},
		get label() {
			return props.label ?? 'Date';
		},
		get helperText() {
			return props.helperText;
		},
		get error() {
			return props.error;
		},
		get minDate() {
			return props.minDate;
		},
		get maxDate() {
			return props.maxDate;
		},
		get placeholder() {
			return props.placeholder ?? 'Select date';
		},
		handleInput,
		handleChange,
		formatDate,
		toggleCalendar,
		closeCalendar
	};
};

export default createFormDatePickerState;
