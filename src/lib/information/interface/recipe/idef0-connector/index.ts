/**
 * Idef0Connector — коннектор IDEF0..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0ConnectorRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLDivElement>
	]>
{
	x1: number;
	y1: number;
	x2: number;
	y2: number;
	label: string;
	direction?: 'input' | 'output';
	showArrow?: boolean;
	color?: string;
}
