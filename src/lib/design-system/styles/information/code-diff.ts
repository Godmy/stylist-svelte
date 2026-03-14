import { cn } from '../../utils/cn/index';
import { CODE_CHANGED_CONTAINER_CLASSES, CODE_DIFF_LINE_BASE_CLASSES, CODE_DIFF_LINE_VARIANT_CLASSES, CODE_HEADER_BASE_CLASSES, CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES, CODE_MAIN_CONTENT_CLASSES, CODE_SURFACE_BASE_CLASSES } from './code-block';
import type { DiffLineType } from '../../tokens/information/diff';


export class CodeDiffStyleManager {
	static getContainerClass(extraClasses = ''): string {
		return cn('c-code-diff relative', CODE_SURFACE_BASE_CLASSES, extraClasses);
	}

	static getHeaderClass(extraClasses = ''): string {
		return cn(CODE_HEADER_BASE_CLASSES, extraClasses);
	}

	static getMainContentClass(): string {
		return CODE_MAIN_CONTENT_CLASSES;
	}

	static getLineNumbersContainerClass(): string {
		return cn('w-16 py-2', CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES);
	}

	static getLineNumberItemClass(): string {
		return 'pr-2';
	}

	static getContentContainerClass(extraClasses = ''): string {
		return cn('flex-1 overflow-x-auto', extraClasses);
	}

	static getDiffContentClass(): string {
		return 'text-sm';
	}

	static getDiffLineClass(type: string): string {
		const normalizedType: DiffLineType =
			type === 'added' || type === 'removed' ? type : 'unchanged';
		return cn(CODE_DIFF_LINE_BASE_CLASSES, CODE_DIFF_LINE_VARIANT_CLASSES[normalizedType]);
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
		return CODE_CHANGED_CONTAINER_CLASSES;
	}
}


