/**
 * ProductCardExtendedContract — расширенная карточка товара.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (название)
 *   ICaptionSlot      (information) — description (описание)
 *   IBadgeSlot        (information) — badge (метка)
 *   IMediaSlot        (information) — src (изображение), alt
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';
import type { IMediaSlot } from '$stylist/information/interface/proto/media-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface ProductCardExtendedContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IBadgeSlot,
		IMediaSlot,
		ThemeAttributes<HTMLDivElement>
	]> {
	/** Product price */
	price?: number;
	/** Currency symbol */
	currency?: string;
	/** Product rating (0–5) */
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
