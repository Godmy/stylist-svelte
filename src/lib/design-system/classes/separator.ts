import type { Orientation } from '../tokens/layout';
import { cn } from '../utils/classnames';
import {
	CODE_BLOCK_SIZE_CLASSES,
	CODE_BLOCK_VARIANT_CLASSES,
	DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE,
	DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT
} from './badge';

export const SEPARATOR_CLASSES: Record<Orientation, string> = {
	horizontal: 'w-full border-t border-[var(--color-border-secondary)]',
	vertical: 'h-full border-l border-[var(--color-border-secondary)]'
};
export const DEFAULT_SEPARATOR_DECORATIVE = true;
export const DEFAULT_SEPARATOR_ORIENTATION: keyof typeof SEPARATOR_CLASSES = 'horizontal';

export const SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES = 'rounded-md';
export const SYNTAX_HIGHLIGHTED_CODE_CLASSES = 'font-mono text-sm';

export const getSeparatorClasses = (
	orientation: keyof typeof SEPARATOR_CLASSES = DEFAULT_SEPARATOR_ORIENTATION as keyof typeof SEPARATOR_CLASSES,
	className = ''
) => cn(SEPARATOR_CLASSES[orientation], className);

export const getSyntaxHighlightedCodeContainerClasses = (
	variant: keyof typeof CODE_BLOCK_VARIANT_CLASSES = DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT as keyof typeof CODE_BLOCK_VARIANT_CLASSES,
	size: keyof typeof CODE_BLOCK_SIZE_CLASSES = DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE as keyof typeof CODE_BLOCK_SIZE_CLASSES,
	className = ''
) =>
	cn(
		SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES,
		CODE_BLOCK_VARIANT_CLASSES[variant],
		CODE_BLOCK_SIZE_CLASSES[size],
		className
	);
export const getSyntaxHighlightedCodeClasses = (_language: string) =>
	SYNTAX_HIGHLIGHTED_CODE_CLASSES;
