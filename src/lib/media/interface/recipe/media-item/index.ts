/**
 * MediaItem вЂ” РёР·РѕР±СЂР°Р¶РµРЅРёРµ / РІРёРґРµРѕ-РїСЂРµРІСЊСЋ / РјРµРґРёР°-РїР»РёС‚РєР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   IMediaSlot        (information) вЂ” src, alt, thumbnail, srcSet, loading
 *   ILabelSlot        (information) вЂ” label (РїРѕРґРїРёСЃСЊ РїРѕРґ РјРµРґРёР°)
 *   ICaptionSlot      (information) вЂ” caption, description
 *   IClickable        (interaction) вЂ” onClick (РѕС‚РєСЂС‹С‚СЊ РІ Р»Р°Р№С‚Р±РѕРєСЃРµ)
 *   ISizable          (architecture) вЂ” size, shape
 *   IElevatable       (architecture) вЂ” layoutElevation (РєР°СЂС‚РѕС‡РєР° СЃ С‚РµРЅСЊСЋ)
 *   IMotionToken      (theme)       вЂ” duration, easing (fade-in РїСЂРё Р·Р°РіСЂСѓР·РєРµ)
 *   ThemeAttributes   (theme)       вЂ” data-variant
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { BehaviorClickable as IClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorSizable as ISizable } from '$stylist/layout/interface/behavior/sizable';
import type { BehaviorElevatable as IElevatable } from '$stylist/layout/interface/behavior/elevatable';
import type { BehaviorMotionToken as IMotionToken } from '$stylist/animation/interface/behavior/motion-token';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface MediaItemRecipe
	extends StructIntersectAll<[
		IMediaSlot,
		ILabelSlot,
		ICaptionSlot,
		IClickable,
		ISizable,
		IElevatable,
		IMotionToken,
		ThemeAttributes<HTMLDivElement>
	]>
{}

