import type { ContractUploadFile } from '$stylist/file/interface/contract/upload-file';

export interface BehaviorUploadProgressEvents {
	onRetry?: (file: ContractUploadFile) => void;
	onCancel?: (file: ContractUploadFile) => void;
	onRemove?: (file: ContractUploadFile) => void;
}
