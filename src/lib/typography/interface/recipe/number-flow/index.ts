/**
 * NumberFlow — поток чисел..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IBadgeSlot        (information) — badge (Badge)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IBadgeSlot } from '$stylist/typography/interface/proto/badge-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface NumberFlowRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IBadgeSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{
	value?: number;
	locales?: Intl.LocalesArgument;
	format?: Intl.NumberFormatOptions;
	prefix?: string;
	suffix?: string;
}
