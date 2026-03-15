import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { Code } from '../../tokens/interaction/variants';
import { BadgeStyleManager } from '../information/badge';
import { cn } from '../../utils/cn/index';

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
