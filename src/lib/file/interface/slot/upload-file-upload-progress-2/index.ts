import type { UploadFileStatus } from '$stylist/file/type/struct/upload-progress/file-status';

/** Тип для файла в процессе загрузки */
export interface SlotUploadFile {
  /** Уникальный идентификатор файла */
  id: string;
  /** Имя файла */
  name: string;
  /** Размер файла в байтах */
  size: number;
  /** Статус загрузки */
  status: UploadFileStatus;
  /** Прогресс загрузки от 0 до 100 */
  progress: number;
  /** Ошибка, если произошла */
  error?: string;
  /** Дата загрузки, если успешно загружен */
  uploadedAt?: Date;
  /** Дополнительные данные файла */
  data?: any;
}
