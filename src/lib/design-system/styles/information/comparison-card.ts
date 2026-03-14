import { cn } from '../../utils/cn/index';
import { CARD_BASE_CLASSES } from '../../constants/information/card';

export class ComparisonCardStyleManager {
	static getBaseClasses(className = ''): string {
		return cn('comparison-card overflow-hidden', CARD_BASE_CLASSES, className);
	}

	static getHeaderClasses(): string {
		return 'border-b border-[var(--color-border-secondary)] px-6 py-4';
	}

	static getTitleClasses(): string {
		return 'text-lg font-bold text-[var(--color-text-primary)]';
	}

	static getComparisonContainerClasses(): string {
		return 'grid grid-cols-1 divide-x divide-[var(--color-border-secondary)] md:grid-cols-2';
	}

	static getSectionClasses(): string {
		return 'p-6';
	}

	static getSectionTitleClasses(): string {
		return 'mb-4 text-center text-lg font-semibold';
	}

	static getComparisonListClasses(): string {
		return 'space-y-3';
	}

	static getComparisonItemClasses(): string {
		return 'flex items-center justify-between border-b border-[var(--color-border-tertiary)] py-2 last:border-0';
	}

	static getComparisonLabelClasses(): string {
		return 'text-sm font-medium text-[var(--color-text-secondary)]';
	}

	static getComparisonValueClasses(): string {
		return 'text-sm font-medium text-[var(--color-text-primary)]';
	}

	static getBeforeTitleClasses(): string {
		return 'mb-4 text-center text-lg font-semibold text-[var(--color-danger-600)]';
	}

	static getAfterTitleClasses(): string {
		return 'mb-4 text-center text-lg font-semibold text-[var(--color-success-600)]';
	}
}



