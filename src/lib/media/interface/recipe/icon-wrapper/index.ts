/**
 * IconWrapper — обёртка иконки..
 *
 * LEGO-состав:
 *   IIconSlot        (information) — icon (Icon)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface IconWrapperRecipe
	extends RecordArchitectureMerge<[
		IIconSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{}
