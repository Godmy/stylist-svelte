export type UploadFileStatus = 'idle' | 'uploading' | 'success' | 'error';

export interface UploadFileContract {
	id: string;
	name: string;
	size: number;
	status: UploadFileStatus;
	progress: number;
	error?: string;
	uploadedAt?: Date;
	data?: unknown;
}

export type UploadProgressVariant = 'default' | 'compact' | 'detailed';

export interface UploadProgressEventsContract {
	onRetry?: (file: UploadFileContract) => void;
	onCancel?: (file: UploadFileContract) => void;
	onRemove?: (file: UploadFileContract) => void;
}

export interface UploadProgressContract extends UploadProgressEventsContract {
	/** List of upload files */
	files: UploadFileContract[];
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
}
