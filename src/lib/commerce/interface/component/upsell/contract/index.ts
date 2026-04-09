/**
 * UpsellContract — блок апсейла (рекомендаций к апгрейду).
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (заголовок блока)
 *   ICaptionSlot      (information) — description (описание)
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface UpsellProductContract {
	id: string;
	name: string;
	description?: string;
	price: number;
	originalPrice?: number;
	thumbnail?: string;
	rating?: number;
	reviewCount?: number;
	inStock?: boolean;
	isRecommended?: boolean;
	category?: string;
	discountPercent?: number;
	tags?: string[];
}

export interface UpsellEventsContract {
	onProductUpgrade?: (product: UpsellProductContract) => void;
	onProductAddToCart?: (product: UpsellProductContract) => void;
}

export interface UpsellContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]>, UpsellEventsContract {
	/** Current product */
	currentProduct: UpsellProductContract;
	/** List of upsell products */
	upsellProducts: UpsellProductContract[];
	/** Maximum products to show */
	maxProducts?: number;
	/** Currency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show savings */
	showSavings?: boolean;
	/** Show reason */
	showReason?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for product list */
	productListClass?: string;
	/** Additional CSS class for product card */
	productCardClass?: string;
}
