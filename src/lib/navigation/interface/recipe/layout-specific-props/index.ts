import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** Специфичные свойства для layout-компонентов */
import type { Snippet } from 'svelte';

export interface LayoutSpecificProps extends StructIntersectAll<[]> {
	/** Тип layout-компонента */
	type?: 'sidebar' | 'overlay' | 'drag-drop' | 'transform' | 'container';

	/** Позиция (для sidebar) */
	position?: 'left' | 'right' | 'top' | 'bottom';

	/** Ширина (для sidebar) */
	width?: string | number;

	/** Разрешить перетаскивание (для drag-drop) */
	draggable?: boolean;

	/** Drop zone (для drag-drop) */
	dropzone?: boolean;

	/** Трансформации (для transform) */
	scale?: number;
	rotate?: number;

	/** children как Snippet */
	children?: Snippet;
}
