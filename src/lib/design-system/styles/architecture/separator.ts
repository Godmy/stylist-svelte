import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Code } from '$stylist/design-system/tokens/interaction/variants';
import { BadgeStyleManager } from '$stylist/design-system/styles/information/badge';
import { cn } from '$stylist/design-system/utils/cn/index';

export class SeparatorStyleManager {
	static getSeparatorClasses(
		orientation: 'horizontal' | 'vertical' = 'horizontal',
		className = ''
	): string {
		return cn(
			{
				horizontal: 'w-full border-t border-[var(--color-border-secondary)]',
				vertical: 'h-full border-l border-[var(--color-border-secondary)]'
			}[orientation],
			className
		);
	}

	static getSyntaxHighlightedCodeContainerClasses(
		variant: Code = 'default',
		size: ComponentSize = 'md',
		className = ''
	): string {
		return cn(
			'rounded-md',
			BadgeStyleManager.getCodeVariantClass(variant),
			BadgeStyleManager.getCodeSizeClass(size),
			className
		);
	}

	static getSyntaxHighlightedCodeClasses(_language: string): string {
		return 'font-mono text-sm';
	}
}
