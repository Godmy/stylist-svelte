import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class StatsCardStyleManager {
	static getContainerClasses(className?: string): string {
		return mergeClassNames(
			'rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-5 shadow-sm transition hover:shadow',
			className
		);
	}

	static getHeaderClasses(): string {
		return 'flex items-start justify-between';
	}

	static getLabelClasses(): string {
		return 'text-sm font-medium text-[var(--color-text-secondary)]';
	}

	static getValueClasses(): string {
		return 'mt-2 text-2xl font-semibold text-[var(--color-text-primary)]';
	}

	static getIconWrapperClasses(): string {
		return 'rounded-full bg-[var(--color-primary-50)] p-3 text-[var(--color-primary-500)]';
	}

	static getFooterClasses(): string {
		return 'mt-3 flex items-center gap-2 text-sm';
	}

	static getTrendClasses(trendClass: string): string {
		return mergeClassNames('inline-flex items-center gap-1 font-medium', trendClass);
	}

	static getTrendIconClasses(): string {
		return 'h-4 w-4';
	}

	static getDescriptionClasses(): string {
		return 'text-[var(--color-text-secondary)]';
	}
}

