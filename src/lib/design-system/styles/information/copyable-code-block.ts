import { cn } from '../../utils/cn/index';
import { CODE_COPY_BUTTON_CONTAINER_CLASSES, CODE_HEADER_BASE_CLASSES, CODE_ICON_CLASSES, CODE_PRE_BASE_CLASSES, CODE_SURFACE_BASE_CLASSES } from './code-block';

export class CopyableCodeStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn('c-copyable-code-block', CODE_SURFACE_BASE_CLASSES, extraClasses);
	}

	static getHeaderClass(extraClasses = ''): string {
		return cn(CODE_HEADER_BASE_CLASSES, extraClasses);
	}

	static getRelativeContainerClass(): string {
		return 'relative';
	}

	static getPreClass(extraClasses = ''): string {
		return cn(CODE_PRE_BASE_CLASSES, 'max-w-full overflow-x-auto', extraClasses);
	}

	static getCopyButtonContainerClass(): string {
		return CODE_COPY_BUTTON_CONTAINER_CLASSES;
	}

	static getIconClass(isCopied: boolean): string {
		return cn(CODE_ICON_CLASSES, isCopied ? 'text-[var(--color-success-600)]' : '');
	}
}


