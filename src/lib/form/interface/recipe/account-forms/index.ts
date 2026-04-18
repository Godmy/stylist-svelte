/**
 * Account Forms вЂ” С„РѕСЂРјС‹ СѓС‡С‘С‚РЅРѕР№ Р·Р°РїРёСЃРё.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot                (information/label-slot)
 *   ICaptionSlot              (information/caption-slot)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';

export interface AccountFormsRecipe
	extends StructIntersectAll<[
		ILabelSlot,
		ICaptionSlot,
		IFocusable,
		ISizable
	]>
{}

