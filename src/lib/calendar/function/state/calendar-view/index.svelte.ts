import { CalendarViewStyleManager } from '$stylist/calendar/class/style-manager/calendar-view';
import type { CalendarViewContract, CalendarEvent } from '$stylist/calendar/interface/component/calendar-view/contract';

export interface CalendarViewStateProps extends CalendarViewContract {
	class?: string;
}

export function createCalendarViewState(props: CalendarViewStateProps) {
	// Props with defaults
	const events = $derived(props.events ?? []);
	const initialDate = $derived(props.initialDate ?? new Date());
	const viewMode = $derived(props.viewMode ?? 'month');
	const showWeekNumbers = $derived(props.showWeekNumbers ?? false);
	const weekendDays = $derived(props.weekendDays ?? [0, 6]);

	// State
	let currentDate = $state(initialDate);
	let selectedDate: Date | null = $state(null);

	// Classes
	const wrapperClass = $derived(CalendarViewStyleManager.getWrapperClasses());
	const headerClass = $derived(CalendarViewStyleManager.getHeaderClasses());
	const gridClass = $derived(CalendarViewStyleManager.getGridClasses());
	const weekdayHeaderClass = $derived(CalendarViewStyleManager.getWeekdayHeaderClasses());

	// Methods
	function navigate(direction: 'prev' | 'next'): void {
		const newDate = new Date(currentDate);
		if (viewMode === 'month') {
			newDate.setMonth(newDate.getMonth() + (direction === 'prev' ? -1 : 1));
		} else if (viewMode === 'week') {
			newDate.setDate(newDate.getDate() + (direction === 'prev' ? -7 : 7));
		} else {
			newDate.setDate(newDate.getDate() + (direction === 'prev' ? -1 : 1));
		}
		currentDate = newDate;
		props.onDayClick?.(newDate);
	}

	function selectDate(date: Date): void {
		selectedDate = date;
		props.onDayClick?.(date);
	}

	function handleEventClick(event: CalendarEvent): void {
		props.onEventClick?.(event);
	}

	function getDayCellClasses(isToday: boolean, isCurrentMonth: boolean): string {
		return CalendarViewStyleManager.getDayCellClasses(isToday, isCurrentMonth);
	}

	function getDateNumberClasses(isToday: boolean): string {
		return CalendarViewStyleManager.getDateNumberClasses(isToday);
	}

	function getEventItemClasses(color?: string): string {
		return CalendarViewStyleManager.getEventItemClasses(color);
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			events: _events,
			initialDate: _initialDate,
			viewMode: _viewMode,
			showWeekNumbers: _showWeekNumbers,
			weekendDays: _weekendDays,
			dayClass: _dayClass,
			eventClass: _eventClass,
			headerClass: _headerClass,
			onEventClick: _onEventClick,
			onDayClick: _onDayClick,
			onEventCreate: _onEventCreate,
			...rest
		} = props;
		return rest;
	});

	return {
		get events() {
			return events;
		},
		get currentDate() {
			return currentDate;
		},
		get viewMode() {
			return viewMode;
		},
		get showWeekNumbers() {
			return showWeekNumbers;
		},
		get weekendDays() {
			return weekendDays;
		},
		get selectedDate() {
			return selectedDate;
		},
		get wrapperClass() {
			return wrapperClass;
		},
		get headerClass() {
			return headerClass;
		},
		get gridClass() {
			return gridClass;
		},
		get weekdayHeaderClass() {
			return weekdayHeaderClass;
		},
		get restProps() {
			return restProps;
		},
		navigate,
		selectDate,
		handleEventClick,
		getDayCellClasses,
		getDateNumberClasses,
		getEventItemClasses
	};
}

export default createCalendarViewState;
