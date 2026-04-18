/**
 * Form Footer вЂ” РЅРёР¶РЅСЏСЏ С‡Р°СЃС‚СЊ С„РѕСЂРјС‹.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';

export interface FormFooterRecipe
	extends StructIntersectAll<[
		IClickable,
		IFocusable,
		ISizable
	]>
{}

