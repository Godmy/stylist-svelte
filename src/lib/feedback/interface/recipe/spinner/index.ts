import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * LoadingRecipe — унифицированный рецепт для всех типов индикаторов загрузки.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — label (для accessibility)
 *   IStatusSlot               (information) — loading, error
 *   ISizable                  (architecture) — size
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Spinner: type='spinner'
 *   - ProgressBar: type='bar', progress, indeterminate
 *   - Minimal: type='minimal' (точка, линия)
 */
export interface LoadingRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]>,
		LoadingSpecificProps
{}

/** Специфичные свойства для индикаторов загрузки */
export interface LoadingSpecificProps {
	/** Тип индикатора */
	type?: 'spinner' | 'bar' | 'minimal' | 'overlay';
	
	/** Прогресс (0-100) для ProgressBar */
	progress?: number;
	
	/** Неопределённый режим (анимация без прогресса) */
	indeterminate?: boolean;
	
	/** Показывать label */
	showLabel?: boolean;
	
	/** Показывать проценты */
	showPercentage?: boolean;
}
