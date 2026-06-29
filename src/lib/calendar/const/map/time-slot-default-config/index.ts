export interface TimeSlotStyleConfig {
	base: string;
	available: string;
	unavailable: string;
	selected: string;
	active: string;
	timeLabelBase: string;
	eventCountBase: string;
}

export const TIME_SLOT_DEFAULT_CONFIG: TimeSlotStyleConfig = {
	base: 'c-time-slot',
	available: 'c-time-slot--available',
	unavailable: 'c-time-slot--unavailable',
	selected: 'c-time-slot--selected',
	active: 'c-time-slot--active',
	timeLabelBase: 'c-time-slot__label',
	eventCountBase: 'c-time-slot__count'
};
