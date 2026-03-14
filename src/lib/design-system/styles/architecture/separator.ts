import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { Code } from '../../tokens/interaction/variants';
import { BadgeStyleManager } from '../information/badge';
import { cn } from '../../utils/cn/index';

const SEPARATOR_CLASSES = {
	horizontal: 'w-full border-t border-[var(--color-border-secondary)]',
	vertical: 'h-full border-l border-[var(--color-border-secondary)]'
} as const;

const DEFAULT_SEPARATOR_ORIENTATION: keyof typeof SEPARATOR_CLASSES = 'horizontal';

const SEPARATOR_CODE_BLOCK_DEFAULTS = {
	variant: 'default' as Code,
	size: 'md' as ComponentSize
};





export class SeparatorStyleManager {
	static getSeparatorClasses(
		orientation: keyof typeof SEPARATOR_CLASSES = DEFAULT_SEPARATOR_ORIENTATION,
		className = ''
	): string {
		return cn(SEPARATOR_CLASSES[orientation], className);
	}

	static getSyntaxHighlightedCodeContainerClasses(
		variant: Code = SEPARATOR_CODE_BLOCK_DEFAULTS.variant,
		size: ComponentSize = SEPARATOR_CODE_BLOCK_DEFAULTS.size,
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

