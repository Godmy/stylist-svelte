/**
 * Click вЂ” Р±Р°Р·РѕРІС‹Р№ РєР»РёРєР°Р±РµР»СЊРЅС‹Р№ СЌР»РµРјРµРЅС‚.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';

export interface ClickRecipe
	extends StructIntersectAll<[
		IClickable,
		IFocusable
	]>
{}

