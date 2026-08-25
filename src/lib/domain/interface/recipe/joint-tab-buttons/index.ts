import type { TabFile } from '$stylist/domain/type/object/tab-file';
export interface RecipeJointTabButtons {
	files?: TabFile[];
	markdownFile?: TabFile | null;
	storyFile?: TabFile | null;
	selectedEntityName?: string;
	activeFilePath?: string;
	previewMode?: 'file' | 'markdown' | 'story' | 'json-tree' | 'di';
	previewKind?: 'svg' | 'json' | 'text';
	activeJoint?: string;
	hasDependencyPreview?: boolean;
	onFileSelect?: (path: string) => void;
	onMarkdownSelect?: () => void;
	onStorySelect?: () => void;
	onJsonTreeSelect?: () => void;
	onDependencySelect?: () => void;
	class?: string;
}
