import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class ScheduleCalendarStyleManager {
	static getWrapperClasses(hostClass: string): string {
		return mergeClassNames('c-schedule-calendar', hostClass);
	}

	static getHeaderClasses(headerClass: string): string {
		return mergeClassNames('c-schedule-calendar__header', headerClass);
	}

	static getGridClasses(): string {
		return 'c-schedule-calendar__grid';
	}
	static getTimeGutterClasses(): string {
		return 'c-schedule-calendar__gutter';
	}
	static getTimeSlotClasses(): string {
		return 'c-schedule-calendar__gutter-slot';
	}

	static getDayColumnClasses(isWeekend: boolean): string {
		return mergeClassNames(
			'c-schedule-calendar__day-col',
			isWeekend && 'c-schedule-calendar__day-col--weekend'
		);
	}

	static getDayHeaderClasses(isToday: boolean, headerClass: string): string {
		return mergeClassNames(
			'c-schedule-calendar__day-header',
			isToday && 'c-schedule-calendar__day-header--today',
			headerClass
		);
	}

	static getTimeSlotCellClasses(slotClass: string): string {
		return mergeClassNames('c-schedule-calendar__slot', slotClass);
	}

	static getEventClasses(_color?: string, _eventClass: string = ''): string {
		return 'c-schedule-calendar__event';
	}

	static getPriorityBadgeClasses(priority: string): string {
		return mergeClassNames(
			'c-schedule-calendar__priority',
			`c-schedule-calendar__priority--${priority}`
		);
	}

	static getTodayButtonClasses(): string {
		return 'c-schedule-calendar__today-btn';
	}
	static getNavigationButtonClasses(): string {
		return 'c-schedule-calendar__nav-btn';
	}
}
