import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class CalendarViewStyleManager {
	static getWrapperClasses(): string {
		return 'c-calendar-view';
	}

	static getHeaderClasses(): string {
		return 'c-calendar-view__header';
	}

	static getNavigationButtonClasses(): string {
		return 'c-calendar-view__nav-btn';
	}

	static getTodayButtonClasses(): string {
		return 'c-calendar-view__today-btn';
	}

	static getViewToggleButtonClasses(isActive: boolean): string {
		return mergeClassNames(
			'c-calendar-view__view-btn',
			isActive && 'c-calendar-view__view-btn--active'
		);
	}

	static getGridClasses(): string {
		return 'c-calendar-view__grid';
	}

	static getWeekdayHeaderClasses(): string {
		return 'c-calendar-view__weekday';
	}

	static getDayCellClasses(isToday: boolean, isCurrentMonth: boolean): string {
		return mergeClassNames(
			'c-calendar-view__day',
			isToday && 'c-calendar-view__day--today',
			!isCurrentMonth && 'c-calendar-view__day--other'
		);
	}

	static getDateNumberClasses(isToday: boolean): string {
		return mergeClassNames(
			'c-calendar-view__date-num',
			isToday && 'c-calendar-view__date-num--today'
		);
	}

	static getAddEventButtonClasses(): string {
		return 'c-calendar-view__add-btn';
	}

	static getEventItemClasses(_color?: string): string {
		return 'c-calendar-view__event';
	}

	static getWeekNumberClasses(): string {
		return 'c-calendar-view__week-num';
	}
}
