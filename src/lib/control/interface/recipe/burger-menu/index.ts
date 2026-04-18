/**
 * Burger Menu вЂ” РєРЅРѕРїРєР° РѕС‚РєСЂС‹С‚РёСЏ/Р·Р°РєСЂС‹С‚РёСЏ РјРµРЅСЋ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IIconSlot                 (information/icon-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';

export interface BurgerMenuRecipe
	extends StructIntersectAll<[
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}

