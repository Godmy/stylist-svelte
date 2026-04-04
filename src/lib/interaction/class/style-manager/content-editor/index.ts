import { cn } from '$stylist/layout/function/script/merge-class-names';

export type ContentType = 'text' | 'image' | 'quote' | 'divider' | 'header' | 'list';

export interface ContentElement {
	id: string;
	type: ContentType;
	content: string;
	attributes?: Record<string, any>;
}

export interface ContentEditorStyleManagerOptions {
	class?: string;
	toolbarClass?: string;
	editorClass?: string;
	contentClass?: string;
	isActive?: boolean;
}

export class ContentEditorStyleManager {
	private static readonly BASE_ROOT = 'c-content-editor border border-[var(--color-border-primary)] rounded-lg overflow-hidden';
	private static readonly BASE_TOOLBAR = 'flex items-center p-2 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1';
	private static readonly BASE_EDITOR = 'p-4';
	private static readonly BASE_CONTENT = 'mb-4 p-2 border rounded';
	private static readonly BASE_CONTENT_ACTIVE = 'border-[var(--color-primary-500)]';
	private static readonly BASE_CONTENT_INACTIVE = 'border-transparent';
	private static readonly BASE_BUTTON = 'p-2 rounded hover:bg-[var(--color-background-tertiary)]';
	private static readonly BASE_DIVIDER = 'w-px h-6 bg-[var(--color-background-tertiary)] mx-1';
	private static readonly BASE_ICON = 'h-4 w-4';
	private static readonly BASE_MOVE_BUTTON = 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] p-1';
	private static readonly BASE_DELETE_BUTTON = 'text-[var(--color-text-tertiary)] hover:text-[var(--color-danger-500)] p-1';
	private static readonly BASE_ADD_BUTTON = 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-medium flex items-center';
	private static readonly BASE_ADD_ICON = 'h-4 w-4 mr-1';
	private static readonly BASE_PREVIEW = 'prose max-w-none';
	private static readonly BASE_HEADING = 'text-2xl font-bold mb-4';
	private static readonly BASE_QUOTE = 'border-l-4 border-[var(--color-border-primary)] pl-4 italic my-4';
	private static readonly BASE_LIST = 'list-disc pl-5 my-4';
	private static readonly BASE_TEXTAREA = 'w-full focus:outline-none';
	private static readonly BASE_HEADING_INPUT = 'w-full text-2xl font-bold focus:outline-none';
	private static readonly BASE_QUOTE_TEXTAREA = 'w-full italic focus:outline-none border-l-4 border-[var(--color-border-primary)] pl-4';
	private static readonly BASE_IMAGE_PLACEHOLDER = 'border-2 border-dashed border-[var(--color-border-primary)] rounded flex flex-col items-center justify-center p-8';
	private static readonly BASE_IMAGE_ICON = 'h-10 w-10 text-[var(--color-text-tertiary)] mb-2';
	private static readonly BASE_IMAGE_TEXT = 'text-[var(--color-text-secondary)]';
	private static readonly BASE_IMAGE_HINT = 'text-sm text-[var(--color-text-tertiary)] mt-1';

	static getRootClass(className?: string): string {
		return cn(this.BASE_ROOT, className);
	}

	static getToolbarClass(className?: string): string {
		return cn(this.BASE_TOOLBAR, className);
	}

	static getEditorClass(className?: string): string {
		return cn(this.BASE_EDITOR, className);
	}

	static getContentClass(className?: string, isActive?: boolean): string {
		const activeClass = isActive ? this.BASE_CONTENT_ACTIVE : this.BASE_CONTENT_INACTIVE;
		return cn(this.BASE_CONTENT, activeClass, className);
	}

	static getButtonClass(): string {
		return this.BASE_BUTTON;
	}

	static getDividerClass(): string {
		return this.BASE_DIVIDER;
	}

	static getIconClass(): string {
		return this.BASE_ICON;
	}

	static getMoveButtonClass(): string {
		return this.BASE_MOVE_BUTTON;
	}

	static getDeleteButtonClass(): string {
		return this.BASE_DELETE_BUTTON;
	}

	static getAddButtonClass(): string {
		return this.BASE_ADD_BUTTON;
	}

	static getAddIconClass(): string {
		return this.BASE_ADD_ICON;
	}

	static getPreviewClasses(): string {
		return this.BASE_PREVIEW;
	}

	static getHeadingClasses(): string {
		return this.BASE_HEADING;
	}

	static getQuoteClasses(): string {
		return this.BASE_QUOTE;
	}

	static getListClasses(): string {
		return this.BASE_LIST;
	}

	static getTextareaClasses(): string {
		return this.BASE_TEXTAREA;
	}

	static getHeadingInputClasses(): string {
		return this.BASE_HEADING_INPUT;
	}

	static getQuoteTextareaClasses(): string {
		return this.BASE_QUOTE_TEXTAREA;
	}

	static getImagePlaceholderClasses(): string {
		return this.BASE_IMAGE_PLACEHOLDER;
	}

	static getImageIconClasses(): string {
		return this.BASE_IMAGE_ICON;
	}

	static getImageTextClasses(): string {
		return this.BASE_IMAGE_TEXT;
	}

	static getImageHintClasses(): string {
		return this.BASE_IMAGE_HINT;
	}
}
