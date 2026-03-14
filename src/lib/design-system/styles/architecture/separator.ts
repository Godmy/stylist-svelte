import { CODE_BLOCK_SIZE_CLASSES, CODE_BLOCK_VARIANT_CLASSES } from '../information/badge';
import { cn } from '../../utils/cn/index';

const SEPARATOR_CLASSES = {
	horizontal: 'w-full border-t border-[var(--color-border-secondary)]',
	vertical: 'h-full border-l border-[var(--color-border-secondary)]'
} as const;

const DEFAULT_SEPARATOR_ORIENTATION: keyof typeof SEPARATOR_CLASSES = 'horizontal';

const SEPARATOR_CODE_BLOCK_DEFAULTS = {
	variant: 'default' as keyof typeof CODE_BLOCK_VARIANT_CLASSES,
	size: 'md' as keyof typeof CODE_BLOCK_SIZE_CLASSES
};





export class SeparatorStyleManager {
	static getSeparatorClasses(
		orientation: keyof typeof SEPARATOR_CLASSES = DEFAULT_SEPARATOR_ORIENTATION,
		className = ''
	): string {
		return cn(SEPARATOR_CLASSES[orientation], className);
	}

	static getSyntaxHighlightedCodeContainerClasses(
		variant: keyof typeof CODE_BLOCK_VARIANT_CLASSES = SEPARATOR_CODE_BLOCK_DEFAULTS.variant,
		size: keyof typeof CODE_BLOCK_SIZE_CLASSES = SEPARATOR_CODE_BLOCK_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			'rounded-md',
			CODE_BLOCK_VARIANT_CLASSES[variant],
			CODE_BLOCK_SIZE_CLASSES[size],
			className
		);
	}

	static getSyntaxHighlightedCodeClasses(_language: string): string {
		return 'font-mono text-sm';
	}
}


