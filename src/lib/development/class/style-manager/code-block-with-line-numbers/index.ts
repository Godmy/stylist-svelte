import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { CodeStyleManager } from '$stylist/development/class/style-manager/code-block';

export class CodeWithLineNumbersStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return mergeClassNames('c-code-block-with-line-numbers', CodeStyleManager.getSurfaceBaseClasses(), extraClasses);
	}

	static getMainContentClass(): string {
		return CodeStyleManager.getMainContentClass();
	}

	static getHeaderClass(extraClasses = ''): string {
		return mergeClassNames(CodeStyleManager.getHeaderBaseClasses(), extraClasses);
	}

	static getLineNumbersContainerClass(extraClasses = ''): string {
		return mergeClassNames(CodeStyleManager.getLineNumbersContainerBaseClasses(), extraClasses);
	}

	static getLineNumberItemClass(isHighlighted: boolean): string {
		return mergeClassNames('pl-2 pr-3', isHighlighted ? CodeStyleManager.getLineNumberHighlightClass() : '');
	}

	static getContentContainerClass(extraClasses = ''): string {
		return mergeClassNames('flex-1 overflow-x-auto', extraClasses);
	}

	static getPreClass(extraClasses = ''): string {
		return mergeClassNames(CodeStyleManager.getPreBaseClasses(), 'max-w-full overflow-x-auto', extraClasses);
	}

	static getCopyButtonContainerClass(): string {
		return CodeStyleManager.getCopyButtonContainerClass();
	}

	static getIconClass(): string {
		return CodeStyleManager.getIconBaseClasses();
	}
}



