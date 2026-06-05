import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class MiniCalendarStyleManager {
	static getWrapperClasses(compact: boolean, hostClass: string): string {
		return mergeClassNames('c-mini-calendar', compact && 'c-mini-calendar--compact', hostClass);
	}

	static getHeaderClasses(headerClass: string): string {
		return mergeClassNames('c-mini-calendar__header', headerClass);
	}

	static getWeekdayHeaderClasses(headerClass: string): string {
		return mergeClassNames('c-mini-calendar__weekday', headerClass);
	}

	static getDayCellClasses(
		isToday: boolean,
		isCurrentMonth: boolean,
		hasEvent: boolean,
		dayClass: string
	): string {
		return mergeClassNames(
			'c-mini-calendar__day',
			isToday && 'c-mini-calendar__day--today',
			!isCurrentMonth && 'c-mini-calendar__day--other',
			hasEvent && 'c-mini-calendar__day--has-event',
			dayClass
		);
	}

	static getDateNumberClasses(): string {
		return 'c-mini-calendar__date-num';
	}

	static getEventIndicatorClasses(_color?: string, eventClass: string = ''): string {
		return mergeClassNames('c-mini-calendar__event-dot', eventClass);
	}

	static getGridClasses(): string {
		return 'c-mini-calendar__grid';
	}
}
