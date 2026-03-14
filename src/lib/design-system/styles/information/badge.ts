import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { Code } from '../../tokens/interaction/variants';
import type { DefaultVariants } from '../../tokens';
import { cn } from '../../utils/cn/index';
import { BADGE_DEFAULTS, BADGE_SIZE_CLASSES, BADGE_VARIANT_CLASSES, CODE_BLOCK_DEFAULTS, CODE_BLOCK_SIZE_CLASSES, CODE_BLOCK_VARIANT_CLASSES } from '../../constants/information/badge';


export class BadgeStyleManager {
	static getBadgeClasses(
		variant: keyof typeof BADGE_VARIANT_CLASSES = BADGE_DEFAULTS.variant,
		size: keyof typeof BADGE_SIZE_CLASSES = BADGE_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			'inline-flex items-center font-semibold rounded-full',
			BADGE_VARIANT_CLASSES[variant],
			BADGE_SIZE_CLASSES[size],
			className
		);
	}

	static getBadgeGroupContainerClasses(className = ''): string {
		return cn('flex flex-wrap items-center gap-2', className);
	}

	static getBadgeGroupOverflowClasses(className = ''): string {
		return cn(
			'inline-flex items-center rounded-full text-xs font-medium bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] px-2.5 py-0.5',
			className
		);
	}

	static getCodeClasses(
		variant: keyof typeof CODE_BLOCK_VARIANT_CLASSES = CODE_BLOCK_DEFAULTS.variant,
		size: keyof typeof CODE_BLOCK_SIZE_CLASSES = CODE_BLOCK_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			'rounded-md overflow-x-auto font-mono',
			CODE_BLOCK_VARIANT_CLASSES[variant],
			CODE_BLOCK_SIZE_CLASSES[size],
			className
		);
	}
}




