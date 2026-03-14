import { cn } from '../../utils/cn/index';

export const CODE_SURFACE_BASE_CLASSES =
	'rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-sm overflow-hidden';
export const CODE_HEADER_BASE_CLASSES =
	'border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]';
export const CODE_MAIN_CONTENT_CLASSES = 'flex';
export const CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES =
	'select-none border-r border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] py-4 pl-2 pr-4 text-right font-mono text-sm text-[var(--color-text-tertiary)]';
export const CODE_LINE_NUMBER_HIGHLIGHT_CLASSES = 'bg-[var(--color-warning-100)] text-[var(--color-text-primary)]';
export const CODE_CONTENT_CONTAINER_BASE_CLASSES = 'flex-1 overflow-auto';
export const CODE_PRE_BASE_CLASSES = 'overflow-auto p-4 text-sm';
export const CODE_COPY_BUTTON_CONTAINER_CLASSES = 'absolute right-2 top-2';
export const CODE_ICON_CLASSES = 'h-4 w-4';
export const CODE_CHANGED_CONTAINER_CLASSES = 'bg-[var(--color-background-primary)]';
export const CODE_DIFF_LINE_BASE_CLASSES = 'px-4 py-1';
export const CODE_DIFF_LINE_VARIANT_CLASSES = {
	added: 'border-l-4 border-[var(--color-success-500)] bg-[var(--color-success-50)] text-[var(--color-success-800)]',
	removed: 'border-l-4 border-[var(--color-danger-500)] bg-[var(--color-danger-50)] text-[var(--color-danger-800)]',
	unchanged: 'bg-[var(--color-background-primary)] text-[var(--color-text-secondary)]'
} as const;

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
