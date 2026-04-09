import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class HighlightStyleManager {
	static getHighlightClasses(className = ''): string {
		return mergeClassNames('highlight', 'bg-[var(--color-warning-100)] text-[var(--color-text-primary)]', className);
	}
}

