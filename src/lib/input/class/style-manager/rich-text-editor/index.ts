import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RichTextEditorStyleManagerOptions } from '$stylist/input/class/style-manager/rich-text-editor-style-manager-options';

export class RichTextEditorStyleManager {
	private static readonly BASE_ROOT = 'border border-[var(--color-border-primary)] rounded-lg overflow-hidden';
	private static readonly BASE_TOOLBAR = 'flex items-center flex-wrap p-2 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1';
	private static readonly BASE_EDITOR = 'px-4 py-3 min-h-[200px] focus:outline-none';
	private static readonly BASE_BUTTON = 'p-2 rounded hover:bg-[var(--color-background-tertiary)]';
	private static readonly BASE_DIVIDER = 'w-px h-6 bg-[var(--color-background-tertiary)] mx-1';
	private static readonly BASE_ICON = 'h-4 w-4';
	private static readonly BASE_LINK_INPUT = 'absolute z-[var(--z-index-docked)] mt-1 w-64 p-3 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg';
	private static readonly BASE_LINK_INPUT_FIELD = 'flex-1 px-2 py-1 border border-[var(--color-border-primary)] rounded-l text-sm';
	private static readonly BASE_LINK_INPUT_BUTTON = 'px-3 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded-r text-sm';
	private static readonly BASE_DROPDOWN = 'absolute z-[var(--z-index-docked)] mt-1 w-40 p-2 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg';
	private static readonly BASE_DROPDOWN_ITEM = 'flex items-center w-full px-2 py-1 text-sm rounded hover:bg-[var(--color-background-secondary)]';
	private static readonly BASE_DROPDOWN_ICON = 'h-4 w-4 mr-2';

	static getRootClass(className?: string): string {
		return mergeClassNames(this.BASE_ROOT, className);
	}

	static getToolbarClass(className?: string): string {
		return mergeClassNames(this.BASE_TOOLBAR, className);
	}

	static getEditorClass(className?: string, isFocused?: boolean): string {
		const focusClass = isFocused ? 'ring-0' : '';
		return mergeClassNames(this.BASE_EDITOR, focusClass, className);
	}

	static getButtonClass(className?: string): string {
		return mergeClassNames(this.BASE_BUTTON, className);
	}

	static getDividerClass(): string {
		return this.BASE_DIVIDER;
	}

	static getIconClass(): string {
		return this.BASE_ICON;
	}

	static getLinkInputClasses(): string {
		return this.BASE_LINK_INPUT;
	}

	static getLinkInputFieldClasses(): string {
		return this.BASE_LINK_INPUT_FIELD;
	}

	static getLinkInputButtonClasses(): string {
		return this.BASE_LINK_INPUT_BUTTON;
	}

	static getDropdownClasses(): string {
		return this.BASE_DROPDOWN;
	}

	static getDropdownItemClasses(): string {
		return this.BASE_DROPDOWN_ITEM;
	}

	static getDropdownIconClasses(): string {
		return this.BASE_DROPDOWN_ICON;
	}

	static getToolbarPositionClasses(position: 'top' | 'bottom'): string {
		return position === 'top'
			? 'border-b border-[var(--color-border-primary)]'
			: 'border-t border-[var(--color-border-primary)]';
	}
}
