import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContentElement } from '$stylist/input/interface/slot/content-element';

export interface ContentEditorStateProps extends StructIntersectAll<[]> {
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
