import { CalendarViewStyleManager } from '$stylist/calendar/class/style-manager/calendar-view';
import type { CalendarViewContract, CalendarViewEvent, CalendarViewDay } from '$stylist/calendar/interface/record/calendar';

export type CalendarViewStateProps = CalendarViewContract;

export function createCalendarViewState(props: CalendarViewStateProps) {
	let currentDate = $state(new Date(props.initialDate ?? new Date()));

	const events = $derived(props.events ?? []);
	const viewMode = $derived(props.viewMode ?? 'month');
	const showWeekNumbers = $derived(props.showWeekNumbers ?? false);
	const className = $derived(props.class ?? '');
	const dayClass = $derived(props.dayClass ?? '');
	const eventClass = $derived(props.eventClass ?? '');
	const headerClassProp = $derived(props.headerClass ?? '');

	const wrapperClasses = $derived(`${CalendarViewStyleManager.getWrapperClasses()} ${className}`);
	const headerClasses = $derived(`${CalendarViewStyleManager.getHeaderClasses()} ${headerClassProp}`);
	const gridClasses = $derived(CalendarViewStyleManager.getGridClasses());
	const weekdayHeaderClasses = $derived(CalendarViewStyleManager.getWeekdayHeaderClasses());
	const todayButtonClasses = $derived(CalendarViewStyleManager.getTodayButtonClasses());
	const navigationButtonClasses = $derived(CalendarViewStyleManager.getNavigationButtonClasses());

	const days = $derived.by<CalendarViewDay[]>(() => getDaysInMonth(currentDate));
	const weekdays = $derived(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
	const monthYear = $derived(currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));

	const restProps = $derived.by(() => {
		const {
			events: _events,
			initialDate: _initialDate,
			viewMode: _viewMode,
			showWeekNumbers: _showWeekNumbers,
			weekendDays: _weekendDays,
			class: _class,
			dayClass: _dayClass,
			eventClass: _eventClass,
			headerClass: _headerClass,
			onEventClick: _onEventClick,
			onDayClick: _onDayClick,
			onEventCreate: _onEventCreate,
			children: _children,
			...rest
		} = props;
		return rest;
	});

	function getDaysInMonth(date: Date): CalendarViewDay[] {
		const year = date.getFullYear();
		const month = date.getMonth();

		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDay = new Date(firstDay);
		startDay.setDate(firstDay.getDate() - firstDay.getDay());
		const endDay = new Date(lastDay);
		endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

		const calendarDays: CalendarViewDay[] = [];
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
			const dayDate = new Date(d);
			const isCurrentMonth = dayDate.getMonth() === month;
			const isTodayDate = dayDate.getTime() === today.getTime();

			const dayEvents = events.filter((event: CalendarViewEvent) => {
				const eventStart = new Date(event.start);
				eventStart.setHours(0, 0, 0, 0);
				return eventStart.getTime() === dayDate.getTime();
			});

			calendarDays.push({ date: dayDate, isCurrentMonth, isToday: isTodayDate, events: dayEvents });
		}

		return calendarDays;
	}

	function navigateMonth(direction: number): void {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
	}

	function navigateToToday(): void {
		currentDate = new Date();
	}

	function handleDayClick(date: Date): void {
		props.onDayClick?.(date);
	}

	function handleEventClick(event: CalendarViewEvent): void {
		props.onEventClick?.(event);
	}

	function handleAddEvent(date: Date): void {
		props.onEventCreate?.(date);
	}

	function getViewToggleButtonClasses(isActive: boolean): string {
		return CalendarViewStyleManager.getViewToggleButtonClasses(isActive);
	}

	function getDayCellClasses(isTodayDate: boolean, isCurrentMonth: boolean): string {
		return CalendarViewStyleManager.getDayCellClasses(isTodayDate, isCurrentMonth);
	}

	function getDateNumberClasses(isTodayDate: boolean): string {
		return CalendarViewStyleManager.getDateNumberClasses(isTodayDate);
	}

	function getEventItemClasses(color?: string): string {
		return CalendarViewStyleManager.getEventItemClasses(color);
	}

	function getAddEventButtonClasses(): string {
		return CalendarViewStyleManager.getAddEventButtonClasses();
	}

	function getWeekNumberClasses(): string {
		return CalendarViewStyleManager.getWeekNumberClasses();
	}

	return {
		get currentDate() { return currentDate; },
		get events() { return events; },
		get viewMode() { return viewMode; },
		get showWeekNumbers() { return showWeekNumbers; },
		get dayClass() { return dayClass; },
		get eventClass() { return eventClass; },
		get days() { return days; },
		get weekdays() { return weekdays; },
		get monthYear() { return monthYear; },
		get wrapperClasses() { return wrapperClasses; },
		get headerClasses() { return headerClasses; },
		get gridClasses() { return gridClasses; },
		get weekdayHeaderClasses() { return weekdayHeaderClasses; },
		get todayButtonClasses() { return todayButtonClasses; },
		get navigationButtonClasses() { return navigationButtonClasses; },
		get restProps() { return restProps; },
		navigateMonth,
		navigateToToday,
		handleDayClick,
		handleEventClick,
		handleAddEvent,
		getViewToggleButtonClasses,
		getDayCellClasses,
		getDateNumberClasses,
		getEventItemClasses,
		getAddEventButtonClasses,
		getWeekNumberClasses
	};
}

export default createCalendarViewState;
