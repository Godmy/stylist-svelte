import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { LayoutShape } from '$stylist/layout/type/struct/item-layout-shape';
import type { TokenSize } from '$stylist/layout/type/enum/size';

export type CardProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children?: Snippet;
	/** Слот для медиа-контента (изображение, видео) */
	media?: Snippet;
	/** Слот для шапки карточки */
	header?: Snippet;
	/** Слот для футера карточки */
	footer?: Snippet;
	/** Форма углов */
	shape?: LayoutShape;
	/** Размер (управляет padding) */
	size?: TokenSize;
	/** Уровень тени (0–6) */
	elevation?: number;
	/** Активирует hover/focus стили интерактивной карточки */
	clickable?: boolean;
	/** Растягивает на всю ширину */
	fullWidth?: boolean;
};
