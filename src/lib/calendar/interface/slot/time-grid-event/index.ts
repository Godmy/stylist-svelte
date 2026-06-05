// ==================== TimeGrid ====================
export interface SlotTimeGridEvent {
	id: string;
	title: string;
	start: Date;
	end: Date;
	location?: string;
	color?: string;
	allDay?: boolean;
}
