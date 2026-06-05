// ==================== MiniCalendar ====================
export interface SlotMiniCalendarEvent {
	id?: string;
	title: string;
	start: Date;
	end?: Date;
	description?: string;
	color?: string;
}
