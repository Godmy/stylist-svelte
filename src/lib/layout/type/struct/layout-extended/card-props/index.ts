import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { LayoutShape } from '$stylist/layout/type/alias/item-layout-shape';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export type CardProps = LayoutHTMLAttributes<HTMLDivElement> & {
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

