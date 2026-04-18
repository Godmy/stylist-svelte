import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** Специфичные свойства для различных типов ссылок */
export interface LinkSpecificProps extends StructIntersectAll<[]> {
	/** Тип ссылки */
	type?: 'link' | 'breadcrumb' | 'inline' | 'button';

	/** URL ссылки */
	href?: string;

	/** Цель открытия */
	target?: '_blank' | '_self' | '_parent' | '_top';

	/** Атрибут rel (для внешних ссылок) */
	rel?: string;

	/** Download атрибут */
	download?: string;
}
