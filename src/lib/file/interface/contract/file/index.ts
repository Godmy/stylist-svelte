import type { RecipeAttachmentPreview as AttachmentPreviewContract } from '$stylist/file/interface/recipe/attachment-preview';
import type { RecipeDownloadCard as DownloadCardContract } from '$stylist/file/interface/recipe/download-card';
import type { RecipeDragDropFileUpload as DragDropFileUploadContract } from '$stylist/file/interface/recipe/drag-drop-file-upload';
import type { RecipeDropZone as DropZoneContract } from '$stylist/file/interface/recipe/drop-zone';
import type { RecipeFileBrowser as FileBrowserContract } from '$stylist/file/interface/recipe/file-browser';
import type { RecipeFileExplorer as FileExplorerContract } from '$stylist/file/interface/recipe/file-explorer';
import type { RecipeFileInput as FileInputContract } from '$stylist/file/interface/recipe/file-input';
import type { RecipeFileListItem as FileListItemContract } from '$stylist/file/interface/recipe/file-list-item';
import type { RecipeFileUpload as FileUploadContract } from '$stylist/file/interface/recipe/file-upload';
import type { ContractUploadProgress as UploadProgressContract } from '$stylist/file/interface/contract/upload-progress';
import type { RecipeZipViewer as ZipViewerContract } from '$stylist/file/interface/recipe/zip-viewer';
import type { RecipeAttachmentPreview } from '$stylist/file/interface/recipe/attachment-preview';
import type { RecipeDownloadCard } from '$stylist/file/interface/recipe/download-card';
import type { RecipeDragDropFileUpload } from '$stylist/file/interface/recipe/drag-drop-file-upload';
import type { RecipeDropZone } from '$stylist/file/interface/recipe/drop-zone';
import type { RecipeFileBrowser } from '$stylist/file/interface/recipe/file-browser';
import type { RecipeFileExplorer } from '$stylist/file/interface/recipe/file-explorer';
import type { RecipeFileInput } from '$stylist/file/interface/recipe/file-input';
import type { RecipeFileListItem } from '$stylist/file/interface/recipe/file-list-item';
import type { RecipeFileUpload } from '$stylist/file/interface/recipe/file-upload';
import type { ContractUploadProgress } from '$stylist/file/interface/contract/upload-progress';
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
	UploadProgress: ContractUploadProgress;
	ZipViewer: RecipeZipViewer;
}
