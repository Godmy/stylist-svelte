import type { LayoutShape } from '$stylist/layout/type/struct/item-layout-shape';

export const CARD_SHAPE_MAP: Record<LayoutShape, string> = {
	rectangular: 'rounded-none',
	rounded: 'rounded-xl',
	pill: 'rounded-full',
	circular: 'rounded-full aspect-square'
};

