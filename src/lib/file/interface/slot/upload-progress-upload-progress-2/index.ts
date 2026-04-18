import type { SlotUploadFile as IUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';
import type { UploadProgressVariant } from '$stylist/file/type/struct/upload-progress/variant';
import type { SlotUploadProgressClasses as IUploadProgressClasses } from '$stylist/file/interface/slot/upload-progress-classes';
import type { SlotUploadProgressDisplayOptions as IUploadProgressDisplayOptions } from '$stylist/file/interface/slot/upload-progress-display-options';
import type { SlotUploadProgressEventHandlers as IUploadProgressEventHandlers } from '$stylist/file/interface/slot/upload-progress-event-handlers';
import type { SlotUploadProgressBehaviorOptions as IUploadProgressBehaviorOptions } from '$stylist/file/interface/slot/upload-progress-behavior-options';
import type { SlotUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';

/** Основной интерфейс пропсов компонента */
export interface SlotUploadProgress extends IUploadProgressClasses,
  IUploadProgressDisplayOptions,
  IUploadProgressEventHandlers,
  IUploadProgressBehaviorOptions {
  /** Массив файлов для отображения */
  files: SlotUploadFile[];
  /** Вариант отображения компонента */
  variant?: UploadProgressVariant;
  /** Дополнительные атрибуты для корневого элемента */
  [key: string]: any;
}
