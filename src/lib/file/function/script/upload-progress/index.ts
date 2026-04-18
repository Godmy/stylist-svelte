import type { SlotUploadFile as IUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';

export function handleRetry(
  file: IUploadFile,
  onRetry?: (file: IUploadFile) => void
): void {
  onRetry?.(file);
}
