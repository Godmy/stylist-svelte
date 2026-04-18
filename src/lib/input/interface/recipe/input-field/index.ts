/**
 * Input Field вЂ” РїРѕР»Рµ РІРІРѕРґР° СЃ Р»РµР№Р±Р»РѕРј Рё РїРѕРґСЃРєР°Р·РєР°РјРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IIconSlot                 (information/icon-slot)
 *   IStatusSlot               (information/status-slot)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';

export interface InputFieldRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IIconSlot,
		IStatusSlot,
		IFocusable,
		ISizable
	]>
{}

