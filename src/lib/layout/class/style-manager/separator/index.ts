import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenCodeView } from '$stylist/development/type/enum/code-view';
import { BadgeStyleManager } from '$stylist/typography/class/style-manager/badge';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class SeparatorStyleManager {
	static getSeparatorClasses(
		orientation: 'horizontal' | 'vertical' = 'horizontal',
		className = ''
	): string {
		return mergeClassNames(
			{
				horizontal: 'w-full border-t border-[var(--color-border-secondary)]',
				vertical: 'h-full border-l border-[var(--color-border-secondary)]'
			}[orientation],
			className
		);
	}

	static getSyntaxHighlightedCodeContainerClasses(
		variant: TokenCodeView = 'default',
		size: TokenSize = 'md',
		className = ''
	): string {
		return mergeClassNames(
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



