import type { ContentType } from '$stylist/development/type/alias/content-editor-content-type';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeContentEditorStateProps extends ComputeIntersectAll<[]> {
	initialContent?: {
		id: string;
		type: ContentType;
		content: string;
		attributes?: Record<string, any>;
	}[];
	onSave?: (
		content: {
			id: string;
			type: ContentType;
			content: string;
			attributes?: Record<string, any>;
		}[]
	) => void;
	onPreview?: () => void;
	placeholder?: string;
	showToolbar?: boolean;
	showPreviewButton?: boolean;
	class?: string;
	toolbarClass?: string;
	editorClass?: string;
	contentClass?: string;
}
