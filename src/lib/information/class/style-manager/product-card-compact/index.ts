import { cn } from '$stylist/information/function/cn/index';
import { ProductCardStyleManager } from '$stylist/information/class/style-manager/product-card';

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
		return cn('static px-1.5 py-0.5 text-[10px]', ProductCardStyleManager.getBadgeBaseClasses(), badgeTypeClass);
	}

	static getSaleBadgeClass(): string {
		return ProductCardStyleManager.getSaleBadgeClass();
	}

	static getNewBadgeClass(): string {
		return ProductCardStyleManager.getNewBadgeClass();
	}

	static getPopularBadgeClass(): string {
		return ProductCardStyleManager.getPopularBadgeClass();
	}

	static getDefaultBadgeClass(): string {
		return ProductCardStyleManager.getDefaultBadgeClass();
	}

	static getRatingContainerClass(): string {
		return 'mt-1 flex items-center';
	}

	static getStarsContainerClass(): string {
		return 'flex text-[var(--color-warning-500)]';
	}

	static getStarClass(isFilled: boolean): string {
		return cn('h-3 w-3', isFilled ? ProductCardStyleManager.getFilledStarClass() : ProductCardStyleManager.getEmptyStarClass());
	}

	static getPriceContainerClass(): string {
		return 'mt-1';
	}

	static getPriceClass(): string {
		return 'text-sm font-semibold text-[var(--color-text-primary)]';
	}
}


