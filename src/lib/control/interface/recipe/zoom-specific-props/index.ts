import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
/** Специфичные свойства для зум-контролов */
import type { Snippet } from 'svelte';

export interface ZoomSpecificProps extends StructIntersectAll<[]> {
	/** Тип зум-контрола */
	type?: 'controls' | 'toolbar';

	/** Текущий уровень зума */
	zoom?: number;

	/** Минимальный зум */
	minZoom?: number;

	/** Максимальный зум */
	maxZoom?: number;

	/** Шаг зума */
	zoomStep?: number;

	/** Обработчик зума */
	onZoom?: (zoom: number) => void;

	/** Обработчик зума в */
	onZoomIn?: () => void;

	/** Обработчик зума out */
	onZoomOut?: () => void;

	/** Обработчик fit to screen */
	onFit?: () => void;

	/** children как Snippet */
	children?: Snippet;
}
