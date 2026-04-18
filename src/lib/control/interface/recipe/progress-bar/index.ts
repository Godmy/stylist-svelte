/**
 * Progress Bar вЂ” РёРЅРґРёРєР°С‚РѕСЂ РїСЂРѕРіСЂРµСЃСЃР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IStatusSlot               (information/status-slot)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface ProgressBarRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot
	]>
{}

