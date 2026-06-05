import type { ITimeSlotStyleConfig } from '$stylist/input/type/interface/time-slot-style-config';

export const TIME_SLOT_DEFAULT_CONFIG: ITimeSlotStyleConfig = {
	base: 'c-time-slot',
	available: 'c-time-slot--available',
	unavailable: 'c-time-slot--unavailable',
	selected: 'c-time-slot--selected',
	active: 'c-time-slot--active',
	timeLabelBase: 'c-time-slot__label',
	eventCountBase: 'c-time-slot__count'
};
