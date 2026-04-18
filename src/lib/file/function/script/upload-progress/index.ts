import type { SlotUploadFile as IUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';

export function handleRetry(
  file: IUploadFile,
  onRetry?: (file: IUploadFile) => void
): void {
  onRetry?.(file);
}

export function handleCancel(
  file: IUploadFile,
  onCancel?: (file: IUploadFile) => void
): void {
  onCancel?.(file);
}

export function handleRemove(
  file: IUploadFile,
  onRemove?: (file: IUploadFile) => void
): void {
  onRemove?.(file);
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
