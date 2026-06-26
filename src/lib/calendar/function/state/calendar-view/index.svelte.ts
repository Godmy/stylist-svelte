import type { RecipeCalendarView as CalendarViewContract } from '$stylist/calendar/interface/recipe/calendar-view';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { RecipeCalendarViewDay as RecipeCalendarViewDay } from '$stylist/calendar/interface/recipe/calendar-view-day';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createCalendarViewState(props: CalendarViewContract) {
	let currentDate = $state(new Date(props.initialDate ?? new Date()));
	let currentViewMode = $state(props.viewMode ?? 'month');

	const events = $derived(props.events ?? []);
	const viewMode = $derived(currentViewMode);
	const showWeekNumbers = $derived(props.showWeekNumbers ?? false);
	const className = $derived(props.class ?? '');
	const dayClass = $derived(props.dayClass ?? '');
	const eventClass = $derived(props.eventClass ?? '');
	const headerClassProp = $derived(props.headerClass ?? '');

	const wrapperClasses = $derived(mergeClassNames('c-calendar-view', className));
	const headerClasses = $derived(mergeClassNames('c-calendar-view__header', headerClassProp));
	const gridClasses = $derived('c-calendar-view__grid');
	const weekdayHeaderClasses = $derived('c-calendar-view__weekday');
	const todayButtonClasses = $derived('c-calendar-view__today-btn');
	const navigationButtonClasses = $derived('c-calendar-view__nav-btn');

	const days = $derived.by<RecipeCalendarViewDay[]>(() => getDaysInMonth(currentDate));
	const weekdays = $derived(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
	const monthYear = $derived(
		currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
	);

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

	function getDaysInMonth(date: Date): RecipeCalendarViewDay[] {
		const year = date.getFullYear();
		const month = date.getMonth();

		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const startDay = new Date(firstDay);
		startDay.setDate(firstDay.getDate() - firstDay.getDay());
		const endDay = new Date(lastDay);
		endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

		const calendarDays: RecipeCalendarViewDay[] = [];
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
			const dayDate = new Date(d);
			const isCurrentMonth = dayDate.getMonth() === month;
			const isTodayDate = dayDate.getTime() === today.getTime();

			const dayEvents = events.filter((event: SlotCalendarEvent) => {
				const eventStart = new Date(event.start);
				eventStart.setHours(0, 0, 0, 0);
				return eventStart.getTime() === dayDate.getTime();
			});

			calendarDays.push({ date: dayDate, isCurrentMonth, isToday: isTodayDate, events: dayEvents });
		}

		return calendarDays;
	}

	function navigateMonth(direction: number): void {
		const step = currentViewMode === 'day' ? direction : currentViewMode === 'week' ? direction * 7 : 0;
		if (currentViewMode === 'month') {
			currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
			return;
		}
		const nextDate = new Date(currentDate);
		nextDate.setDate(currentDate.getDate() + step);
		currentDate = nextDate;
	}

	function navigateToToday(): void {
		currentDate = new Date();
	}

	function handleDayClick(date: Date): void {
		props.onDayClick?.(date);
	}

	function handleEventClick(event: SlotCalendarEvent): void {
		props.onEventClick?.(event);
	}

	function handleAddEvent(date: Date): void {
		props.onEventCreate?.(date);
	}

	function changeViewMode(mode: 'day' | 'week' | 'month'): void {
		currentViewMode = mode;
	}

	function getViewToggleButtonClasses(isActive: boolean): string {
		return mergeClassNames(
			'c-calendar-view__view-btn',
			isActive && 'c-calendar-view__view-btn--active'
		);
	}

	function getDayCellClasses(isTodayDate: boolean, isCurrentMonth: boolean): string {
		return mergeClassNames(
			'c-calendar-view__day',
			isTodayDate && 'c-calendar-view__day--today',
			!isCurrentMonth && 'c-calendar-view__day--other'
		);
	}

	function getDateNumberClasses(isTodayDate: boolean): string {
		return mergeClassNames(
			'c-calendar-view__date-num',
			isTodayDate && 'c-calendar-view__date-num--today'
		);
	}

	function getEventItemClasses(color?: string): string {
		void color;
		return 'c-calendar-view__event';
	}

	function getAddEventButtonClasses(): string {
		return 'c-calendar-view__add-btn';
	}

	function getWeekNumberClasses(): string {
		return 'c-calendar-view__week-num';
	}

	return {
		get currentDate() {
			return currentDate;
		},
		get events() {
			return events;
		},
		get viewMode() {
			return viewMode;
		},
		get showWeekNumbers() {
			return showWeekNumbers;
		},
		get dayClass() {
			return dayClass;
		},
		get eventClass() {
			return eventClass;
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
		get wrapperClasses() {
			return wrapperClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get gridClasses() {
			return gridClasses;
		},
		get weekdayHeaderClasses() {
			return weekdayHeaderClasses;
		},
		get todayButtonClasses() {
			return todayButtonClasses;
		},
		get navigationButtonClasses() {
			return navigationButtonClasses;
		},
		get restProps() {
			return restProps;
		},
		navigateMonth,
		navigateToToday,
		handleDayClick,
		handleEventClick,
		handleAddEvent,
		changeViewMode,
		getViewToggleButtonClasses,
		getDayCellClasses,
		getDateNumberClasses,
		getEventItemClasses,
		getAddEventButtonClasses,
		getWeekNumberClasses
	};
}

export default createCalendarViewState;
