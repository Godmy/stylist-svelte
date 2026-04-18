import type { RecipeTimeGrid as TimeGridContract } from '$stylist/calendar/interface/recipe/time-grid';
import type { SlotTimeGridEvent as SlotTimeGridEvent } from '$stylist/calendar/interface/slot/time-grid-event';
import type { RecipeTimeGridExtendedTimeSlot as RecipeTimeGridExtendedTimeSlot } from '$stylist/calendar/interface/recipe/time-grid-extended-time-slot';
import type { RecipeTimeGridDayTimeGrid as RecipeTimeGridDayTimeGrid } from '$stylist/calendar/interface/recipe/time-grid-day-time-grid';
import { TimeGridStyleManager } from '$stylist/management/class/style-manager/time-grid';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { isToday } from '$stylist/calendar/function/script/date-check';
import { isWeekend } from '$stylist/calendar/function/script/is-weekend';

export function createTimeGridState(props: TimeGridContract) {
	let viewStartDate = $state(new Date(props.startDate ?? new Date()));
	let viewEndDate = $state(new Date(props.endDate ?? new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(new Date().getDate() + 6))));

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

	const wrapperClasses = $derived(mergeClassNames(TimeGridStyleManager.getWrapperClasses(), className));
	const headerClasses = $derived(mergeClassNames(TimeGridStyleManager.getHeaderClasses(), headerClassProp));
	const timeGridClasses = $derived(TimeGridStyleManager.getTimeGridClasses());

	const timeGrid = $derived.by<RecipeTimeGridDayTimeGrid[]>(() => generateTimeGrid());

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

	function generateTimeSlots(): RecipeTimeGridExtendedTimeSlot[] {
		const slots: RecipeTimeGridExtendedTimeSlot[] = [];

		for (let hour = startTime; hour < endTime; hour++) {
			for (let minute = 0; minute < 60; minute += timeStep) {
				if (minute > 0 && timeStep >= 60) break;

				const period = hour >= 12 ? 'PM' : 'AM';
				const displayHour = hour % 12 || 12;
				const displayMinute = minute.toString().padStart(2, '0');
				const timeDisplay = timeStep < 60
					? `${displayHour}:${displayMinute} ${period}`
					: `${displayHour} ${period}`;

				const start = new Date();
				start.setHours(hour, minute, 0, 0);
				const end = new Date(start);
				end.setMinutes(start.getMinutes() + timeStep);

				slots.push({ start, end, timeLabel: timeDisplay, available: true, events: [], hour, minute, time: timeDisplay });
			}
		}

		return slots;
	}

	function generateTimeGrid(): RecipeTimeGridDayTimeGrid[] {
		const grid: RecipeTimeGridDayTimeGrid[] = [];
		const start = new Date(props.startDate ?? new Date());
		start.setHours(0, 0, 0, 0);
		const end = new Date(props.endDate ?? new Date());
		end.setHours(0, 0, 0, 0);
		const daysCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

		for (let i = 0; i <= daysCount; i++) {
			const date = new Date(start);
			date.setDate(start.getDate() + i);
			if (date > (props.endDate ?? new Date())) break;

			const slots: RecipeTimeGridExtendedTimeSlot[] = generateTimeSlots();

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
							if (!slotEvents.find((e: SlotTimeGridEvent) => e.id === event.id)) {
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

	function handleEventClick(event: SlotTimeGridEvent): void {
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
		start.setDate(today.getDate() - today.getDay());
		const end = new Date(start);
		end.setDate(start.getDate() + 6);
		viewStartDate = start;
		viewEndDate = end;
	}

	function getCurrentTimePosition(): number {
		const now = new Date();
		return ((now.getHours() - startTime) * 60 + now.getMinutes()) * (100 / 60);
	}

	function getDayColumnClasses(date: Date): string {
		return mergeClassNames(TimeGridStyleManager.getDayColumnClasses(isWeekend(date)));
	}

	function getDayHeaderClasses(date: Date): string {
		return mergeClassNames(TimeGridStyleManager.getDayHeaderClasses(isToday(date)), headerClassProp);
	}

	function getTimeIndicatorClasses(): string {
		return TimeGridStyleManager.getTimeIndicatorClasses();
	}

	function getEventClasses(color?: string): string {
		return mergeClassNames(TimeGridStyleManager.getEventClasses(color, eventClass));
	}

	function getTimeSlotClasses(): string {
		return mergeClassNames(TimeGridStyleManager.getTimeSlotClasses(), slotClass);
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
		get viewStartDate() { return viewStartDate; },
		get viewEndDate() { return viewEndDate; },
		get timeGrid() { return timeGrid; },
		get showHeader() { return showHeader; },
		get showCurrentTimeIndicator() { return showCurrentTimeIndicator; },
		get showAllDayEvents() { return showAllDayEvents; },
		get slotClass() { return slotClass; },
		get eventClass() { return eventClass; },
		get wrapperClasses() { return wrapperClasses; },
		get headerClasses() { return headerClasses; },
		get timeGridClasses() { return timeGridClasses; },
		get restProps() { return restProps; },
		generateTimeSlots,
		handleEventClick,
		handleSlotClick,
		navigateWeek,
		navigateToToday,
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
