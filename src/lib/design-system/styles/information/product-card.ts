import { cn } from '../../utils/cn/index';
import { CARD_BASE_CLASSES } from '../../constants/information/card';
import { PRODUCT_CARD_BADGE_BASE_CLASSES, PRODUCT_CARD_BADGE_DEFAULT_CLASSES, PRODUCT_CARD_BADGE_NEW_CLASSES, PRODUCT_CARD_BADGE_POPULAR_CLASSES, PRODUCT_CARD_BADGE_SALE_CLASSES, PRODUCT_CARD_CONTAINER_VARIANT_CLASSES, PRODUCT_CARD_CONTENT_VARIANT_CLASSES, PRODUCT_CARD_DESCRIPTION_VARIANT_CLASSES, PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES, PRODUCT_CARD_STAR_EMPTY_CLASSES, PRODUCT_CARD_STAR_FILLED_CLASSES, PRODUCT_CARD_TITLE_VARIANT_CLASSES } from '../../constants/information/product-card';
import type { ProductCardVariant } from '../../tokens/information/product-card';


export class ProductCardStyleManager {
	static getContainerClass(
		extraClasses = '',
		variant: ProductCardVariant = 'default'
	): string {
		return cn(
			'c-product-card border border-[var(--color-border-primary)]',
			CARD_BASE_CLASSES,
			PRODUCT_CARD_CONTAINER_VARIANT_CLASSES[variant],
			extraClasses
		);
	}

	static getImageContainerClass(variant: ProductCardVariant = 'default'): string {
		return PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES[variant];
	}

	static getImageClass(): string {
		return 'h-48 w-full object-cover';
	}

	static getBadgeClass(badgeTypeClass = ''): string {
		return cn(PRODUCT_CARD_BADGE_BASE_CLASSES, badgeTypeClass);
	}

	static getSaleBadgeClass(): string {
		return PRODUCT_CARD_BADGE_SALE_CLASSES;
	}

	static getNewBadgeClass(): string {
		return PRODUCT_CARD_BADGE_NEW_CLASSES;
	}

	static getPopularBadgeClass(): string {
		return PRODUCT_CARD_BADGE_POPULAR_CLASSES;
	}

	static getDefaultBadgeClass(): string {
		return PRODUCT_CARD_BADGE_DEFAULT_CLASSES;
	}

	static getContentClass(variant: ProductCardVariant = 'default'): string {
		return PRODUCT_CARD_CONTENT_VARIANT_CLASSES[variant];
	}

	static getHeaderClass(): string {
		return 'mb-2';
	}

	static getTitleClass(variant: ProductCardVariant = 'default'): string {
		return PRODUCT_CARD_TITLE_VARIANT_CLASSES[variant];
	}

	static getDescriptionClass(variant: ProductCardVariant = 'default'): string {
		return PRODUCT_CARD_DESCRIPTION_VARIANT_CLASSES[variant];
	}

	static getRatingContainerClass(): string {
		return 'mb-2 flex items-center';
	}

	static getStarsContainerClass(): string {
		return 'flex text-[var(--color-warning-500)]';
	}

	static getStarClass(isFilled: boolean): string {
		return cn('h-4 w-4', isFilled ? PRODUCT_CARD_STAR_FILLED_CLASSES : PRODUCT_CARD_STAR_EMPTY_CLASSES);
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


