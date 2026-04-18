import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface ContractFileMetadata {
	/** Имя файла */
	name: string;
	/** Размер файла (в байтах или строковом формате) */
	size: string | number;
	/** Тип файла (MIME type или расширение) */
	type: string;
	/** Дата создания/обновления */
	date?: string;
}
