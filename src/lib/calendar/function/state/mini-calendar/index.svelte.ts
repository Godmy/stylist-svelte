import type { RecipeMiniCalendar as MiniCalendarContract } from '$stylist/calendar/interface/recipe/mini-calendar';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { RecipeCalendarDay } from '$stylist/calendar/interface/recipe/calendar-day';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createMiniCalendarState(props: MiniCalendarContract) {
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

	const wrapperClasses = $derived(
		mergeClassNames('c-mini-calendar', compact && 'c-mini-calendar--compact', className)
	);
	const headerClasses = $derived(mergeClassNames('c-mini-calendar__header', headerClassProp));
	const weekdayHeaderClasses = $derived(
		mergeClassNames('c-mini-calendar__weekday', headerClassProp)
	);
	const gridClasses = $derived('c-mini-calendar__grid');

	const days = $derived.by<RecipeCalendarDay[]>(() => getDaysInMonth(currentDate));
	const weekdays = $derived(['S', 'M', 'T', 'W', 'T', 'F', 'S']);
	const monthYear = $derived(
		currentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
	);

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

	function getDaysInMonth(date: Date): RecipeCalendarDay[] {
		const year = date.getFullYear();
		const month = date.getMonth();

		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDay = new Date(firstDay);
		startDay.setDate(firstDay.getDate() - firstDay.getDay());
		const endDay = new Date(lastDay);
		endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

		const calendarDays: RecipeCalendarDay[] = [];
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
			const dayDate = new Date(d);
			const isCurrentMonth = dayDate.getMonth() === month;
			const isTodayDate = dayDate.getTime() === today.getTime();

			const dayEvents = events.filter((event) => {
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

	function handleEventClick(event: SlotCalendarEvent, e: Event): void {
		e.stopPropagation();
		props.onEventClick?.(event);
	}

	function getDayCellClasses(
		isTodayDate: boolean,
		isCurrentMonth: boolean,
		hasEvent: boolean
	): string {
		return mergeClassNames(
			'c-mini-calendar__day',
			isTodayDate && 'c-mini-calendar__day--today',
			!isCurrentMonth && 'c-mini-calendar__day--other',
			hasEvent && 'c-mini-calendar__day--has-event',
			dayClass
		);
	}

	function getDateNumberClasses(): string {
		return 'c-mini-calendar__date-num';
	}

	function getEventIndicatorClasses(color?: string): string {
		void color;
		return mergeClassNames('c-mini-calendar__event-dot', eventClass);
	}

	return {
		get currentDate() {
			return currentDate;
		},
		get days() {
			return days;
		},
		get weekdays() {
			return weekdays;
		},
		get monthYear() {
			return monthYear;
		},
		get compact() {
			return compact;
		},
		get showToday() {
			return showToday;
		},
		get showWeekNumbers() {
			return showWeekNumbers;
		},
		get wrapperClasses() {
			return wrapperClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get weekdayHeaderClasses() {
			return weekdayHeaderClasses;
		},
		get gridClasses() {
			return gridClasses;
		},
		get restProps() {
			return restProps;
		},
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
