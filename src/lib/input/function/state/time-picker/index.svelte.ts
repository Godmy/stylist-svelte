import type { ITimePickerProps } from '$stylist/input/interface/component/time-picker/other';

export const createTimePickerState = (props: ITimePickerProps) => {
	let isOpen = $state(false);
	let selectedTime = $state(props.value ?? '00:00');
	let timeInputRef = $state<HTMLInputElement | undefined>(undefined);
	let timePickerRef = $state<HTMLDivElement | undefined>(undefined);

	function setTime(hours: number, minutes: number, seconds = 0) {
		selectedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${props.showSeconds ? `:${seconds.toString().padStart(2, '0')}` : ''}`;
		updateValue();
	}

	function updateValue() {
		props.onValueInput?.(selectedTime);
		props.onValueChange?.(selectedTime);
		props.onChange?.(selectedTime);
		timeInputRef?.dispatchEvent(new CustomEvent('change', { detail: { time: selectedTime }, bubbles: true }));
	}

	function toggleDropdown() {
		if (!props.disabled) {
			isOpen = !isOpen;
		}
	}

	function formatTime(date: Date) {
		return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}${props.showSeconds ? `:${date.getSeconds().toString().padStart(2, '0')}` : ''}`;
	}

	$effect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isOpen &&
				timeInputRef &&
				timePickerRef &&
				!timeInputRef.contains(event.target as Node) &&
				!timePickerRef.contains(event.target as Node)
			) {
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	const timeOptions = $derived.by(() => {
		const values: string[] = [];
		for (let hour = 0; hour < 24; hour++) {
			for (let minute = 0; minute < 60; minute += 15) {
				if (props.showSeconds) {
					for (let second = 0; second < 60; second += 15) {
						values.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`);
					}
				} else {
					values.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
				}
			}
		}
		return values;
	});

	return {
		get isOpen() {
			return isOpen;
		},
		set isOpen(value: boolean) {
			isOpen = value;
		},
		get selectedTime() {
			return selectedTime;
		},
		set selectedTime(value: string) {
			selectedTime = value;
		},
		get disabled() {
			return props.disabled ?? false;
		},
		get className() {
			return props.class ?? '';
		},
		get dropdownClass() {
			return props.dropdownClass ?? '';
		},
		get timeOptions() {
			return timeOptions;
		},
		timeInputAction(node: HTMLInputElement) {
			timeInputRef = node;
			return {
				destroy() {
					if (timeInputRef === node) {
						timeInputRef = undefined;
					}
				}
			};
		},
		timePickerAction(node: HTMLDivElement) {
			timePickerRef = node;
			return {
				destroy() {
					if (timePickerRef === node) {
						timePickerRef = undefined;
					}
				}
			};
		},
		setTime,
		updateValue,
		toggleDropdown,
		formatTime
	};
};

export default createTimePickerState;
