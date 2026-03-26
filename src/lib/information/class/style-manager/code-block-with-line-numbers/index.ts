import { cn } from '$stylist/information/function/cn/index';
import { CodeStyleManager } from '$stylist/information/class/style-manager/code-block';

export class CodeWithLineNumbersStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn('c-code-block-with-line-numbers', CodeStyleManager.getSurfaceBaseClasses(), extraClasses);
	}

	static getMainContentClass(): string {
		return CodeStyleManager.getMainContentClass();
	}

	static getHeaderClass(extraClasses = ''): string {
		return cn(CodeStyleManager.getHeaderBaseClasses(), extraClasses);
	}

	static getLineNumbersContainerClass(extraClasses = ''): string {
		return cn(CodeStyleManager.getLineNumbersContainerBaseClasses(), extraClasses);
	}

	static getLineNumberItemClass(isHighlighted: boolean): string {
		return cn('pl-2 pr-3', isHighlighted ? CodeStyleManager.getLineNumberHighlightClass() : '');
	}

	static getContentContainerClass(extraClasses = ''): string {
		return cn('flex-1 overflow-x-auto', extraClasses);
	}

	static getPreClass(extraClasses = ''): string {
		return cn(CodeStyleManager.getPreBaseClasses(), 'max-w-full overflow-x-auto', extraClasses);
	}

	static getCopyButtonContainerClass(): string {
		return CodeStyleManager.getCopyButtonContainerClass();
	}

	static getIconClass(): string {
		return CodeStyleManager.getIconBaseClasses();
	}
}


