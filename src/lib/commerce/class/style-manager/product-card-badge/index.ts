import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class ProductCardBadgeStyleManager {
	private static readonly badgeBaseClasses = 'absolute left-2 top-2 rounded-md px-2 py-1 text-xs font-medium shadow-sm';
	private static readonly badgeSaleClasses = 'bg-[var(--color-danger-500)] text-[var(--color-text-inverse)]';
	private static readonly badgeNewClasses = 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]';
	private static readonly badgePopularClasses = 'bg-[var(--color-warning-500)] text-[var(--color-text-primary)]';
	private static readonly badgeDefaultClasses = 'bg-[var(--color-neutral-200)] text-[var(--color-text-primary)]';
	private static readonly starFilledClasses = 'fill-current';
	private static readonly starEmptyClasses = 'fill-[var(--color-neutral-300)]';

	static getBadgeBaseClasses(): string {
		return this.badgeBaseClasses;
	}

	static getBadgeClass(badgeTypeClass = ''): string {
		return mergeClassNames(this.badgeBaseClasses, badgeTypeClass);
	}

	static getSaleBadgeClass(): string {
		return this.badgeSaleClasses;
	}

	static getNewBadgeClass(): string {
		return this.badgeNewClasses;
	}

	static getPopularBadgeClass(): string {
		return this.badgePopularClasses;
	}

	static getDefaultBadgeClass(): string {
		return this.badgeDefaultClasses;
	}

	static getFilledStarClass(): string {
		return this.starFilledClasses;
	}

	static getEmptyStarClass(): string {
		return this.starEmptyClasses;
	}

	static getStarClass(isFilled: boolean): string {
		return mergeClassNames('h-4 w-4', isFilled ? this.starFilledClasses : this.starEmptyClasses);
	}
}
