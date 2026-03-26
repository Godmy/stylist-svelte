import { cn } from '$stylist/information/function/cn/index';
import { CardStyleManager } from '$stylist/information/class/style-manager/card';
import { ProductCardStyleManager } from '$stylist/information/class/style-manager/product-card';

export class ProductCardWithActionsStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn(
			'c-product-card-with-actions max-w-sm border border-[var(--color-border-primary)] shadow-md',
			CardStyleManager.getBaseClasses(),
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
		return cn('h-4 w-4', isFilled ? ProductCardStyleManager.getFilledStarClass() : ProductCardStyleManager.getEmptyStarClass());
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


