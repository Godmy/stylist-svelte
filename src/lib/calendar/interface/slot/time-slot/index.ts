export interface SlotTimeSlot {
	start: Date;
	end: Date;
	timeLabel: string;
	available: boolean;
	selected?: boolean;
	active?: boolean;
	events?: any[];
	class?: string;
}
