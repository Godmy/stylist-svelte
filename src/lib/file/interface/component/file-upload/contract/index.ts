import type { Snippet } from 'svelte';

export type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export interface FileUploadEventsContract {
	onFileSelect?: (file: File | FileList | null) => void;
	onUpload?: (file: File) => Promise<void>;
}

export interface FileUploadContract extends FileUploadEventsContract {
	/** Accepted file types */
	accept?: string;
	/** Maximum file size */
	maxSize?: number;
	/** Multiple files allowed */
	multiple?: boolean;
	/** Upload status */
	status?: UploadStatus;
	/** Selected file */
	file?: File | null;
	/** Children slot */
	children?: Snippet;
	/** Disabled state */
	disabled?: boolean;
	/** Upload text */
	uploadText?: string;
	/** Additional CSS class */
	class?: string;
}
