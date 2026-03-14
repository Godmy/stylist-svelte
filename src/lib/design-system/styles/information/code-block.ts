import { cn } from '../../utils/cn/index';
import { CODE_CONTENT_CONTAINER_BASE_CLASSES, CODE_COPY_BUTTON_CONTAINER_CLASSES, CODE_HEADER_BASE_CLASSES, CODE_ICON_CLASSES, CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES, CODE_LINE_NUMBER_HIGHLIGHT_CLASSES, CODE_MAIN_CONTENT_CLASSES, CODE_PRE_BASE_CLASSES, CODE_SURFACE_BASE_CLASSES } from '../../constants/information/code-block';


export class CodeStyleManager {
	static getContainerClass(className = ''): string {
		return cn('c-code-block relative', CODE_SURFACE_BASE_CLASSES, className);
	}

	static getHeaderClass(className = ''): string {
		return cn(CODE_HEADER_BASE_CLASSES, className);
	}

	static getLineNumbersContainerClass(className = ''): string {
		return cn(CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES, className);
	}

	static getLineNumberItemClass(isHighlighted: boolean): string {
		return cn(isHighlighted ? CODE_LINE_NUMBER_HIGHLIGHT_CLASSES : '');
	}

	static getContentContainerClass(className = ''): string {
		return cn(CODE_CONTENT_CONTAINER_BASE_CLASSES, className);
	}

	static getPreClass(className = ''): string {
		return cn(CODE_PRE_BASE_CLASSES, className);
	}

	static getCopyButtonContainerClass(): string {
		return CODE_COPY_BUTTON_CONTAINER_CLASSES;
	}

	static getIconClass(): string {
		return CODE_ICON_CLASSES;
	}

	static getMainContentClass(): string {
		return CODE_MAIN_CONTENT_CLASSES;
	}
}

export default CodeStyleManager;


