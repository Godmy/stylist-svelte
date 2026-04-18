/**
 * SlotToggle Group вЂ” РіСЂСѓРїРїР° РїРµСЂРµРєР»СЋС‡Р°С‚РµР»РµР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   IIconSlot                 (information/icon-slot)
 *   ISelectable<string[]>     (interaction/selectable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface ToggleGroupRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		IIconSlot,
		ISelectable<string[]>,
		IFocusable,
		ISizable
	]>
{}

