import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { FileMetadataContract } from '$stylist/file/interface/component/attachment-preview/contract';

export interface DownloadCardContract {
	/** Метаданные файла */
	file: FileMetadataContract;
	/** Вариант оформления */
	variant?: TokenAppearance;
	/** URL для скачивания файла */
	downloadUrl: string;
	/** Альтернативный текст для иконки файла */
	iconAlt?: string;
	/** Показывать ли метаданные файла */
	showMetadata?: boolean;
	/** Пользовательская иконка для файла */
	icon?: string;
	/** Дополнительные CSS классы */
	class?: string;
}
