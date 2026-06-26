import type { SlotChildren } from '$stylist/layout/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotCalendarEvent } from '$stylist/calendar/interface/slot/calendar-event';

import type { TOKEN_CALENDAR } from '$stylist/calendar/const/enum/time-measure/calendar-enum';

export interface RecipeCalendarView extends ComputeIntersectAll<[SlotChildren]> {
	events?: SlotCalendarEvent[];
	initialDate?: Date;
	viewMode?: (typeof TOKEN_CALENDAR)[number];
	showWeekNumbers?: boolean;
	weekendDays?: number[];
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: SlotCalendarEvent) => void;
	onDayClick?: (date: Date) => void;
	onEventCreate?: (date: Date) => void;
}
