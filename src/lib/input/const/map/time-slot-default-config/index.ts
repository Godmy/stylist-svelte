import type { ITimeSlotStyleConfig } from '$stylist/input/type/interface/time-slot-style-config';

export const TIME_SLOT_DEFAULT_CONFIG: ITimeSlotStyleConfig = {
	base: 'time-slot flex flex-col p-[--spacing-sm] border rounded cursor-pointer transition-all duration-[var(--duration-200)] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500]',
	available: 'bg-[--color-background-primary] border-[--color-border-primary] hover:bg-[--color-background-secondary] hover:border-[--color-border-hover]',
	unavailable: 'bg-[--color-background-secondary] border-[--color-border-secondary] text-[--color-text-tertiary] cursor-not-allowed',
	selected: 'ring-2 ring-[--color-primary-500] bg-[--color-primary-50] border-[--color-primary-300]',
	active: 'border-[--color-accent-500] bg-[--color-accent-50]',
	timeLabelBase: 'text-[--text-size-sm] font-[--font-weight-medium] text-[--color-text-primary]',
	eventCountBase: 'text-[--text-size-xs] text-[--color-text-secondary] mt-[--spacing-xs]'
};

