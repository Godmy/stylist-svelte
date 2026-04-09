import type { ContentElement } from '../content-editor-state-content-element/index.svelte.ts';

export interface ContentEditorStateProps {
	initialContent?: ContentElement[];
	onSave?: (content: ContentElement[]) => void;
	onPreview?: () => void;
	placeholder?: string;
	showToolbar?: boolean;
	showPreviewButton?: boolean;
	class?: string;
	toolbarClass?: string;
	editorClass?: string;
	contentClass?: string;
}
