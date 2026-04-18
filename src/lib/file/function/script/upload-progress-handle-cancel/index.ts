import type { SlotUploadFile as IUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';

export function handleCancel(
  file: IUploadFile,
  onCancel?: (file: IUploadFile) => void
): void {
  onCancel?.(file);
}
