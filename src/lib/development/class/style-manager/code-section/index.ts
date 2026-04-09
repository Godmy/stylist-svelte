import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CodeStyleManager } from '$stylist/development/class/style-manager/code-block';

export class CodeSectionStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return mergeClassNames('c-code-section', CodeStyleManager.getSurfaceBaseClasses(), extraClasses);
	}

	static getHeaderContainerClass(): string {
		return mergeClassNames(CodeStyleManager.getHeaderBaseClasses(), 'px-4 py-3');
	}

	static getHeaderContentClass(): string {
		return 'flex items-center justify-between gap-3';
	}

	static getTitleClass(): string {
		return 'font-semibold text-[var(--color-text-primary)]';
	}

	static getTagsContainerClass(): string {
		return 'flex flex-wrap gap-2';
	}

	static getTagClass(): string {
		return 'text-xs text-[var(--color-text-secondary)]';
	}
}



