import type { EventCalendarContract, EventCalendarEvent, EventCalendarDay } from '$stylist/calendar/interface/record/calendar';
import type { TokenTimeMeasure } from '$stylist/calendar/type/enum/time-measure';
import { EventCalendarStyleManager } from '$stylist/calendar/class/style-manager/event-calendar';

export type EventCalendarStateProps = EventCalendarContract;

export function createEventCalendarState(props: EventCalendarStateProps) {
	let currentDate = $state(new Date(props.initialDate ?? new Date()));
	let selectedEvent: EventCalendarEvent | null = $state(null);
	let showEventActions = $state(false);
	let currentViewMode = $state<TokenTimeMeasure>(props.viewMode ?? 'month');

	const events = $derived(props.events ?? []);
	const className = $derived(props.class ?? '');
	const dayClass = $derived(props.dayClass ?? '');
	const eventClass = $derived(props.eventClass ?? '');
	const headerClassProp = $derived(props.headerClass ?? '');
	const showAllDayEvents = $derived(props.showAllDayEvents ?? true);
	const showEventDuration = $derived(props.showEventDuration ?? true);

	const wrapperClasses = $derived(EventCalendarStyleManager.getWrapperClasses(currentViewMode));
	const headerClasses = $derived(EventCalendarStyleManager.getHeaderClasses());

	const days = $derived.by<EventCalendarDay[]>(() => {
		if (currentViewMode === 'month') return getDaysInMonth(currentDate);
		if (currentViewMode === 'week') return getDaysInWeek(currentDate);
		return getDayInDay(currentDate);
	});

	const weekdays = $derived(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
	const displayTitle = $derived(getDisplayTitle(currentDate, currentViewMode));

	const restProps = $derived.by(() => {
		const {
			events: _events,
			initialDate: _initialDate,
			viewMode: _viewMode,
			class: _class,
			dayClass: _dayClass,
			eventClass: _eventClass,
			headerClass: _headerClass,
			showAllDayEvents: _showAllDayEvents,
			showEventDuration: _showEventDuration,
			children: _children,
			onEventClick: _onEventClick,
			onEventCreate: _onEventCreate,
			onEventEdit: _onEventEdit,
			onEventDelete: _onEventDelete,
			...rest
		} = props;
		return rest;
	});

	function isEventInDay(event: EventCalendarEvent, dayDate: Date): boolean {
		const eventDate = new Date(event.start);
		eventDate.setHours(0, 0, 0, 0);
		return eventDate.getTime() === dayDate.getTime();
	}

	function generateCalendarDays(
		startDate: Date,
		endDate: Date,
		currentMonth: number,
		eventsArr: EventCalendarEvent[]
	): EventCalendarDay[] {
		const calendarDays: EventCalendarDay[] = [];
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
			const date = new Date(d);
			const isCurrentMonth = date.getMonth() === currentMonth;
			const isTodayDate = date.getTime() === today.getTime();
			const dayEvents = eventsArr.filter(event => isEventInDay(event, date));
			calendarDays.push({ date, isCurrentMonth, isToday: isTodayDate, isSelected: false, events: dayEvents });
		}

		return calendarDays;
	}

	function getDaysInMonth(date: Date): EventCalendarDay[] {
		const year = date.getFullYear();
		const month = date.getMonth();
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDay = new Date(firstDay);
		startDay.setDate(firstDay.getDate() - firstDay.getDay());
		const endDay = new Date(lastDay);
		endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));
		return generateCalendarDays(startDay, endDay, month, events);
	}

	function getDaysInWeek(date: Date): EventCalendarDay[] {
		const startOfWeek = new Date(date);
		startOfWeek.setDate(date.getDate() - date.getDay());
		const endOfWeek = new Date(startOfWeek);
		endOfWeek.setDate(startOfWeek.getDate() + 6);
		return generateCalendarDays(startOfWeek, endOfWeek, date.getMonth(), events);
	}

	function getDayInDay(date: Date): EventCalendarDay[] {
		const startOfDay = new Date(date);
		startOfDay.setHours(0, 0, 0, 0);
		const endOfDay = new Date(date);
		endOfDay.setHours(23, 59, 59, 999);
		return generateCalendarDays(startOfDay, endOfDay, date.getMonth(), events);
	}

	function navigateMonth(direction: number): void {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
	}

	function navigateWeek(direction: number): void {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + direction * 7);
	}

	function navigateDay(direction: number): void {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + direction);
	}

	function navigateToToday(): void {
		currentDate = new Date();
	}

	function changeViewMode(mode: TokenTimeMeasure): void {
		currentViewMode = mode;
	}

	function navigateCurrent(direction: number): void {
		if (currentViewMode === 'month') navigateMonth(direction);
		else if (currentViewMode === 'week') navigateWeek(direction);
		else navigateDay(direction);
	}

	function handleDayClick(date: Date): void {
		props.onEventCreate?.(date);
	}

	function handleEventClick(event: EventCalendarEvent, e: Event): void {
		e.stopPropagation();
		selectedEvent = event;
		showEventActions = true;
		props.onEventClick?.(event);
	}

	function handleEventEdit(): void {
		if (selectedEvent) {
			props.onEventEdit?.(selectedEvent);
			showEventActions = false;
		}
	}

	function handleEventDelete(): void {
		if (selectedEvent) {
			props.onEventDelete?.(selectedEvent);
			showEventActions = false;
			selectedEvent = null;
		}
	}

	function closeEventActions(): void {
		showEventActions = false;
	}

	function getDisplayTitle(date: Date, mode: TokenTimeMeasure): string {
		switch (mode) {
			case 'day':
				return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
			case 'week': {
				const endOfWeek = new Date(date);
				endOfWeek.setDate(date.getDate() + 6);
				const startFormat = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
				const endFormat = endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
				return `${startFormat} - ${endFormat}`;
			}
			case 'month':
			default:
				return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
		}
	}

	function formatDate(date: Date): string {
		return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}

	function formatTimeRange(start: Date, end: Date): string {
		return `${formatDate(start)} - ${formatDate(end)}`;
	}

	function getWeekdayHeaderClasses(): string {
		return EventCalendarStyleManager.getWeekdayHeaderClasses();
	}

	function getGridClasses(): string {
		return EventCalendarStyleManager.getGridClasses();
	}

	function getDateHeaderClasses(isTodayDate: boolean): string {
		return EventCalendarStyleManager.getDateHeaderClasses(isTodayDate);
	}

	function getDayCellClasses(isTodayDate: boolean, isCurrentMonth: boolean): string {
		return EventCalendarStyleManager.getDayCellClasses(isTodayDate, isCurrentMonth);
	}

	function getDateNumberClasses(isTodayDate: boolean): string {
		return EventCalendarStyleManager.getDateNumberClasses(isTodayDate);
	}

	function getEventClasses(hasColor: boolean, color?: string): string {
		return EventCalendarStyleManager.getEventClasses(hasColor, color);
	}

	function getModalOverlayClasses(): string {
		return EventCalendarStyleManager.getModalOverlayClasses();
	}

	function getModalContentClasses(): string {
		return EventCalendarStyleManager.getModalContentClasses();
	}

	function getModalHeaderClasses(): string {
		return EventCalendarStyleManager.getModalHeaderClasses();
	}

	function getModalFooterClasses(): string {
		return EventCalendarStyleManager.getModalFooterClasses();
	}

	return {
		get currentDate() { return currentDate; },
		get currentViewMode() { return currentViewMode; },
		get selectedEvent() { return selectedEvent; },
		get showEventActions() { return showEventActions; },
		get days() { return days; },
		get weekdays() { return weekdays; },
		get displayTitle() { return displayTitle; },
		get events() { return events; },
		get className() { return className; },
		get dayClass() { return dayClass; },
		get eventClass() { return eventClass; },
		get headerClassProp() { return headerClassProp; },
		get showAllDayEvents() { return showAllDayEvents; },
		get showEventDuration() { return showEventDuration; },
		get wrapperClasses() { return wrapperClasses; },
		get headerClasses() { return headerClasses; },
		get restProps() { return restProps; },
		navigateCurrent,
		navigateToToday,
		changeViewMode,
		handleDayClick,
		handleEventClick,
		handleEventEdit,
		handleEventDelete,
		closeEventActions,
		formatTimeRange,
		getWeekdayHeaderClasses,
		getGridClasses,
		getDateHeaderClasses,
		getDayCellClasses,
		getDateNumberClasses,
		getEventClasses,
		getModalOverlayClasses,
		getModalContentClasses,
		getModalHeaderClasses,
		getModalFooterClasses
	};
}

export default createEventCalendarState;
