/**
 * Idef0BlackBox — чёрный ящик IDEF0..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0BlackBoxRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	width?: number;
	height?: number;
	boxWidth?: number;
	boxHeight?: number;
}
