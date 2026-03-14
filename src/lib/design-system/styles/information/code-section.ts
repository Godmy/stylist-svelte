import { cn } from '../../utils/cn/index';
import { CODE_HEADER_BASE_CLASSES, CODE_SURFACE_BASE_CLASSES } from './code-block';

export class CodeSectionStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn('c-code-section', CODE_SURFACE_BASE_CLASSES, extraClasses);
	}

	static getHeaderContainerClass(): string {
		return cn(CODE_HEADER_BASE_CLASSES, 'px-4 py-3');
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


