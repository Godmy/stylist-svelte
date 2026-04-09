/**
 * Breadcrumb — элемент навигационной цепочки..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 *   IIconSlot        (information) — icon (Icon)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BreadcrumbRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		ThemeAttributes<HTMLLinkElement>
	]>
{}
