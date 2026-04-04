import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IScrollable } from '$stylist/architecture/interface/proto/scrollable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * SkeletonRecipe — унифицированный рецепт для скелетонов.
 *
 * LEGO-состав:
 *   ISizable                  (architecture) — size, width, height
 *   IScrollable               (architecture) — overflow (для table)
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Skeleton: type='skeleton', базовый
 *   - SkeletonCircle: type='circle', круглый
 *   - SkeletonRectangle: type='rectangle', прямоугольный
 *   - SkeletonText: type='text', текстовый
 *   - SkeletonTable: type='table', табличный
 */
export interface SkeletonRecipe
	extends RecordArchitectureMerge<[
		ISizable,
		IScrollable,
		ThemeAttributes<HTMLDivElement>
	]>,
		SkeletonSpecificProps
{}

/** Специфичные свойства для скелетонов */
export interface SkeletonSpecificProps {
	/** Тип скелетона */
	type?: 'skeleton' | 'circle' | 'rectangle' | 'text' | 'table';
	
	/** Ширина (переопределяет size) */
	width?: string | number;
	
	/** Высота (переопределяет size) */
	height?: string | number;
	
	/** Количество строк (для text) */
	lines?: number;
	
	/** Анимация загрузки */
	animated?: boolean;
	
	/** children как Snippet */
	children?: Snippet;
}
