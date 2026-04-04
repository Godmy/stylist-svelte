import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { CalendarHTMLAttributes } from '$stylist/calendar/type/struct/item';
import type { ChildrenHtmlAttributes } from '$stylist/calendar/type/struct/children';
import type { TokenTimeMeasure } from '$stylist/information/type/enum/time-measure';
import type { TokenPriority } from '$stylist/information/type/enum/priority';
import type { Snippet } from 'svelte';

// ==================== CalendarView ====================
export type CalendarViewMode = 'day' | 'week' | 'month';

export interface CalendarViewEvent {
	id: string;
	title: string;
	start: Date;
	end: Date;
	color?: string;
	allDay?: boolean;
}

export interface CalendarViewDay {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	events: CalendarViewEvent[];
}

export interface CalendarViewContractBase {
	events?: CalendarViewEvent[];
	initialDate?: Date;
	viewMode?: CalendarViewMode;
	showWeekNumbers?: boolean;
	weekendDays?: number[];
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: CalendarViewEvent) => void;
	onDayClick?: (date: Date) => void;
	onEventCreate?: (date: Date) => void;
}

export type CalendarViewContract = RecordArchitectureMerge<
	[
		CalendarViewContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

// ==================== EventCalendar ====================
export interface EventCalendarEvent {
	id: string;
	title: string;
	start: Date;
	end: Date;
	color?: string;
	allDay?: boolean;
	location?: string;
	description?: string;
}

export interface EventCalendarDay {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected?: boolean;
	hasEvent?: boolean;
	events: EventCalendarEvent[];
}

export interface EventCalendarContractBase {
	events?: EventCalendarEvent[];
	initialDate?: Date;
	viewMode?: TokenTimeMeasure;
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	showAllDayEvents?: boolean;
	showEventDuration?: boolean;
	onEventClick?: (event: EventCalendarEvent) => void;
	onEventCreate?: (date: Date) => void;
	onEventEdit?: (event: EventCalendarEvent) => void;
	onEventDelete?: (event: EventCalendarEvent) => void;
}

export type EventCalendarContract = RecordArchitectureMerge<
	[
		EventCalendarContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

// ==================== ScheduleCalendar ====================
export interface ScheduleCalendarEvent extends EventCalendarEvent {
	priority?: TokenPriority;
}

export interface ScheduleCalendarTimeSlot {
	time: string;
	hour: number;
	events: ScheduleCalendarEvent[];
}

export interface ScheduleCalendarDaySchedule {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: ScheduleCalendarTimeSlot[];
}

export interface ScheduleCalendarContractBase {
	events?: ScheduleCalendarEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	showHeader?: boolean;
	showTimeGutter?: boolean;
	timeSlotHeight?: number;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	class?: string;
	onSlotClick?: (date: Date) => void;
	onEventClick?: (event: ScheduleCalendarEvent) => void;
}

export type ScheduleCalendarContract = RecordArchitectureMerge<
	[
		ScheduleCalendarContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

// ==================== TimeGrid ====================
export interface TimeGridEvent {
	id: string;
	title: string;
	start: Date;
	end: Date;
	location?: string;
	color?: string;
	allDay?: boolean;
}

export interface TimeGridExtendedTimeSlot {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	events: TimeGridEvent[];
	hour: number;
	minute: number;
	time: string;
}

export interface TimeGridDayTimeGrid {
	date: Date;
	dayOfWeek: string;
	dateStr: string;
	slots: TimeGridExtendedTimeSlot[];
}

export interface TimeGridContractBase {
	events?: TimeGridEvent[];
	startDate?: Date;
	endDate?: Date;
	startTime?: number;
	endTime?: number;
	timeStep?: number;
	showHeader?: boolean;
	showCurrentTimeIndicator?: boolean;
	showAllDayEvents?: boolean;
	class?: string;
	slotClass?: string;
	eventClass?: string;
	headerClass?: string;
	onEventClick?: (event: TimeGridEvent) => void;
	onSlotClick?: (slotDate: Date) => void;
}

export type TimeGridContract = RecordArchitectureMerge<
	[
		TimeGridContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

// ==================== MiniCalendar ====================
export interface MiniCalendarEvent {
	id?: string;
	title: string;
	start: Date;
	end?: Date;
	description?: string;
	color?: string;
}

export interface MiniCalendarDay {
	date: Date;
	isCurrentMonth: boolean;
	isToday: boolean;
	isSelected: boolean;
	hasEvent: boolean;
	events: MiniCalendarEvent[];
}

export interface MiniCalendarContractBase {
	selectedDate?: Date;
	events?: MiniCalendarEvent[];
	initialDate?: Date;
	compact?: boolean;
	showToday?: boolean;
	showWeekNumbers?: boolean;
	class?: string;
	dayClass?: string;
	eventClass?: string;
	headerClass?: string;
	onDateSelect?: (date: Date) => void;
	onEventClick?: (event: MiniCalendarEvent) => void;
}

export type MiniCalendarContract = RecordArchitectureMerge<
	[
		MiniCalendarContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

// ==================== RealTimePresence ====================
export type RealTimePresenceStatus = 'online' | 'away' | 'busy' | 'offline';

export interface RealTimePresenceUser {
	id: string;
	name: string;
	avatar?: string;
	status: RealTimePresenceStatus;
	lastSeen?: Date;
	cursorPosition?: { x: number; y: number };
	activeArea?: string;
}

export interface RealTimePresenceContractBase {
	users: RealTimePresenceUser[];
	showAvatars?: boolean;
	showStatus?: boolean;
	showLastSeen?: boolean;
	showCursorPositions?: boolean;
	title?: string;
	class?: string;
	userListClass?: string;
	userItemClass?: string;
	statusClass?: string;
}

export type RealTimePresenceContract = RecordArchitectureMerge<
	[
		RealTimePresenceContractBase,
		CalendarHTMLAttributes<HTMLDivElement>
	]
>;

// ==================== Timeline ====================
export type TimelineStatus = 'completed' | 'current' | 'pending';

export interface TimelineItem {
	id: string;
	title: string;
	content?: Snippet;
	date?: string;
	status?: TimelineStatus;
	icon?: Snippet;
}

export interface TimelineContractBase {
	items: TimelineItem[];
	orientation?: 'vertical' | 'horizontal';
	class?: string;
	itemClass?: string;
	connectorClass?: string;
	iconClass?: string;
}

export type TimelineContract = RecordArchitectureMerge<
	[
		TimelineContractBase,
		CalendarHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement>
	]
>;

// ==================== TimeSlot ====================
export interface TimeSlotEvent {
	id: string;
	title: string;
	start: Date;
	end: Date;
}

export interface TimeSlotContractBase {
	start: Date;
	end: Date;
	timeLabel?: string;
	available?: boolean;
	selected?: boolean;
	active?: boolean;
	events?: TimeSlotEvent[];
	class?: string;
	onValueInput?: (slot: TimeSlotContractBase) => void;
	onValueChange?: (slot: TimeSlotContractBase) => void;
	onClick?: (slot: TimeSlotContractBase) => void;
	onKeyDown?: (event: KeyboardEvent) => void;
}

export type TimeSlotContract = RecordArchitectureMerge<
	[
		TimeSlotContractBase,
		CalendarHTMLAttributes<HTMLDivElement>
	]
>;

// ==================== Map Calendar Contract ====================
export interface MapCalendarContract {
	CalendarView: CalendarViewContract;
	EventCalendar: EventCalendarContract;
	ScheduleCalendar: ScheduleCalendarContract;
	TimeGrid: TimeGridContract;
	MiniCalendar: MiniCalendarContract;
	RealTimePresence: RealTimePresenceContract;
	Timeline: TimelineContract;
	TimeSlot: TimeSlotContract;
}
