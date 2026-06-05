import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { TokenSoftwareBadge } from '$stylist/information/type/enum/software-badge';

export class NpmBadgeStyleManager {
	static getNpmBadgeClasses(type: TokenSoftwareBadge = 'version', className = ''): string {
		return mergeClassNames(
			'npm-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
			{
				version:
					'bg-[var(--color-primary-100)] text-[var(--color-primary-800)] dark:bg-[var(--color-primary-900)]/30 dark:text-[var(--color-primary-300)]',
				downloads:
					'bg-[var(--color-success-100)] text-[var(--color-success-800)] dark:bg-[var(--color-success-900)]/30 dark:text-[var(--color-success-300)]',
				license:
					'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)] dark:bg-[var(--color-secondary-900)]/30 dark:text-[var(--color-secondary-300)]',
				size: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)] dark:bg-[var(--color-warning-900)]/30 dark:text-[var(--color-warning-300)]',
				custom:
					'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] dark:bg-[var(--color-neutral-700)] dark:text-[var(--color-neutral-300)]'
			}[type],
			className
		);
	}

	static getNpmBadgeLinkClasses(className = ''): string {
		return mergeClassNames(
			'inline-flex items-center gap-1 hover:opacity-[var(--opacity-80)]',
			className
		);
	}
}
