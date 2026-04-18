import type { UploadFileStatus } from '$stylist/file/type/struct/upload-progress/file-status';

export interface ContractUploadFile {
	id: string;
	name: string;
	size: number;
	status: UploadFileStatus;
	progress: number;
	error?: string;
	uploadedAt?: Date;
	data?: unknown;
}
