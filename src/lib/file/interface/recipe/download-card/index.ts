import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { ContractFileMetadata as FileMetadataContract } from '$stylist/file/interface/contract/file-metadata';
import type { ContractFileMetadata } from '$stylist/file/interface/contract/file-metadata';

export interface RecipeDownloadCard extends StructIntersectAll<[]> {
	/** Метаданные файла */
	file: ContractFileMetadata;
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
