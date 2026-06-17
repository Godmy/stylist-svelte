import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFormHeader } from '$stylist/form/interface/slot/form-header';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RecipeFormHeader
	extends StructIntersectAll<[SlotFormHeader, ILabelSlot, ICaptionSlot]> {}
