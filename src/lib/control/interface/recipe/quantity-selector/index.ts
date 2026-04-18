/**
 * Quantity Selector вЂ” СЃРµР»РµРєС‚РѕСЂ РєРѕР»РёС‡РµСЃС‚РІР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface QuantitySelectorRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}

