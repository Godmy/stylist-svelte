import type { ContractUploadFile } from '$stylist/file/interface/contract/upload-file';
import type { BehaviorUploadProgressEvents } from '$stylist/file/interface/behavior/upload-progress-events';
import type { UploadProgressVariant } from '$stylist/file/type/struct/upload-progress/variant';

export interface ContractUploadProgress extends BehaviorUploadProgressEvents {
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
