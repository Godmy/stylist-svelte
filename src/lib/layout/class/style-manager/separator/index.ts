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
}
