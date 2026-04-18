/**
 * Avatar вЂ” РїСЂРµРґСЃС‚Р°РІР»РµРЅРёРµ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ (С„РѕС‚Рѕ, РёРЅРёС†РёР°Р»С‹, СЃС‚Р°С‚СѓСЃ).
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IMediaSlot        (information) вЂ” src, alt (С„РѕС‚Рѕ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ)
 *   ILabelSlot        (information) вЂ” label (РёРјСЏ РїРѕР»СЊР·РѕРІР°С‚РµР»СЏ / РёРЅРёС†РёР°Р»С‹ fallback)
 *   IStatusSlot       (information) вЂ” status (online, away, offlineвЂ¦)
 *   IBadgeSlot        (information) вЂ” count, dot (СЃС‡С‘С‚С‡РёРє СѓРІРµРґРѕРјР»РµРЅРёР№ РїРѕРІРµСЂС… Р°РІР°С‚Р°СЂР°)
 *   IClickable        (interaction) вЂ” onClick (РѕС‚РєСЂС‹С‚СЊ РїСЂРѕС„РёР»СЊ)
 *   ISizable          (architecture) вЂ” size, shape (circular / rounded)
 *   ThemeAttributes   (theme)       вЂ” data-variant
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotStatus as IStatusSlot } from '$stylist/information/interface/slot/status';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface AvatarRecipe
	extends StructIntersectAll<[
		IMediaSlot,
		ILabelSlot,
		IStatusSlot,
		IBadgeSlot,
		IClickable,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]>
{}

