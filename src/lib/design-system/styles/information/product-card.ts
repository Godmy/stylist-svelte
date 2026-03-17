import { cn } from '$stylist/design-system/utils/cn/index';
import { CardStyleManager } from '$stylist/design-system/styles/information/card';
import type { ProductCardVariant } from '$stylist/design-system/tokens/information/product-card';

const PRODUCT_CARD_CONTAINER_VARIANT_CLASSES: Record<ProductCardVariant, string> = {
	default: 'max-w-sm shadow-md',
	compact: 'max-w-xs shadow-sm',
	'with-actions': 'max-w-sm shadow-md'
};
const PRODUCT_CARD_IMAGE_CONTAINER_VARIANT_CLASSES: Record<ProductCardVariant, string> = {
	default: 'relative',
	compact: 'relative h-32 w-full',
	'with-actions': 'relative'
};
const PRODUCT_CARD_CONTENT_VARIANT_CLASSES: Record<ProductCardVariant, string> = {
	default: 'flex flex-1 flex-col p-4',
	compact: 'p-3',
	'with-actions': 'flex flex-1 flex-col p-4'
};
const PRODUCT_CARD_TITLE_VARIANT_CLASSES: Record<ProductCardVariant, string> = {
	default: 'mb-1 text-lg font-semibold text-[var(--color-text-primary)]',
	compact: 'mb-1 truncate text-base font-semibold text-[var(--color-text-primary)]',
	'with-actions': 'mb-1 text-lg font-semibold text-[var(--color-text-primary)]'
};
const PRODUCT_CARD_DESCRIPTION_VARIANT_CLASSES: Record<ProductCardVariant, string> = {
	default: 'mb-2 text-sm text-[var(--color-text-secondary)]',
	compact: 'hidden',
	'with-actions': 'mb-2 flex-1 text-sm text-[var(--color-text-secondary)]'
};
const PRODUCT_CARD_BADGE_BASE_CLASSES = 'absolute left-2 top-2 rounded-md px-2 py-1 text-xs font-medium shadow-sm';
const PRODUCT_CARD_BADGE_SALE_CLASSES = 'bg-[var(--color-danger-500)] text-[var(--color-text-inverse)]';
const PRODUCT_CARD_BADGE_NEW_CLASSES = 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]';
const PRODUCT_CARD_BADGE_POPULAR_CLASSES = 'bg-[var(--color-warning-500)] text-[var(--color-text-primary)]';
const PRODUCT_CARD_BADGE_DEFAULT_CLASSES = 'bg-[var(--color-neutral-200)] text-[var(--color-text-primary)]';
const PRODUCT_CARD_STAR_FILLED_CLASSES = 'fill-current';
const PRODUCT_CARD_STAR_EMPTY_CLASSES = 'fill-[var(--color-neutral-300)]';

export class ProductCardStyleManager {
	static getContainerClass(extraClasses = '', variant: ProductCardVariant = 'default'): string {
		return cn(
			'c-product-card border border-[var(--color-border-primary)]',
			CardStyleManager.getBaseClasses(),
			PRODUCT_CARD_CONTAINER_VARIANT_CLASSES[variant],
			extraClasses
		);
	}

	static getBadgeBaseClasses(): string {
		return PRODUCT_CARD_BADGE_BASE_CLASSES;
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

	static getFilledStarClass(): string {
		return PRODUCT_CARD_STAR_FILLED_CLASSES;
	}

	static getEmptyStarClass(): string {
		return PRODUCT_CARD_STAR_EMPTY_CLASSES;
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
