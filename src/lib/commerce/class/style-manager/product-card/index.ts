import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CardStyleManager } from '$stylist/commerce/class/style-manager/card';
import type { TierContent } from '$stylist/architecture/type/enum/tier';
import { PRODUCT_CARD_CONTAINER_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-container-variant-classes';
import { PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-image-container-variant-classes';
import { PRODUCT_CARD_CONTENT_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-content-variant-classes';
import { PRODUCT_CARD_TITLE_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-title-variant-classes';
import { PRODUCT_CARD_DESCRIPTION_VARIANT_CLASSES } from '$stylist/commerce/const/record/product-card-description-variant-classes';

const PRODUCT_CARD_BADGE_BASE_CLASSES = 'absolute left-2 top-2 rounded-md px-2 py-1 text-xs font-medium shadow-sm';
const PRODUCT_CARD_BADGE_SALE_CLASSES = 'bg-[var(--color-danger-500)] text-[var(--color-text-inverse)]';
const PRODUCT_CARD_BADGE_NEW_CLASSES = 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]';
const PRODUCT_CARD_BADGE_POPULAR_CLASSES = 'bg-[var(--color-warning-500)] text-[var(--color-text-primary)]';
const PRODUCT_CARD_BADGE_DEFAULT_CLASSES = 'bg-[var(--color-neutral-200)] text-[var(--color-text-primary)]';
const PRODUCT_CARD_STAR_FILLED_CLASSES = 'fill-current';
const PRODUCT_CARD_STAR_EMPTY_CLASSES = 'fill-[var(--color-neutral-300)]';

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
		return PRODUCT_CARD_BADGE_BASE_CLASSES;
	}

	static getImageContainerClass(variant: TierContent = 'detailed'): string {
		return PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES[variant] ?? PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES.detailed ?? '';
	}

	static getImageClass(): string {
		return 'h-48 w-full object-cover';
	}

	static getBadgeClass(badgeTypeClass = ''): string {
		return mergeClassNames(PRODUCT_CARD_BADGE_BASE_CLASSES, badgeTypeClass);
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

	static getFilledStarClass(): string {
		return PRODUCT_CARD_STAR_FILLED_CLASSES;
	}

	static getEmptyStarClass(): string {
		return PRODUCT_CARD_STAR_EMPTY_CLASSES;
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
		return mergeClassNames('h-4 w-4', isFilled ? PRODUCT_CARD_STAR_FILLED_CLASSES : PRODUCT_CARD_STAR_EMPTY_CLASSES);
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

