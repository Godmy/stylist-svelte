import { CODE_BLOCK_DEFAULTS, CODE_BLOCK_SIZE_CLASSES, CODE_BLOCK_VARIANT_CLASSES } from '../classes/badge';
import {
	DEFAULT_SEPARATOR_ORIENTATION,
	SEPARATOR_CLASSES,
	SYNTAX_HIGHLIGHTED_CODE_CLASSES,
	SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES
} from '../classes/separator';
import { cn } from '../utils/cn';

export class SeparatorStyleManager {
	static getSeparatorClasses(
		orientation: keyof typeof SEPARATOR_CLASSES = DEFAULT_SEPARATOR_ORIENTATION,
		className = ''
	): string {
		return cn(SEPARATOR_CLASSES[orientation], className);
	}

	static getSyntaxHighlightedCodeContainerClasses(
		variant: keyof typeof CODE_BLOCK_VARIANT_CLASSES = CODE_BLOCK_DEFAULTS.variant,
		size: keyof typeof CODE_BLOCK_SIZE_CLASSES = CODE_BLOCK_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES,
			CODE_BLOCK_VARIANT_CLASSES[variant],
			CODE_BLOCK_SIZE_CLASSES[size],
			className
		);
	}

	static getSyntaxHighlightedCodeClasses(_language: string): string {
		return SYNTAX_HIGHLIGHTED_CODE_CLASSES;
	}
}
