import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** Специфичные свойства для различных типов кнопок */
export interface ButtonSpecificProps extends StructIntersectAll<[]> {
	/** Тип кнопки (определяет поведение) */
	type?: 'button' | 'icon' | 'close' | 'copy' | 'follow' | 'page';

	/** Для CopyButton: текст для копирования */
	text?: string;

	/** Для CopyButton: сообщение об успешном копировании */
	successMessage?: string;

	/** Для CopyButton: обработчик успеха */
	onSuccess?: (text: string) => void;

	/** Для CopyButton: обработчик ошибки */
	onError?: (error: Error) => void;

	/** Для PageButton: номер страницы */
	page?: number;

	/** Для PageButton/FollowButton: активно ли */
	isActive?: boolean;

	/** Для кнопки: блочный режим (100% ширины) */
	block?: boolean;
}
