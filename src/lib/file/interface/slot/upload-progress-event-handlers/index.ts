import type { SlotUploadFile as IUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';
import type { SlotUploadFile } from '$stylist/file/interface/slot/upload-file';

/** Обработчики событий */
export interface SlotUploadProgressEventHandlers {
  /** Обработчик повторной попытки загрузки */
  onRetry?: (file: SlotUploadFile) => void;
  /** Обработчик отмены загрузки */
  onCancel?: (file: SlotUploadFile) => void;
  /** Обработчик удаления файла из списка */
  onRemove?: (file: SlotUploadFile) => void;
}
