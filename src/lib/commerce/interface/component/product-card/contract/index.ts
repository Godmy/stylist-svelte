/**
 * ProductCardContract — карточка товара.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (название)
 *   ICaptionSlot      (information) — description (описание)
 *   IBadgeSlot        (information) — badge (метка: sale, new, popular)
 *   IMediaSlot        (information) — src (изображение), alt
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/information/interface/proto/caption-slot';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';
import type { IMediaSlot } from '$stylist/information/interface/proto/media-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { Snippet } from 'svelte';

export interface ProductCardContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		IBadgeSlot,
		IMediaSlot,
		ThemeAttributes<HTMLDivElement>
	]> {
	/** Card layout variant */
	variant?: 'default' | 'compact' | 'with-actions';
	/** Product price */
	price?: number;
	/** Currency symbol */
	currency?: string;
	/** Product rating (0–5) */
	rating?: number;
	/** Number of reviews */
	reviewCount?: number;
	/** Actions slot */
	actions?: Snippet;
}
