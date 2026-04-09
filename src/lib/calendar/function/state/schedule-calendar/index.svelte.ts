import type { ScheduleCalendarContract, ScheduleCalendarEvent, ScheduleCalendarTimeSlot, ScheduleCalendarDaySchedule } from '$stylist/calendar/interface/record/calendar';
import { ScheduleCalendarStyleManager } from '$stylist/calendar/class/style-manager/schedule-calendar';
import { isToday, isWeekend } from '$stylist/calendar/function/script/date-check';

export type ScheduleCalendarStateProps = ScheduleCalendarContract;

export function createScheduleCalendarState(props: ScheduleCalendarStateProps) {
	let viewStartDate = $state(new Date(props.startDate ?? new Date()));
	let viewEndDate = $state(new Date(props.endDate ?? new Date(new Date().setDate(new Date().getDate() + 6))));

	const events = $derived(props.events ?? []);
	const startTime = $derived(props.startTime ?? 8);
	const endTime = $derived(props.endTime ?? 20);
	const timeSlotHeight = $derived(props.timeSlotHeight ?? 60);
	const showHeader = $derived(props.showHeader ?? true);
	const showTimeGutter = $derived(props.showTimeGutter ?? true);
	const className = $derived(props.class ?? '');
	const slotClass = $derived(props.slotClass ?? '');
	const eventClass = $derived(props.eventClass ?? '');
	const headerClassProp = $derived(props.headerClass ?? '');

	const wrapperClasses = $derived(ScheduleCalendarStyleManager.getWrapperClasses(className));
	const headerClasses = $derived(ScheduleCalendarStyleManager.getHeaderClasses(headerClassProp));
	const gridClasses = $derived(ScheduleCalendarStyleManager.getGridClasses());

	const schedule = $derived.by<ScheduleCalendarDaySchedule[]>(() => generateSchedule());

	const restProps = $derived.by(() => {
		const {
			events: _events,
			startDate: _startDate,
			endDate: _endDate,
			startTime: _startTime,
			endTime: _endTime,
			showHeader: _showHeader,
			showTimeGutter: _showTimeGutter,
			timeSlotHeight: _timeSlotHeight,
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

	function generateTimeSlots(): ScheduleCalendarTimeSlot[] {
		const slots: ScheduleCalendarTimeSlot[] = [];
		for (let hour = startTime; hour < endTime; hour++) {
			const period = hour >= 12 ? 'PM' : 'AM';
			const displayHour = hour % 12 || 12;
			slots.push({ time: `${displayHour} ${period}`, hour, events: [] });
		}
		return slots;
	}

	function generateSchedule(): ScheduleCalendarDaySchedule[] {
		const result: ScheduleCalendarDaySchedule[] = [];
		const startDate = props.startDate ?? new Date();
		const endDate = props.endDate ?? new Date(new Date().setDate(new Date().getDate() + 6));
		const daysCount = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

		for (let i = 0; i <= daysCount; i++) {
			const date = new Date(startDate);
			date.setDate(startDate.getDate() + i);
			if (date > endDate) break;

			const slots = generateTimeSlots();

			for (const event of events) {
				const eventDay = new Date(event.start);
				eventDay.setHours(0, 0, 0, 0);
				const dateDay = new Date(date);
				dateDay.setHours(0, 0, 0, 0);

				if (eventDay.getTime() === dateDay.getTime()) {
					const hour = event.start.getHours();
					const slotIndex = hour - startTime;
					if (slotIndex >= 0 && slotIndex < slots.length) {
						slots[slotIndex].events.push(event);
					}
				}
			}

			result.push({
				date,
				dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
				dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
				slots
			});
		}

		return result;
	}

	function handleEventClick(event: ScheduleCalendarEvent): void {
		props.onEventClick?.(event);
	}

	function handleSlotClick(date: Date, hour: number): void {
		const slotDate = new Date(date);
		slotDate.setHours(hour, 0, 0, 0);
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

	function getDayColumnClasses(date: Date): string {
		return ScheduleCalendarStyleManager.getDayColumnClasses(isWeekend(date));
	}

	function getDayHeaderClasses(date: Date): string {
		return ScheduleCalendarStyleManager.getDayHeaderClasses(isToday(date), headerClassProp);
	}

	function getTimeGutterClasses(): string {
		return ScheduleCalendarStyleManager.getTimeGutterClasses();
	}

	function getTimeSlotClasses(): string {
		return ScheduleCalendarStyleManager.getTimeSlotClasses();
	}

	function getEventClasses(color?: string): string {
		return ScheduleCalendarStyleManager.getEventClasses(color, eventClass);
	}

	function getPriorityBadgeClasses(priority: string): string {
		return ScheduleCalendarStyleManager.getPriorityBadgeClasses(priority);
	}

	return {
		get viewStartDate() { return viewStartDate; },
		get viewEndDate() { return viewEndDate; },
		get schedule() { return schedule; },
		get showHeader() { return showHeader; },
		get showTimeGutter() { return showTimeGutter; },
		get timeSlotHeight() { return timeSlotHeight; },
		get slotClass() { return slotClass; },
		get eventClass() { return eventClass; },
		get wrapperClasses() { return wrapperClasses; },
		get headerClasses() { return headerClasses; },
		get gridClasses() { return gridClasses; },
		get restProps() { return restProps; },
		generateTimeSlots,
		handleEventClick,
		handleSlotClick,
		navigateWeek,
		navigateToToday,
		getDayColumnClasses,
		getDayHeaderClasses,
		getTimeGutterClasses,
		getTimeSlotClasses,
		getEventClasses,
		getPriorityBadgeClasses
	};
}

export default createScheduleCalendarState;
