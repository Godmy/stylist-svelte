import { cn } from '../../utils/cn/index';
import { CARD_BASE_CLASSES } from './card';
import {
	PRODUCT_CARD_STAR_EMPTY_CLASSES,
	PRODUCT_CARD_STAR_FILLED_CLASSES
} from './product-card';

export class ProductCardWithActionsStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn(
			'c-product-card-with-actions max-w-sm border border-[var(--color-border-primary)] shadow-md',
			CARD_BASE_CLASSES,
			extraClasses
		);
	}

	static getImageClass(): string {
		return 'h-48 w-full object-cover';
	}

	static getContentClass(): string {
		return 'p-4';
	}

	static getTitleClass(): string {
		return 'mb-1 text-lg font-semibold text-[var(--color-text-primary)]';
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

	static getDescriptionClass(): string {
		return 'mb-3 text-sm text-[var(--color-text-secondary)]';
	}

	static getPriceActionsContainerClass(): string {
		return 'mt-3 flex items-center justify-between gap-3';
	}

	static getPriceClass(): string {
		return 'text-lg font-semibold text-[var(--color-text-primary)]';
	}

	static getActionsContainerClass(): string {
		return 'flex items-center gap-2';
	}
}
