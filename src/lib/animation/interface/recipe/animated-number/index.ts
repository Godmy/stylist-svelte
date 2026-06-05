/**
 * AnimatedNumber represents an animated numeric value.
 *
 * Composition:
 *   SlotLabel        label content
 *   SlotBadge        badge content
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotBadge as IBadgeSlot } from '$stylist/information/interface/slot/badge';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AnimatedNumberRecipe
	extends StructIntersectAll<[ILabelSlot, IBadgeSlot, ThemeAttributes<HTMLSpanElement>]> {
	value?: number;
	format?: 'number' | 'currency' | 'percent';
	prefix?: string;
	suffix?: string;
	separator?: string;
	decimals?: number;
}
