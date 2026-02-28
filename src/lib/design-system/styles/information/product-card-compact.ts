import { cn } from '../../utils/cn/index';
import {
	PRODUCT_CARD_BADGE_BASE_CLASSES,
	PRODUCT_CARD_BADGE_DEFAULT_CLASSES,
	PRODUCT_CARD_BADGE_NEW_CLASSES,
	PRODUCT_CARD_BADGE_POPULAR_CLASSES,
	PRODUCT_CARD_BADGE_SALE_CLASSES,
	PRODUCT_CARD_STAR_EMPTY_CLASSES,
	PRODUCT_CARD_STAR_FILLED_CLASSES
} from './product-card';

export class ProductCardCompactStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn(
			'c-product-card-compact flex overflow-hidden rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-sm',
			extraClasses
		);
	}

	static getImageClass(): string {
		return 'h-24 w-24 object-cover';
	}

	static getContentClass(): string {
		return 'flex-1 p-3';
	}

	static getHeaderClass(): string {
		return 'flex items-start justify-between gap-2';
	}

	static getTitleClass(): string {
		return 'truncate text-sm font-medium text-[var(--color-text-primary)]';
	}

	static getBadgeClass(badgeTypeClass = ''): string {
		return cn('static px-1.5 py-0.5 text-[10px]', PRODUCT_CARD_BADGE_BASE_CLASSES, badgeTypeClass);
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

	static getRatingContainerClass(): string {
		return 'mt-1 flex items-center';
	}

	static getStarsContainerClass(): string {
		return 'flex text-[var(--color-warning-500)]';
	}

	static getStarClass(isFilled: boolean): string {
		return cn('h-3 w-3', isFilled ? PRODUCT_CARD_STAR_FILLED_CLASSES : PRODUCT_CARD_STAR_EMPTY_CLASSES);
	}

	static getPriceContainerClass(): string {
		return 'mt-1';
	}

	static getPriceClass(): string {
		return 'text-sm font-semibold text-[var(--color-text-primary)]';
	}
}
