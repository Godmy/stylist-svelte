import type { MiniCalendarContract, MiniCalendarEvent, MiniCalendarDay } from '$stylist/calendar/interface/record/calendar';
import { MiniCalendarStyleManager } from '$stylist/calendar/class/style-manager/mini-calendar';

export type MiniCalendarStateProps = MiniCalendarContract;

export function createMiniCalendarState(props: MiniCalendarStateProps) {
	let currentDate = $state(new Date(props.initialDate ?? new Date()));
	let selectedDate = $state<Date | null>(null);

	const events = $derived(props.events ?? []);
	const compact = $derived(props.compact ?? false);
	const showToday = $derived(props.showToday ?? true);
	const showWeekNumbers = $derived(props.showWeekNumbers ?? false);
	const className = $derived(props.class ?? '');
	const dayClass = $derived(props.dayClass ?? '');
	const eventClass = $derived(props.eventClass ?? '');
	const headerClassProp = $derived(props.headerClass ?? '');

	const wrapperClasses = $derived(MiniCalendarStyleManager.getWrapperClasses(compact, `c-mini-calendar ${className}`));
	const headerClasses = $derived(MiniCalendarStyleManager.getHeaderClasses(headerClassProp));
	const weekdayHeaderClasses = $derived(MiniCalendarStyleManager.getWeekdayHeaderClasses(headerClassProp));
	const gridClasses = $derived(MiniCalendarStyleManager.getGridClasses());

	const days = $derived.by<MiniCalendarDay[]>(() => getDaysInMonth(currentDate));
	const weekdays = $derived(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
	const monthYear = $derived(currentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));

	const restProps = $derived.by(() => {
		const {
			events: _events,
			initialDate: _initialDate,
			compact: _compact,
			showToday: _showToday,
			showWeekNumbers: _showWeekNumbers,
			class: _class,
			dayClass: _dayClass,
			eventClass: _eventClass,
			headerClass: _headerClass,
			onDateSelect: _onDateSelect,
			onEventClick: _onEventClick,
			...rest
		} = props;
		return rest;
	});

	function getDaysInMonth(date: Date): MiniCalendarDay[] {
		const year = date.getFullYear();
		const month = date.getMonth();

		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDay = new Date(firstDay);
		startDay.setDate(firstDay.getDate() - firstDay.getDay());
		const endDay = new Date(lastDay);
		endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

		const calendarDays: MiniCalendarDay[] = [];
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
			const dayDate = new Date(d);
			const isCurrentMonth = dayDate.getMonth() === month;
			const isTodayDate = dayDate.getTime() === today.getTime();

			const dayEvents = events.filter(event => {
				const eventDate = new Date(event.start);
				eventDate.setHours(0, 0, 0, 0);
				return eventDate.getTime() === dayDate.getTime();
			});

			calendarDays.push({
				date: dayDate,
				isCurrentMonth,
				isToday: isTodayDate,
				isSelected: selectedDate ? dayDate.getTime() === selectedDate.getTime() : false,
				hasEvent: dayEvents.length > 0,
				events: dayEvents
			});
		}

		return calendarDays;
	}

	function navigateMonth(direction: number): void {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
	}

	function navigateToToday(): void {
		currentDate = new Date();
	}

	function handleDateSelect(date: Date): void {
		selectedDate = new Date(date);
		props.onDateSelect?.(date);
	}

	function handleEventClick(event: MiniCalendarEvent, e: Event): void {
		e.stopPropagation();
		props.onEventClick?.(event);
	}

	function getDayCellClasses(isTodayDate: boolean, isCurrentMonth: boolean, hasEvent: boolean): string {
		return MiniCalendarStyleManager.getDayCellClasses(isTodayDate, isCurrentMonth, hasEvent, dayClass);
	}

	function getDateNumberClasses(): string {
		return MiniCalendarStyleManager.getDateNumberClasses();
	}

	function getEventIndicatorClasses(color?: string): string {
		return MiniCalendarStyleManager.getEventIndicatorClasses(color, eventClass);
	}

	return {
		get currentDate() { return currentDate; },
		get days() { return days; },
		get weekdays() { return weekdays; },
		get monthYear() { return monthYear; },
		get compact() { return compact; },
		get showToday() { return showToday; },
		get showWeekNumbers() { return showWeekNumbers; },
		get wrapperClasses() { return wrapperClasses; },
		get headerClasses() { return headerClasses; },
		get weekdayHeaderClasses() { return weekdayHeaderClasses; },
		get gridClasses() { return gridClasses; },
		get restProps() { return restProps; },
		navigateMonth,
		navigateToToday,
		handleDateSelect,
		handleEventClick,
		getDayCellClasses,
		getDateNumberClasses,
		getEventIndicatorClasses
	};
}

export default createMiniCalendarState;
