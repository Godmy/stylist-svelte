/**
 * Range Input вЂ” РїРѕР»Р·СѓРЅРєРѕРІС‹Р№ РІРІРѕРґ РґРёР°РїР°Р·РѕРЅР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   ISelectable<number>       (interaction/selectable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSelectable as ISelectable } from '$stylist/interaction/interface/behavior/selectable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface RangeInputRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		ISelectable<number>,
		IFocusable,
		ISizable
	]>
{}

