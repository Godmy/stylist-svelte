/**
 * Idef0PortLabel — метка порта IDEF0..
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (Label)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0PortLabelRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ThemeAttributes<HTMLSpanElement>
	]>
{
	text: string;
	x: number;
	y: number;
	anchor?: 'start' | 'middle' | 'end';
	color?: string;
	position?: 'left' | 'right' | 'top' | 'bottom';
}
