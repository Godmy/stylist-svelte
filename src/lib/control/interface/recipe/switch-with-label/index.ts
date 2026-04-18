/**
 * Switch with Label вЂ” РїРµСЂРµРєР»СЋС‡Р°С‚РµР»СЊ СЃ РїРѕРґРїРёСЃСЊСЋ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IStatusSlot               (information/status-slot)
 *   ISelectable<boolean>      (interaction/selectable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface SwitchWithLabelRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IStatusSlot,
		ISelectable<boolean>,
		IFocusable,
		ISizable
	]>
{}

