/**
 * Follow Button вЂ” РєРЅРѕРїРєР° РїРѕРґРїРёСЃРєРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   IBadgeSlot                (information/badge-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface FollowButtonRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IBadgeSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}

