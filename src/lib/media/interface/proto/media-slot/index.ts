/** Слот медиа-контента — изображение, превью, обложка */
export interface IMediaSlot {
	/** URL изображения */
	src?: string;
	/** Альтернативный текст */
	alt?: string;
	/** URL превью или обложки */
	thumbnail?: string;
	/** Набор источников для разных разрешений (srcset) */
	srcSet?: string;
	/** Подсказка по приоритету загрузки */
	loading?: 'eager' | 'lazy';
}
