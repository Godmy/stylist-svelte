/**
 * Idef0Outputs — выходы IDEF0..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { Idef0Port } from '$stylist/science/interface/recipe/idef0-inputs';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0OutputsRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	ports: Idef0Port[];
	boxY: number;
	boxHeight: number;
}
