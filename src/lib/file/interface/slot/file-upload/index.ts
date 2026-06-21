import type { UploadStatus } from '$stylist/file/type/struct/upload-status';

export interface SlotFileUpload {
	accept?: string;
	maxSize?: number;
	multiple?: boolean;
	status?: UploadStatus;
	file?: File | null;
	onFileSelect?: (file: File | FileList | null) => void;
	onUpload?: (file: File) => Promise<void>;
	disabled?: boolean;
	uploadText?: string;
	class?: string;
	[key: string]: unknown;
}
