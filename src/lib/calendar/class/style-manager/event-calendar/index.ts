import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class EventCalendarStyleManager {
	static getWrapperClasses(_viewMode: string): string {
		return 'c-event-calendar';
	}

	static getHeaderClasses(): string {
		return 'c-event-calendar__header';
	}

	static getWeekdayHeaderClasses(): string {
		return 'c-event-calendar__weekday';
	}

	static getDateHeaderClasses(isToday: boolean): string {
		return mergeClassNames(
			'c-event-calendar__date-header',
			isToday && 'c-event-calendar__date-header--today'
		);
	}

	static getDayCellClasses(isToday: boolean, isCurrentMonth: boolean): string {
		return mergeClassNames(
			'c-event-calendar__day',
			isToday && 'c-event-calendar__day--today',
			!isCurrentMonth && 'c-event-calendar__day--other'
		);
	}

	static getDateNumberClasses(isToday: boolean): string {
		return mergeClassNames(
			'c-event-calendar__date-num',
			isToday && 'c-event-calendar__date-num--today'
		);
	}

	static getEventClasses(_hasColor: boolean, _customColor?: string): string {
		return 'c-event-calendar__event';
	}

	static getModalOverlayClasses(): string {
		return 'c-event-calendar__modal-overlay';
	}

	static getModalContentClasses(): string {
		return 'c-event-calendar__modal';
	}

	static getModalHeaderClasses(): string {
		return 'c-event-calendar__modal-header';
	}

	static getModalFooterClasses(): string {
		return 'c-event-calendar__modal-footer';
	}

	static getGridClasses(): string {
		return 'c-event-calendar__grid';
	}
}
