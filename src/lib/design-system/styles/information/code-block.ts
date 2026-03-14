import { cn } from '../../utils/cn/index';

const CODE_SURFACE_BASE_CLASSES =
	'rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-sm overflow-hidden';
const CODE_HEADER_BASE_CLASSES =
	'border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)]';
const CODE_MAIN_CONTENT_CLASSES = 'flex';
const CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES =
	'select-none border-r border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] py-4 pl-2 pr-4 text-right font-mono text-sm text-[var(--color-text-tertiary)]';
const CODE_LINE_NUMBER_HIGHLIGHT_CLASSES = 'bg-[var(--color-warning-100)] text-[var(--color-text-primary)]';
const CODE_CONTENT_CONTAINER_BASE_CLASSES = 'flex-1 overflow-auto';
const CODE_PRE_BASE_CLASSES = 'overflow-auto p-4 text-sm';
const CODE_COPY_BUTTON_CONTAINER_CLASSES = 'absolute right-2 top-2';
const CODE_ICON_CLASSES = 'h-4 w-4';
const CODE_CHANGED_CONTAINER_CLASSES = 'bg-[var(--color-background-primary)]';
const CODE_DIFF_LINE_BASE_CLASSES = 'px-4 py-1';
const CODE_DIFF_LINE_VARIANT_CLASSES = {
	added: 'border-l-4 border-[var(--color-success-500)] bg-[var(--color-success-50)] text-[var(--color-success-800)]',
	removed: 'border-l-4 border-[var(--color-danger-500)] bg-[var(--color-danger-50)] text-[var(--color-danger-800)]',
	unchanged: 'bg-[var(--color-background-primary)] text-[var(--color-text-secondary)]'
} as const;

export class CodeStyleManager {
	static getSurfaceBaseClasses(): string {
		return CODE_SURFACE_BASE_CLASSES;
	}

	static getContainerClass(className = ''): string {
		return cn('c-code-block relative', CODE_SURFACE_BASE_CLASSES, className);
	}

	static getHeaderClass(className = ''): string {
		return cn(CODE_HEADER_BASE_CLASSES, className);
	}

	static getHeaderBaseClasses(): string {
		return CODE_HEADER_BASE_CLASSES;
	}

	static getLineNumbersContainerClass(className = ''): string {
		return cn(CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES, className);
	}

	static getLineNumbersContainerBaseClasses(): string {
		return CODE_LINE_NUMBERS_CONTAINER_BASE_CLASSES;
	}

	static getLineNumberItemClass(isHighlighted: boolean): string {
		return cn(isHighlighted ? CODE_LINE_NUMBER_HIGHLIGHT_CLASSES : '');
	}

	static getLineNumberHighlightClass(): string {
		return CODE_LINE_NUMBER_HIGHLIGHT_CLASSES;
	}

	static getContentContainerClass(className = ''): string {
		return cn(CODE_CONTENT_CONTAINER_BASE_CLASSES, className);
	}

	static getContentContainerBaseClasses(): string {
		return CODE_CONTENT_CONTAINER_BASE_CLASSES;
	}

	static getPreClass(className = ''): string {
		return cn(CODE_PRE_BASE_CLASSES, className);
	}

	static getPreBaseClasses(): string {
		return CODE_PRE_BASE_CLASSES;
	}

	static getCopyButtonContainerClass(): string {
		return CODE_COPY_BUTTON_CONTAINER_CLASSES;
	}

	static getIconClass(): string {
		return CODE_ICON_CLASSES;
	}

	static getIconBaseClasses(): string {
		return CODE_ICON_CLASSES;
	}

	static getMainContentClass(): string {
		return CODE_MAIN_CONTENT_CLASSES;
	}

	static getChangedContainerBaseClasses(): string {
		return CODE_CHANGED_CONTAINER_CLASSES;
	}

	static getDiffLineBaseClasses(): string {
		return CODE_DIFF_LINE_BASE_CLASSES;
	}

	static getDiffLineVariantClass(type: keyof typeof CODE_DIFF_LINE_VARIANT_CLASSES): string {
		return CODE_DIFF_LINE_VARIANT_CLASSES[type];
	}
}

export default CodeStyleManager;
