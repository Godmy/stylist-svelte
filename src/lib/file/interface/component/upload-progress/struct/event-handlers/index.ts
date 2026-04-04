import type { IUploadFile } from '$stylist/file/interface/component/upload-progress/struct/file';

/** Обработчики событий */
export interface IUploadProgressEventHandlers {
  /** Обработчик повторной попытки загрузки */
  onRetry?: (file: IUploadFile) => void;
  /** Обработчик отмены загрузки */
  onCancel?: (file: IUploadFile) => void;
  /** Обработчик удаления файла из списка */
  onRemove?: (file: IUploadFile) => void;
}
