export type UploadFileStatus = 'idle' | 'uploading' | 'success' | 'error';

export interface IUploadFile {
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

export interface IUploadProgressProps {
  files: IUploadFile[];
  variant?: UploadProgressVariant;
  hostClass?: string;
  itemClass?: string;
  progressClass?: string;
  showFileName?: boolean;
  showFileSize?: boolean;
  showProgress?: boolean;
  showActions?: boolean;
  onRetry?: (file: IUploadFile) => void;
  onCancel?: (file: IUploadFile) => void;
  onRemove?: (file: IUploadFile) => void;
  autoHideCompleted?: boolean;
  maxVisible?: number;
  [key: string]: unknown;
}
