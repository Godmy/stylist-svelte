import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';
import type { TierContent } from '$stylist/architecture/type/enum/tier';
import { PRODUCT_CARD_CONTAINER_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-container-variant-classes';
import { PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-image-container-variant-classes';
import { PRODUCT_CARD_CONTENT_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-content-variant-classes';
import { PRODUCT_CARD_TITLE_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-title-variant-classes';
import { PRODUCT_CARD_DESCRIPTION_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-description-variant-classes';
import { ProductCardBadgeStyleManager } from '$stylist/commerce/class/style-manager/product-card-badge';

export class ProductCardStyleManager {
	static getContainerClass(extraClasses = '', variant: TierContent = 'detailed'): string {
		return mergeClassNames(
			'c-product-card border border-[var(--color-border-primary)]',
			CardStyleManager.getBaseClasses(),
			PRODUCT_CARD_CONTAINER_VARIANT_CLASSES[variant] ?? PRODUCT_CARD_CONTAINER_VARIANT_CLASSES.detailed,
			extraClasses
		);
	}

	static getBadgeBaseClasses(): string {
		return ProductCardBadgeStyleManager.getBadgeBaseClasses();
	}

	static getImageContainerClass(variant: TierContent = 'detailed'): string {
		return PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES[variant] ?? PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES.detailed ?? '';
	}

	static getImageClass(): string {
		return 'h-48 w-full object-cover';
	}

	static getBadgeClass(badgeTypeClass = ''): string {
		return ProductCardBadgeStyleManager.getBadgeClass(badgeTypeClass);
	}

	static getSaleBadgeClass(): string {
		return ProductCardBadgeStyleManager.getSaleBadgeClass();
	}

	static getNewBadgeClass(): string {
		return ProductCardBadgeStyleManager.getNewBadgeClass();
	}

	static getPopularBadgeClass(): string {
		return ProductCardBadgeStyleManager.getPopularBadgeClass();
	}

	static getDefaultBadgeClass(): string {
		return ProductCardBadgeStyleManager.getDefaultBadgeClass();
	}

	static getFilledStarClass(): string {
		return ProductCardBadgeStyleManager.getFilledStarClass();
	}

	static getEmptyStarClass(): string {
		return ProductCardBadgeStyleManager.getEmptyStarClass();
	}

	static getContentClass(variant: TierContent = 'detailed'): string {
		return PRODUCT_CARD_CONTENT_VARIANT_CLASSES[variant] ?? PRODUCT_CARD_CONTENT_VARIANT_CLASSES.detailed ?? '';
	}

	static getHeaderClass(): string {
		return 'mb-2';
	}

	static getTitleClass(variant: TierContent = 'detailed'): string {
		return PRODUCT_CARD_TITLE_VARIANT_CLASSES[variant] ?? PRODUCT_CARD_TITLE_VARIANT_CLASSES.detailed ?? '';
	}

	static getDescriptionClass(variant: TierContent = 'detailed'): string {
		return PRODUCT_CARD_DESCRIPTION_VARIANT_CLASSES[variant] ?? PRODUCT_CARD_DESCRIPTION_VARIANT_CLASSES.detailed ?? '';
	}

	static getRatingContainerClass(): string {
		return 'mb-2 flex items-center';
	}

	static getStarsContainerClass(): string {
		return 'flex text-[var(--color-warning-500)]';
	}

	static getStarClass(isFilled: boolean): string {
		return ProductCardBadgeStyleManager.getStarClass(isFilled);
	}

	static getReviewCountClass(): string {
		return 'ml-1 text-sm text-[var(--color-text-secondary)]';
	}

	static getPriceContainerClass(): string {
		return 'mt-3 flex items-center justify-between';
	}

	static getPriceClass(): string {
		return 'text-lg font-semibold text-[var(--color-text-primary)]';
	}

	static getActionsContainerClass(): string {
		return 'ml-3 flex items-center gap-2';
	}
}

