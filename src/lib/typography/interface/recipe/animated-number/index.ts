/**
 * AnimatedNumber — анимированное число..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AnimatedNumberRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{
	value?: number;
	format?: 'number' | 'currency' | 'percent';
	prefix?: string;
	suffix?: string;
	separator?: string;
	decimals?: number;
}
