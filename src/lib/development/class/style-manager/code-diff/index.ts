import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CodeStyleManager } from '$stylist/development/class/style-manager/code-block';
import type { TokenDiffType } from '$stylist/development/type/enum/diff-type';


export class CodeDiffStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return mergeClassNames('c-code-diff relative', CodeStyleManager.getSurfaceBaseClasses(), extraClasses);
	}

	static getHeaderClass(extraClasses = ''): string {
		return mergeClassNames(CodeStyleManager.getHeaderBaseClasses(), extraClasses);
	}

	static getMainContentClass(): string {
		return CodeStyleManager.getMainContentClass();
	}

	static getLineNumbersContainerClass(): string {
		return mergeClassNames('w-16 py-2', CodeStyleManager.getLineNumbersContainerBaseClasses());
	}

	static getLineNumberItemClass(): string {
		return 'pr-2';
	}

	static getContentContainerClass(extraClasses = ''): string {
		return mergeClassNames('flex-1 overflow-x-auto', extraClasses);
	}

	static getDiffContentClass(): string {
		return 'text-sm';
	}

	static getDiffLineClass(type: string): string {
		const normalizedType: TokenDiffType =
			type === 'added' || type === 'removed' ? type : 'unchanged';
		return mergeClassNames(CodeStyleManager.getDiffLineBaseClasses(), CodeStyleManager.getDiffLineVariantClass(normalizedType));
	}

	static getDiffSpanClass(type: string): string {
		switch (type) {
			case 'added':
				return 'text-[var(--color-success-800)]';
			case 'removed':
				return 'text-[var(--color-danger-800)]';
			case 'changed':
			case 'unchanged':
			default:
				return 'text-[var(--color-text-secondary)]';
		}
	}

	static getChangedContainerClass(): string {
		return CodeStyleManager.getChangedContainerBaseClasses();
	}
}




