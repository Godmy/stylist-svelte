/**
 * Button = Label + РёРєРѕРЅРєРё + РєР»РёРє + СЂР°Р·РјРµСЂ + С‚РµРјР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   LabelRecipe       (recipe)      вЂ” Р±Р°Р·РѕРІС‹Р№ С‚РµРєСЃС‚РѕРІС‹Р№ РєРёСЂРїРёС‡
 *   IIconSlot         (information) вЂ” iconLeft, iconRight
 *   IClickable        (interaction) вЂ” onClick, disabled, loading, cursor
 *   IFocusable        (interaction) вЂ” onFocus, onBlur, tabIndex, autoFocus
 *   ISizable          (architecture) вЂ” size, density, shape, layoutPadding
 *   IBadgeSlot        (information) вЂ” count, dot (РѕРїС†РёРѕРЅР°Р»СЊРЅРѕ, РґР»СЏ СѓРІРµРґРѕРјР»РµРЅРёР№)
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { LabelRecipe } from '$stylist/typography/interface/recipe/label';
import type { SlotIcon as IIconSlot } from '$stylist/media/interface/slot/icon';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable as IFocusable } from '$stylist/interaction/interface/behavior/focusable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';

export interface ButtonRecipe
	extends StructIntersectAll<[
		LabelRecipe,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		IBadgeSlot
	]>
{}

