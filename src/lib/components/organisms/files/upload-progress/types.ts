/**
 * Типы и интерфейсы для компонента UploadProgress
 * 
 * Следует принципам SOLID:
 * - SRP: Все типы относятся исключительно к UploadProgress
 * - OCP: Легко расширяемы новыми значениями
 * - LSP: Совместимы с базовыми типами
 * - ISP: Только нужные определения
 * - DIP: Зависит от абстракций
 */

/** Статусы загрузки файла */
export type UploadFileStatus = 'idle' | 'uploading' | 'success' | 'error';

/** Тип для файла в процессе загрузки */
export interface IUploadFile {
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

/** Варианты отображения компонента */
export type UploadProgressVariant = 'default' | 'compact' | 'detailed';

/** Дополнительные классы для кастомизации */
export interface IUploadProgressClasses {
  /** Класс для корневого элемента */
  hostClass?: string;
  /** Класс для отдельного элемента файла */
  itemClass?: string;
  /** Класс для прогресс-бара */
  progressClass?: string;
}

/** Опциональные отображения элементов */
export interface IUploadProgressDisplayOptions {
  /** Показывать имя файла */
  showFileName?: boolean;
  /** Показывать размер файла */
  showFileSize?: boolean;
  /** Показывать прогресс-бар */
  showProgress?: boolean;
  /** Показывать действия (кнопки) */
  showActions?: boolean;
}

/** Обработчики событий */
export interface IUploadProgressEventHandlers {
  /** Обработчик повторной попытки загрузки */
  onRetry?: (file: IUploadFile) => void;
  /** Обработчик отмены загрузки */
  onCancel?: (file: IUploadFile) => void;
  /** Обработчик удаления файла из списка */
  onRemove?: (file: IUploadFile) => void;
}

/** Опции поведения компонента */
export interface IUploadProgressBehaviorOptions {
  /** Автоматически скрывать завершенные загрузки */
  autoHideCompleted?: boolean;
  /** Максимальное количество видимых файлов */
  maxVisible?: number;
}

/** Основной интерфейс пропсов компонента */
export interface IUploadProgressProps extends IUploadProgressClasses, 
  IUploadProgressDisplayOptions, 
  IUploadProgressEventHandlers, 
  IUploadProgressBehaviorOptions {
  /** Массив файлов для отображения */
  files: IUploadFile[];
  /** Вариант отображения компонента */
  variant?: UploadProgressVariant;
  /** Дополнительные атрибуты для корневого элемента */
  [key: string]: any;
}