import type { UploadProgressVariant } from '$stylist/file/type/alias/upload-progress-variant';
import type { UploadStatus } from '$stylist/file/type/alias/upload-status';
import type { RecipeAttachmentPreview } from '$stylist/file/interface/recipe/attachment-preview';
import type { RecipeDownloadCard } from '$stylist/file/interface/recipe/download-card';
import type { RecipeDragDropFileUpload } from '$stylist/file/interface/recipe/drag-drop-file-upload';
import type { RecipeDropZone } from '$stylist/file/interface/recipe/drop-zone';
import type { RecipeFileBrowser } from '$stylist/file/interface/recipe/file-browser';
import type { RecipeFileExplorer } from '$stylist/file/interface/recipe/file-explorer';
import type { RecipeFileInput } from '$stylist/file/interface/recipe/file-input';
import type { RecipeFileListItem } from '$stylist/file/interface/recipe/file-list-item';
import type { RecipeFileUpload } from '$stylist/file/interface/recipe/file-upload';
import type { RecipeZipViewer } from '$stylist/file/interface/recipe/zip-viewer';

export interface ContractFile {
	RecipeAttachmentPreview: RecipeAttachmentPreview;
	DownloadCard: RecipeDownloadCard;
	DragDropFileUpload: RecipeDragDropFileUpload;
	DropZone: RecipeDropZone;
	FileBrowser: RecipeFileBrowser;
	FileExplorer: RecipeFileExplorer;
	FileInput: RecipeFileInput;
	FileListItem: RecipeFileListItem;
	FileUpload: RecipeFileUpload;
	UploadProgress: {
onRetry?: (file: {
id: string;
	name: string;
	size: number;
	status: UploadStatus;
	progress: number;
	error?: string;
	uploadedAt?: Date;
	data?: unknown;
}) => void;
	onCancel?: (file: {
id: string;
	name: string;
	size: number;
	status: UploadStatus;
	progress: number;
	error?: string;
	uploadedAt?: Date;
	data?: unknown;
}) => void;
	onRemove?: (file: {
id: string;
	name: string;
	size: number;
	status: UploadStatus;
	progress: number;
	error?: string;
	uploadedAt?: Date;
	data?: unknown;
}) => void;

	/** List of upload files */
	files: {
id: string;
	name: string;
	size: number;
	status: UploadStatus;
	progress: number;
	error?: string;
	uploadedAt?: Date;
	data?: unknown;
}[];
	/** Variant */
	variant?: UploadProgressVariant;
	/** Show file name */
	showFileName?: boolean;
	/** Show file size */
	showFileSize?: boolean;
	/** Show progress */
	showProgress?: boolean;
	/** Show actions */
	showActions?: boolean;
	/** Auto hide completed */
	autoHideCompleted?: boolean;
	/** Maximum visible items */
	maxVisible?: number;
	/** Additional CSS class */
	class?: string;
	/** Item CSS class */
	itemClass?: string;
	/** Progress CSS class */
	progressClass?: string;
};
	ZipViewer: RecipeZipViewer;
}
