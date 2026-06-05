import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class TimeGridStyleManager {
	static getWrapperClasses(): string {
		return 'c-time-grid';
	}
	static getHeaderClasses(): string {
		return 'c-time-grid__header';
	}
	static getTimeGridClasses(): string {
		return 'c-time-grid__grid';
	}
	static getTimeSlotClasses(): string {
		return 'c-time-grid__slot';
	}

	static getDayColumnClasses(isWeekend: boolean): string {
		return mergeClassNames('c-time-grid__day-col', isWeekend && 'c-time-grid__day-col--weekend');
	}

	static getDayHeaderClasses(isToday: boolean, headerClass: string = ''): string {
		return mergeClassNames(
			'c-time-grid__day-header',
			isToday && 'c-time-grid__day-header--today',
			headerClass
		);
	}

	static getTimeIndicatorClasses(): string {
		return 'c-time-grid__now-indicator';
	}

	static getEventClasses(_color?: string, _eventClass: string = ''): string {
		return 'c-time-grid__event';
	}

	static getAllDayEventClasses(): string {
		return 'c-time-grid__allday-event';
	}

	static getTimeLabelClasses(isFirstSlot: boolean): string {
		return mergeClassNames(
			'c-time-grid__time-label',
			isFirstSlot && 'c-time-grid__time-label--first'
		);
	}

	static getNavigationButtonClasses(): string {
		return 'c-time-grid__nav-btn';
	}
	static getViewToggleButtonClasses(): string {
		return 'c-time-grid__view-btn';
	}
}
