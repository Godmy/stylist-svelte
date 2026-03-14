import { cn } from '../../utils/cn/index';
import { CARD_BASE_CLASSES } from '../../constants/information/card';

export class CategoryCardStyleManager {
	static getBaseClasses(className = ''): string {
		return cn(
			'category-card cursor-pointer overflow-hidden transition-all duration-[var(--duration-200)] hover:border-[var(--color-primary-300)] hover:shadow-md',
			CARD_BASE_CLASSES,
			className
		);
	}

	static getLinkWrapperClasses(): string {
		return 'block h-full p-6';
	}

	static getHeaderClasses(): string {
		return 'mb-4 flex items-start justify-between';
	}

	static getIconContainerClasses(): string {
		return 'mr-4';
	}

	static getContentContainerClasses(): string {
		return 'min-w-0 flex-1';
	}

	static getTitleClasses(): string {
		return 'truncate text-lg font-bold text-[var(--color-text-primary)]';
	}

	static getCountBadgeClasses(): string {
		return 'ml-2 inline-flex items-center rounded-full bg-[var(--color-primary-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-primary-800)]';
	}

	static getDescriptionClasses(): string {
		return 'mb-3 text-sm text-[var(--color-text-secondary)]';
	}

	static getExamplesContainerClasses(): string {
		return 'mt-3';
	}

	static getExamplesTitleClasses(): string {
		return 'mb-1 text-xs font-semibold text-[var(--color-text-tertiary)]';
	}

	static getExamplesListClasses(): string {
		return 'flex flex-wrap gap-1';
	}

	static getExampleItemClasses(): string {
		return 'rounded bg-[var(--color-background-secondary)] px-2 py-1 text-xs text-[var(--color-text-secondary)]';
	}
}


