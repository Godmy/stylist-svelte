import type { RadioOrientation } from '$stylist/form/type/struct/radio-group';

export const RADIO_GROUP_LAYOUT_CLASS: Record<RadioOrientation, string> = {
	horizontal: 'flex flex-wrap gap-4',
	vertical: 'flex flex-col gap-3'
};
