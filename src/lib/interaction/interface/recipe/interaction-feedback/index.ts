/**
 * Interaction Feedback вЂ” РѕР±СЂР°С‚РЅР°СЏ СЃРІСЏР·СЊ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёСЏ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IStatusSlot               (information/status-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface InteractionFeedbackRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		IClickable,
		IFocusable
	]>
{}

