export class CollaborativeEditorStyleManager {
	static getContainerClasses(hostClass: string): string {
		return `c-collaborative-editor flex flex-col overflow-hidden rounded-[1.5rem] border border-[--color-border-primary] bg-[--color-background-primary] shadow-custom40 ${hostClass}`.trim();
	}

	static getToolbarClasses(toolbarClass: string): string {
		return `flex items-center gap-1 border-b border-[--color-border-primary] bg-[--color-background-secondary] px-3 py-2 ${toolbarClass}`.trim();
	}

	static getEditorClasses(editorClass: string): string {
		return `flex-1 min-h-[320px] overflow-auto bg-[--color-background-primary] px-5 py-4 text-[--color-text-primary] leading-7 focus:outline-none ${editorClass}`.trim();
	}

	static getUserListClasses(userListClass: string): string {
		return `w-56 border-l border-[--color-border-primary] bg-[--color-background-secondary] px-4 py-4 ${userListClass}`.trim();
	}

	static getUserListHeaderClasses(): string {
		return 'mb-3 flex items-center text-xs font-semibold uppercase tracking-[0.08em] text-[--color-text-secondary]';
	}

	static getUserListEntryClasses(): string {
		return 'flex items-center gap-2 rounded-[0.9rem] px-2 py-2 text-[--color-text-primary]';
	}

	static getUserAvatarClasses(): string {
		return 'h-7 w-7 rounded-full ring-2 ring-[--color-background-primary]';
	}

	static getUserInitialsClasses(): string {
		return 'flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-[--color-text-inverse] ring-2 ring-[--color-background-primary]';
	}

	static getUserNameClasses(): string {
		return 'text-sm font-medium text-[--color-text-primary]';
	}

	static getUserIndicatorClasses(): string {
		return 'ml-1 text-xs text-[--color-text-secondary]';
	}

	static getToolbarButtonClasses(): string {
		return 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[--color-text-secondary] transition-colors hover:border-[--color-border-primary] hover:bg-[--color-background-primary] hover:text-[--color-text-primary]';
	}

	static getToolbarSeparatorClasses(): string {
		return 'mx-1 h-6 w-px bg-[--color-border-primary]';
	}
}
