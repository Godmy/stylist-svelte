import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export class CollaborativeEditorStyleManager {
	static getContainerClasses(hostClass: string): string {
		return mergeClassNames('c-collaborative-editor', hostClass);
	}

	static getToolbarClasses(toolbarClass: string): string {
		return mergeClassNames('c-collaborative-editor__toolbar', toolbarClass);
	}

	static getEditorClasses(editorClass: string): string {
		return mergeClassNames('c-collaborative-editor__editor', editorClass);
	}

	static getUserListClasses(userListClass: string): string {
		return mergeClassNames('c-collaborative-editor__user-list', userListClass);
	}

	static getUserListHeaderClasses(): string {
		return 'c-collaborative-editor__user-list-header';
	}

	static getUserListEntryClasses(): string {
		return 'c-collaborative-editor__user-entry';
	}

	static getUserAvatarClasses(): string {
		return 'c-collaborative-editor__user-avatar';
	}

	static getUserInitialsClasses(): string {
		return 'c-collaborative-editor__user-initials';
	}

	static getUserNameClasses(): string {
		return 'c-collaborative-editor__user-name';
	}

	static getUserIndicatorClasses(): string {
		return 'c-collaborative-editor__user-indicator';
	}

	static getToolbarButtonClasses(): string {
		return 'c-collaborative-editor__toolbar-btn';
	}

	static getToolbarSeparatorClasses(): string {
		return 'c-collaborative-editor__toolbar-sep';
	}
}
