import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Idef0Port } from '$stylist/science/type/struct/idef-zero/idef0port';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface Idef0InputsRecipe
	extends StructIntersectAll<[ILabelSlot, ThemeAttributes<HTMLDivElement>]>
{
	ports: Idef0Port[];
	boxY: number;
	boxHeight: number;
}
