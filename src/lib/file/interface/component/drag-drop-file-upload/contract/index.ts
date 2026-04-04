export type DragDropFileStatus = 'uploading' | 'success' | 'error';

export interface DragDropFileContract {
	id: string;
	name: string;
	size: number;
	type: string;
	status: DragDropFileStatus;
	progress?: number;
}

export interface DragDropFileUploadEventsContract {
	onFileSelect?: (files: FileList) => void;
	onFileUpload?: (file: File) => void;
}

export interface DragDropFileUploadContract extends DragDropFileUploadEventsContract {
	/** Multiple files allowed */
	multiple?: boolean;
	/** Accepted file types */
	accept?: string;
	/** Maximum file size */
	maxSize?: number;
	/** Disabled state */
	disabled?: boolean;
	/** Show preview */
	preview?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Drop zone CSS class */
	dropZoneClass?: string;
	/** File list CSS class */
	fileListClass?: string;
	/** File item CSS class */
	fileItemClass?: string;
	/** Button CSS class */
	buttonClass?: string;
}
