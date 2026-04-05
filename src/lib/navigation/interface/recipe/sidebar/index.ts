import type { Snippet } from 'svelte';
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IDraggable } from '$stylist/interaction/interface/proto/draggable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IScrollable } from '$stylist/layout/interface/proto/scrollable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ITransformable } from '$stylist/interaction/interface/proto/transformable';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

/**
 * LayoutRecipe — унифицированный рецепт для layout-компонентов.
 *
 * LEGO-состав:
 *   ILabelSlot                (information) — label, title
 *   IIconSlot                 (information) — icon
 *   IClickable                (interaction) — onClick, onDismiss
 *   IDraggable                (interaction) — draggable, onDrag*, onDrop
 *   ITransformable            (interaction) — scale, rotate, translate
 *   IFocusable                (interaction) — tabIndex, onFocus, onBlur
 *   ISizable                  (architecture) — size, density
 *   IScrollable               (architecture) — overflowX, overflowY
 *   ThemeAttributes           (theme)       — variant, tone
 *
 * Варианты использования:
 *   - Sidebar: type='sidebar', боковая панель
 *   - Overlay: type='overlay', перекрывающий слой
 *   - DragAndDrop: type='drag-drop', перетаскивание
 *   - Transformation: type='transform', трансформация
 *   - Container: type='container', базовый контейнер
 */
export interface LayoutRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IClickable,
		IDraggable,
		ITransformable,
		IFocusable,
		ISizable,
		IScrollable,
		ThemeAttributes<HTMLDivElement>
	]>,
		LayoutSpecificProps
{}

/** Специфичные свойства для layout-компонентов */
export interface LayoutSpecificProps {
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
