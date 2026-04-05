import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * ZoomRecipe — унифицированный рецепт для зум-контролов.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — label, tooltip
 *   IIconSlot                 (information) — zoomIn, zoomOut, fit icons
 *   IClickable                (interaction) — onClick, onZoomIn, onZoomOut
 *   IFocusable                (interaction) — tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) — size, density
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - ZoomControls: type='controls', кнопки зума
 *   - ZoomToolbar: type='toolbar', панель инструментов
 */
export interface ZoomRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLDivElement>
	]>,
		ZoomSpecificProps
{}

/** Специфичные свойства для зум-контролов */
export interface ZoomSpecificProps {
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
