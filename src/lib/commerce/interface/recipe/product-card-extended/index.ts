/**
 * ProductCardExtendedContract вЂ” СЂР°СЃС€РёСЂРµРЅРЅР°СЏ РєР°СЂС‚РѕС‡РєР° С‚РѕРІР°СЂР°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (РЅР°Р·РІР°РЅРёРµ)
 *   ICaptionSlot      (information) вЂ” description (РѕРїРёСЃР°РЅРёРµ)
 *   IBadgeSlot        (information) вЂ” badge (РјРµС‚РєР°)
 *   IMediaSlot        (information) вЂ” src (РёР·РѕР±СЂР°Р¶РµРЅРёРµ), alt
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { SlotBadge as IBadgeSlot } from '$stylist/typography/interface/slot/badge';
import type { SlotMedia as IMediaSlot } from '$stylist/media/interface/slot/media';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotMedia } from '$stylist/media/interface/slot/media';
import type { SlotBadge } from '$stylist/typography/interface/slot/badge';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeProductCardExtended extends StructIntersectAll<[ SlotLabel, SlotCaption, SlotBadge, SlotMedia, ThemeAttributes<HTMLDivElement> ]> {
	/** Product price */
	price?: number;
	/** SlotCurrency symbol */
	currency?: string;
	/** Product rating (0вЂ“5) */
	rating?: number;
	/** Number of reviews */
	reviewCount?: number;
	/** Product features list */
	features?: string[];
	/** Add to cart callback */
	onAddToCart?: () => void;
	/** Add to wishlist callback */
	onWishlist?: () => void;
}
