import type { SlotUploadFile } from '$stylist/file/interface/slot/upload-file';
import type { UploadProgressVariant } from '$stylist/file/type/alias/upload-progress-variant';

/** Основной интерфейс пропсов компонента */
export interface SlotUploadProgress {
/** Класс для корневого элемента */
	hostClass?: string;
	/** Класс для отдельного элемента файла */
	itemClass?: string;
	/** Класс для прогресс-бара */
	progressClass?: string;
/** Показывать имя файла */
	showFileName?: boolean;
	/** Показывать размер файла */
	showFileSize?: boolean;
	/** Показывать прогресс-бар */
	showProgress?: boolean;
	/** Показывать действия (кнопки) */
	showActions?: boolean;
/** Обработчик повторной попытки загрузки */
	onRetry?: (file: SlotUploadFile) => void;
	/** Обработчик отмены загрузки */
	onCancel?: (file: SlotUploadFile) => void;
	/** Обработчик удаления файла из списка */
	onRemove?: (file: SlotUploadFile) => void;

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

