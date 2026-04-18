import type { SlotDateRangePickerComponent as DateRangePickerComponentProps } from '$stylist/input/interface/slot/date-range-picker-component';

export const createDateRangePickerState = (props: DateRangePickerComponentProps) => {
	let selectedRange = $state({
		start: props.value?.start ? new Date(props.value.start) : null,
		end: props.value?.end ? new Date(props.value.end) : null
	});
	let isOpen = $state(false);
	let currentDateView = $state(new Date());

	function fmt(date: Date | null) {
		return date ? date.toLocaleDateString() : '';
	}

	function pick(date: Date) {
		if (props.disabled) return;
		if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
			selectedRange = { start: date, end: null };
		} else if (date >= selectedRange.start) {
			selectedRange = { ...selectedRange, end: date };
			props.onChange?.(selectedRange);
			isOpen = false;
		} else {
			selectedRange = { start: date, end: null };
		}
		props.onInput?.(selectedRange);
	}

	function inRange(date: Date) {
		if (!selectedRange.start || !selectedRange.end) return false;
		return date >= selectedRange.start && date <= selectedRange.end;
	}

	function toggleOpen() {
		if (!props.disabled) {
			isOpen = !isOpen;
		}
	}

	function clear() {
		selectedRange = { start: null, end: null };
	}

	function previousMonth() {
		currentDateView = new Date(currentDateView.getFullYear(), currentDateView.getMonth() - 1, 1);
	}

	function nextMonth() {
		currentDateView = new Date(currentDateView.getFullYear(), currentDateView.getMonth() + 1, 1);
	}

	const calendarDates = $derived.by(() =>
		Array.from({ length: 42 }, (_, index) => {
			const date = new Date(currentDateView.getFullYear(), currentDateView.getMonth(), 1);
			date.setDate(index - new Date(currentDateView.getFullYear(), currentDateView.getMonth(), 1).getDay() + 1);
			return date;
		})
	);

	return {
		get selectedRange() {
			return selectedRange;
		},
		set selectedRange(value: { start: Date | null; end: Date | null }) {
			selectedRange = value;
		},
		get isOpen() {
			return isOpen;
		},
		set isOpen(value: boolean) {
			isOpen = value;
		},
		get currentDateView() {
			return currentDateView;
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get placeholder() {
			return props.placeholder ?? 'Select date range';
		},
		get className() {
			return props.class ?? '';
		},
		get calendarClass() {
			return props.calendarClass ?? '';
		},
		get inputClass() {
			return props.inputClass ?? '';
		},
		get buttonClass() {
			return props.buttonClass ?? '';
		},
		get calendarDates() {
			return calendarDates;
		},
		fmt,
		pick,
		inRange,
		toggleOpen,
		clear,
		previousMonth,
		nextMonth
	};
};

export default createDateRangePickerState;
