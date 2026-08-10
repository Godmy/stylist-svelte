import type { ContractUploadFile } from '$stylist/file/interface/contract/upload-file';

import type { UploadProgressVariant } from '$stylist/file/type/alias/upload-progress-variant';

export interface ContractUploadProgress {
	onRetry?: (file: ContractUploadFile) => void;
	onCancel?: (file: ContractUploadFile) => void;
	onRemove?: (file: ContractUploadFile) => void;

	/** List of upload files */
	files: ContractUploadFile[];
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

