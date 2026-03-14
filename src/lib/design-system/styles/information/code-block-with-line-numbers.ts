import { cn } from '../../utils/cn/index';
import { CODE_COPY_BUTTON_CONTAINER_CLASSES, CODE_HEADER_BASE_CLASSES, CODE_ICON_CLASSES, CODE_LINE_NUMBER_HIGHLIGHT_CLASSES, CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES, CODE_MAIN_CONTENT_CLASSES, CODE_PRE_BASE_CLASSES, CODE_SURFACE_BASE_CLASSES } from '../../constants/information/code-block';

export class CodeWithLineNumbersStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn('c-code-block-with-line-numbers', CODE_SURFACE_BASE_CLASSES, extraClasses);
	}

	static getMainContentClass(): string {
		return CODE_MAIN_CONTENT_CLASSES;
	}

	static getHeaderClass(extraClasses = ''): string {
		return cn(CODE_HEADER_BASE_CLASSES, extraClasses);
	}

	static getLineNumbersContainerClass(extraClasses = ''): string {
		return cn(CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES, extraClasses);
	}

	static getLineNumberItemClass(isHighlighted: boolean): string {
		return cn('pl-2 pr-3', isHighlighted ? CODE_LINE_NUMBER_HIGHLIGHT_CLASSES : '');
	}

	static getContentContainerClass(extraClasses = ''): string {
		return cn('flex-1 overflow-x-auto', extraClasses);
	}

	static getPreClass(extraClasses = ''): string {
		return cn(CODE_PRE_BASE_CLASSES, 'max-w-full overflow-x-auto', extraClasses);
	}

	static getCopyButtonContainerClass(): string {
		return CODE_COPY_BUTTON_CONTAINER_CLASSES;
	}

	static getIconClass(): string {
		return CODE_ICON_CLASSES;
	}
}


