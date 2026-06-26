import type { RecipeTimeGrid as TimeGridContract } from '$stylist/calendar/interface/recipe/time-grid';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';
import type { RecipeExtendedTimeSlot } from '$stylist/calendar/interface/recipe/extended-time-slot';
import type { RecipeDayTimeGrid } from '$stylist/calendar/interface/recipe/day-time-grid';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { isToday } from '$stylist/calendar/function/script/date-check';
import { isWeekend } from '$stylist/calendar/function/script/is-weekend';

export function createTimeGridState(props: TimeGridContract) {
	let viewStartDate = $state(new Date(props.startDate ?? new Date()));
	let viewEndDate = $state(
		new Date(
			props.endDate ??
				new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(new Date().getDate() + 6))
		)
	);
	let currentViewMode = $state<'day' | 'week' | 'month'>('week');

	const events = $derived(props.events ?? []);
	const startTime = $derived(props.startTime ?? 0);
	const endTime = $derived(props.endTime ?? 24);
	const timeStep = $derived(props.timeStep ?? 60);
	const showHeader = $derived(props.showHeader ?? true);
	const showCurrentTimeIndicator = $derived(props.showCurrentTimeIndicator ?? true);
	const showAllDayEvents = $derived(props.showAllDayEvents ?? true);
	const className = $derived(props.class ?? '');
	const slotClass = $derived(props.slotClass ?? '');
	const eventClass = $derived(props.eventClass ?? '');
	const headerClassProp = $derived(props.headerClass ?? '');

	const wrapperClasses = $derived(mergeClassNames('c-time-grid', className));
	const headerClasses = $derived(mergeClassNames('c-time-grid__header', headerClassProp));
	const timeGridClasses = $derived('c-time-grid__grid');

	const timeGrid = $derived.by<RecipeDayTimeGrid[]>(() => generateTimeGrid());

	const restProps = $derived.by(() => {
		const {
			events: _events,
			startDate: _startDate,
			endDate: _endDate,
			startTime: _startTime,
			endTime: _endTime,
			timeStep: _timeStep,
			showHeader: _showHeader,
			showCurrentTimeIndicator: _showCurrentTimeIndicator,
			showAllDayEvents: _showAllDayEvents,
			children: _children,
			class: _class,
			slotClass: _slotClass,
			eventClass: _eventClass,
			headerClass: _headerClass,
			onEventClick: _onEventClick,
			onSlotClick: _onSlotClick,
			...rest
		} = props;
		return rest;
	});

	function generateTimeSlots(): RecipeExtendedTimeSlot[] {
		const slots: RecipeExtendedTimeSlot[] = [];

		for (let hour = startTime; hour < endTime; hour++) {
			for (let minute = 0; minute < 60; minute += timeStep) {
				if (minute > 0 && timeStep >= 60) break;

				const period = hour >= 12 ? 'PM' : 'AM';
				const displayHour = hour % 12 || 12;
				const displayMinute = minute.toString().padStart(2, '0');
				const timeDisplay =
					timeStep < 60 ? `${displayHour}:${displayMinute} ${period}` : `${displayHour} ${period}`;

				const start = new Date();
				start.setHours(hour, minute, 0, 0);
				const end = new Date(start);
				end.setMinutes(start.getMinutes() + timeStep);

				slots.push({
					start,
					end,
					timeLabel: timeDisplay,
					available: true,
					events: [],
					hour,
					minute,
					time: timeDisplay
				});
			}
		}

		return slots;
	}

	function generateTimeGrid(): RecipeDayTimeGrid[] {
		const grid: RecipeDayTimeGrid[] = [];
		const start = new Date(viewStartDate);
		start.setHours(0, 0, 0, 0);
		const end = new Date(viewEndDate);
		end.setHours(0, 0, 0, 0);
		const daysCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

		for (let i = 0; i <= daysCount; i++) {
			const date = new Date(start);
			date.setDate(start.getDate() + i);
			if (date > viewEndDate) break;

			const slots: RecipeExtendedTimeSlot[] = generateTimeSlots();

			for (const event of events) {
				const eventStart = new Date(event.start);
				const eventEnd = new Date(event.end);
				const eventDay = new Date(eventStart);
				eventDay.setHours(0, 0, 0, 0);
				const dateDay = new Date(date);
				dateDay.setHours(0, 0, 0, 0);

				if (eventDay.getTime() === dateDay.getTime()) {
					for (let j = 0; j < slots.length; j++) {
						const slot = slots[j];
						const slotStart = new Date(date);
						slotStart.setHours(slot.hour, slot.minute, 0, 0);
						const slotEnd = new Date(slotStart);
						slotEnd.setMinutes(slotEnd.getMinutes() + timeStep);

						if (
							(eventStart < slotEnd && eventEnd > slotStart) ||
							eventStart.getTime() === slotStart.getTime()
						) {
							const slotEvents = slots[j].events || [];
							if (!slotEvents.find((e: SlotCalendarEvent) => e.id === event.id)) {
								slotEvents.push(event);
								slots[j].events = slotEvents;
							}
						}
					}
				}
			}

			grid.push({
				date,
				dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
				dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
				slots
			});
		}

		return grid;
	}

	function handleEventClick(event: SlotCalendarEvent): void {
		props.onEventClick?.(event);
	}

	function handleSlotClick(date: Date, hour: number, minute: number): void {
		const slotDate = new Date(date);
		slotDate.setHours(hour, minute, 0, 0);
		props.onSlotClick?.(slotDate);
	}

	function navigateWeek(direction: number): void {
		const newStart = new Date(viewStartDate);
		newStart.setDate(viewStartDate.getDate() + direction * 7);
		const newEnd = new Date(viewEndDate);
		newEnd.setDate(viewEndDate.getDate() + direction * 7);
		viewStartDate = newStart;
		viewEndDate = newEnd;
	}

	function navigateToToday(): void {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		const start = new Date(today);
		if (currentViewMode === 'week') start.setDate(today.getDate() - today.getDay());
		if (currentViewMode === 'month') start.setDate(1);
		const end = new Date(start);
		if (currentViewMode === 'day') end.setDate(start.getDate());
		if (currentViewMode === 'week') end.setDate(start.getDate() + 6);
		if (currentViewMode === 'month') end.setMonth(start.getMonth() + 1, 0);
		viewStartDate = start;
		viewEndDate = end;
	}

	function changeViewMode(mode: 'day' | 'week' | 'month'): void {
		currentViewMode = mode;
		const start = new Date(viewStartDate);
		start.setHours(0, 0, 0, 0);
		if (mode === 'week') start.setDate(start.getDate() - start.getDay());
		if (mode === 'month') start.setDate(1);
		const end = new Date(start);
		if (mode === 'day') end.setDate(start.getDate());
		if (mode === 'week') end.setDate(start.getDate() + 6);
		if (mode === 'month') end.setMonth(start.getMonth() + 1, 0);
		viewStartDate = start;
		viewEndDate = end;
	}

	function getCurrentTimePosition(): number {
		const now = new Date();
		return ((now.getHours() - startTime) * 60 + now.getMinutes()) * (100 / 60);
	}

	function getDayColumnClasses(date: Date): string {
		return mergeClassNames(
			'c-time-grid__day-col',
			isWeekend(date) && 'c-time-grid__day-col--weekend'
		);
	}

	function getDayHeaderClasses(date: Date): string {
		return mergeClassNames(
			'c-time-grid__day-header',
			isToday(date) && 'c-time-grid__day-header--today',
			headerClassProp
		);
	}

	function getTimeIndicatorClasses(): string {
		return 'c-time-grid__now-indicator';
	}

	function getEventClasses(color?: string): string {
		void color;
		return mergeClassNames('c-time-grid__event', eventClass);
	}

	function getTimeSlotClasses(): string {
		return mergeClassNames('c-time-grid__slot', slotClass);
	}

	function isTodayDate(date: Date): boolean {
		return isToday(date);
	}

	function getColumnHeight(): number {
		return (endTime - startTime) * 60 * (100 / 60);
	}

	function getSlotHeight(): number {
		return timeStep * (100 / 60);
	}

	return {
		get viewStartDate() {
			return viewStartDate;
		},
		get viewEndDate() {
			return viewEndDate;
		},
		get timeGrid() {
			return timeGrid;
		},
		get showHeader() {
			return showHeader;
		},
		get showCurrentTimeIndicator() {
			return showCurrentTimeIndicator;
		},
		get showAllDayEvents() {
			return showAllDayEvents;
		},
		get currentViewMode() {
			return currentViewMode;
		},
		get slotClass() {
			return slotClass;
		},
		get eventClass() {
			return eventClass;
		},
		get wrapperClasses() {
			return wrapperClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get timeGridClasses() {
			return timeGridClasses;
		},
		get restProps() {
			return restProps;
		},
		generateTimeSlots,
		handleEventClick,
		handleSlotClick,
		navigateWeek,
		navigateToToday,
		changeViewMode,
		getCurrentTimePosition,
		getDayColumnClasses,
		getDayHeaderClasses,
		getTimeIndicatorClasses,
		getEventClasses,
		getTimeSlotClasses,
		isTodayDate,
		getColumnHeight,
		getSlotHeight
	};
}

export default createTimeGridState;
