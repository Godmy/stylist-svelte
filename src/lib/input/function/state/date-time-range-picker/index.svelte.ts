import type { DateTimeRangePickerComponentProps } from '$stylist/input/interface/component/date-time-range-picker/other';

export const createDateTimeRangePickerState = (props: DateTimeRangePickerComponentProps) => {
	let selectedRange = $state({
		start: props.value?.start ? new Date(props.value.start) : null,
		end: props.value?.end ? new Date(props.value.end) : null
	});
	let isOpen = $state(false);

	function fmt(date: Date | null) {
		return date ? date.toLocaleString() : '';
	}

	function changeTime(kind: 'start' | 'end', hh: number, mm: number, dateValue?: string) {
		const base = dateValue
			? new Date(dateValue)
			: selectedRange[kind]
				? new Date(selectedRange[kind] as Date)
				: new Date();
		base.setHours(hh, mm, 0, 0);
		selectedRange = { ...selectedRange, [kind]: base };
		props.onInput?.(selectedRange);
		props.onChange?.(selectedRange);
	}

	function toggleOpen() {
		if (!props.disabled) {
			isOpen = !isOpen;
		}
	}

	function clear() {
		selectedRange = { start: null, end: null };
	}

	return {
		get selectedRange() {
			return selectedRange;
		},
		get isOpen() {
			return isOpen;
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get placeholder() {
			return props.placeholder ?? 'Select date and time range';
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
		fmt,
		changeTime,
		toggleOpen,
		clear
	};
};

export default createDateTimeRangePickerState;
