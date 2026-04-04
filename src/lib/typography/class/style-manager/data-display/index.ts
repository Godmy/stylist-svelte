import { formatAnimatedValue } from '$stylist/interaction/function/script/format-animated-value';
import { formatNumberFlowValue } from '$stylist/interaction/function/script/format-number-flow-value';
import { cn } from '$stylist/layout/function/script/merge-class-names';


export class DataDisplayStyleManager {
	static getAnimatedNumberClasses(className = ''): string {
		return cn(className, 'font-mono');
	}

	static formatAnimatedValue(
		value: number,
		options: { format?: 'number' | 'percent' | 'currency'; separator?: string; decimals?: number } = {}
	): string {
		return formatAnimatedValue(value, options);
	}

	static getPieChartContainerClasses(className = ''): string {
		return cn('relative inline-flex items-center justify-center', className);
	}

	static getPieChartSvgClasses(className = ''): string {
		return cn('block', className);
	}

	static getColorSwatchClasses(color: string, size: number = 16, className = ''): string {
		return cn(
			'inline-block rounded border border-[--color-border-secondary]',
			className,
			`bg-[${color}]`,
			`w-[${size}px]`,
			`h-[${size}px]`
		);
	}

	/**
	 * @deprecated Use getColorSwatchClasses instead
	 * This method is kept for backward compatibility only.
	 */
	static getColorSwatchStyle(color: string, size = 16): string {
		return `background-color: ${color}; width: ${size}px; height: ${size}px;`;
	}

	static getNpmBadgeClasses(
		type: 'version' | 'downloads' | 'license' | 'size' | 'custom' = 'version',
		className = ''
	): string {
		return cn(
			'npm-badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
			{
				version:
					'bg-[var(--color-primary-100)] text-[var(--color-primary-800)] dark:bg-[var(--color-primary-900)]/30 dark:text-[var(--color-primary-300)]',
				downloads:
					'bg-[var(--color-success-100)] text-[var(--color-success-800)] dark:bg-[var(--color-success-900)]/30 dark:text-[var(--color-success-300)]',
				license:
					'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)] dark:bg-[var(--color-secondary-900)]/30 dark:text-[var(--color-secondary-300)]',
				size:
					'bg-[var(--color-warning-100)] text-[var(--color-warning-800)] dark:bg-[var(--color-warning-900)]/30 dark:text-[var(--color-warning-300)]',
				custom:
					'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] dark:bg-[var(--color-neutral-700)] dark:text-[var(--color-neutral-300)]'
			}[type],
			className
		);
	}

	static getNpmBadgeLinkClasses(className = ''): string {
		return cn('inline-flex items-center gap-1 hover:opacity-[var(--opacity-80)]', className);
	}

	static getNumberFlowContainerClasses(className = ''): string {
		return cn('flex items-center', className);
	}

	static getNumberFlowClasses(className = ''): {
		container: string;
		prefix: string;
		suffix: string;
		srOnly: string;
	} {
		return {
			container: cn('flex items-center', className),
			prefix: 'mr-1',
			suffix: 'ml-1',
			srOnly: 'sr-only'
		};
	}

	static formatNumberFlowValue(
		value: number,
		locales: string | string[] = 'en-US',
		format?: Intl.NumberFormatOptions
	): string {
		return formatNumberFlowValue(value, locales, format);
	}
}





