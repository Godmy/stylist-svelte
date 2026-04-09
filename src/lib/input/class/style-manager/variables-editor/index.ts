import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { VariablesEditorStyleManagerOptions } from '$stylist/input/class/style-manager/variables-editor-style-manager-options';

export class VariablesEditorStyleManager {
	private static readonly BASE_ROOT = 'variables-editor border border-[var(--color-border-primary)] rounded-md dark:border-[var(--color-border-primary)] bg-[var(--color-background-primary)] dark:bg-[var(--color-neutral-800)] overflow-hidden';
	private static readonly BASE_TOOLBAR = 'toolbar bg-[var(--color-background-secondary)] dark:bg-[var(--color-neutral-700)] border-b border-[var(--color-border-primary)] dark:border-[var(--color-border-primary)] p-2 flex items-center justify-between';
	private static readonly BASE_LABEL = 'text-xs font-medium text-[var(--color-text-primary)] dark:text-[var(--color-text-tertiary)]';
	private static readonly BASE_TEXTAREA = 'w-full h-full p-4 font-mono text-sm border-none focus:outline-none resize-none bg-[var(--color-background-primary)] dark:bg-[var(--color-neutral-800)] text-[var(--color-text-primary)] dark:text-[var(--color-neutral-100)]';
	private static readonly BASE_TEXTAREA_INVALID = 'text-[var(--color-danger-500)]';
	private static readonly BASE_PLACEHOLDER = 'absolute inset-0 flex items-center justify-center pointer-events-none';
	private static readonly BASE_PLACEHOLDER_CONTENT = 'text-[var(--color-text-tertiary)] dark:text-[var(--color-text-secondary)] text-center p-4';
	private static readonly BASE_INVALID_BADGE = 'absolute top-2 right-2 bg-[var(--color-danger-500)] text-[var(--color-text-inverse)] text-xs px-2 py-1 rounded';
	private static readonly BASE_ICON = 'h-8 w-8 mx-auto mb-1';

	static getRootClass(className?: string): string {
		return mergeClassNames(this.BASE_ROOT, className);
	}

	static getToolbarClass(): string {
		return this.BASE_TOOLBAR;
	}

	static getLabelClass(): string {
		return this.BASE_LABEL;
	}

	static getTextareaClass(isValid?: boolean): string {
		const invalidClass = isValid === false ? this.BASE_TEXTAREA_INVALID : '';
		return mergeClassNames(this.BASE_TEXTAREA, invalidClass);
	}

	static getPlaceholderClasses(): string {
		return this.BASE_PLACEHOLDER;
	}

	static getPlaceholderContentClasses(): string {
		return this.BASE_PLACEHOLDER_CONTENT;
	}

	static getInvalidBadgeClasses(): string {
		return this.BASE_INVALID_BADGE;
	}

	static getIconClasses(): string {
		return this.BASE_ICON;
	}

	static getHeightStyle(height?: string): string {
		return height ?? '150px';
	}
}
