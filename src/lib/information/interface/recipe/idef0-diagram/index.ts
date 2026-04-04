/**
 * Idef0Diagram — диаграмма IDEF0..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0DiagramRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	width?: number;
	height?: number;
}
