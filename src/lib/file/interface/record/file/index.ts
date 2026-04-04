import type { AttachmentPreviewContract } from '$stylist/file/interface/component/attachment-preview/contract';
import type { DownloadCardContract } from '$stylist/file/interface/component/download-card/contract';
import type { DragDropFileUploadContract } from '$stylist/file/interface/component/drag-drop-file-upload/contract';
import type { DropZoneContract } from '$stylist/file/interface/component/drop-zone/contract';
import type { FileBrowserContract } from '$stylist/file/interface/component/file-browser/contract';
import type { FileExplorerContract } from '$stylist/file/interface/component/file-explorer/contract';
import type { FileInputContract } from '$stylist/file/interface/component/file-input/contract';
import type { FileListItemContract } from '$stylist/file/interface/component/file-list-item/contract';
import type { FileUploadContract } from '$stylist/file/interface/component/file-upload/contract';
import type { UploadProgressContract } from '$stylist/file/interface/component/upload-progress/contract';
import type { ZipViewerContract } from '$stylist/file/interface/component/zip-viewer/contract';

export interface MapFileContract {
	AttachmentPreview: AttachmentPreviewContract;
	DownloadCard: DownloadCardContract;
	DragDropFileUpload: DragDropFileUploadContract;
	DropZone: DropZoneContract;
	FileBrowser: FileBrowserContract;
	FileExplorer: FileExplorerContract;
	FileInput: FileInputContract;
	FileListItem: FileListItemContract;
	FileUpload: FileUploadContract;
	UploadProgress: UploadProgressContract;
	ZipViewer: ZipViewerContract;
}
