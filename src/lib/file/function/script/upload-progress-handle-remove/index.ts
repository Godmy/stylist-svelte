import type { SlotUploadFile as IUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';

export function handleRemove(
  file: IUploadFile,
  onRemove?: (file: IUploadFile) => void
): void {
  onRemove?.(file);
}
