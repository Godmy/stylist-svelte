import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class PerformanceMonitorStyleManager {
	static getContainerClasses(className?: string): string {
		return mergeClassNames('flex flex-col', className);
	}

	static getHeaderClasses(): string {
		return 'mb-1 flex items-center justify-between';
	}

	static getTitleClasses(): string {
		return 'font-medium';
	}

	static getValueClasses(): string {
		return 'text-sm text-[var(--color-text-secondary)]';
	}

	static getTrackClasses(): string {
		return 'h-2.5 w-full rounded-full bg-[var(--color-background-tertiary)]';
	}

	static getBarClasses(statusBarClass: string): string {
		return mergeClassNames('h-2.5 rounded-full', statusBarClass);
	}
}

