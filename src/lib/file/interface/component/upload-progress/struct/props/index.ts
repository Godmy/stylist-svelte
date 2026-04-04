import type { IUploadFile } from '$stylist/file/interface/component/upload-progress/struct/file';
import type { UploadProgressVariant } from '$stylist/file/type/struct/upload-progress/variant';
import type { IUploadProgressClasses } from '$stylist/file/interface/component/upload-progress/struct/classes';
import type { IUploadProgressDisplayOptions } from '$stylist/file/interface/component/upload-progress/struct/display-options';
import type { IUploadProgressEventHandlers } from '$stylist/file/interface/component/upload-progress/struct/event-handlers';
import type { IUploadProgressBehaviorOptions } from '$stylist/file/interface/component/upload-progress/struct/behavior-options';

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
