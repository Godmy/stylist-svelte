import type { SplitLayoutDirection } from '$stylist/layout/type/enum/split-layout-direction';

export const RADIO_GROUP_LAYOUT_CLASS: Record<SplitLayoutDirection, string> = {
	horizontal: 'flex flex-wrap gap-4',
	vertical: 'flex flex-col gap-3'
};
