import type { UploadProgressVariant } from '$stylist/file/type/alias/upload-progress-variant';
import type { SlotUploadProgressClasses as IUploadProgressClasses } from '$stylist/file/interface/slot/upload-progress-classes';
import type { SlotUploadProgressDisplayOptions as IUploadProgressDisplayOptions } from '$stylist/file/interface/slot/upload-progress-display-options';
import type { SlotUploadProgressEventHandlers as IUploadProgressEventHandlers } from '$stylist/file/interface/slot/upload-progress-event-handlers';

import type { SlotUploadFile } from '$stylist/file/interface/slot/upload-file-upload-progress-2';

/** Основной интерфейс пропсов компонента */
export interface SlotUploadProgress
	extends IUploadProgressClasses, IUploadProgressDisplayOptions, IUploadProgressEventHandlers {
	/** Автоматически скрывать завершенные загрузки */
	autoHideCompleted?: boolean;
	/** Максимальное количество видимых файлов */
	maxVisible?: number;

	/** Массив файлов для отображения */
	files: SlotUploadFile[];
	/** Вариант отображения компонента */
	variant?: UploadProgressVariant;
	/** Дополнительные атрибуты для корневого элемента */
	[key: string]: any;
}

