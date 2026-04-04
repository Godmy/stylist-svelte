/**
 * Badge / Tag / Chip — метка статуса или категории.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — label (текст метки)
 *   IIconSlot         (information) — icon (иконка слева или справа)
 *   IStatusSlot       (information) — severity (цвет по семантике)
 *   IClickable        (interaction) — onClick (кликабельный badge), disabled
 *   ISizable          (architecture) — size, shape (pill / rounded)
 *   ThemeAttributes   (theme)       — data-variant, data-tone
 *
 * Для Chip с кнопкой удаления: добавь `onRemove?: () => void` в extension.
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { IStatusSlot } from '$stylist/information/interface/proto/status-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface BadgeRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IStatusSlot,
		IClickable,
		ISizable,
		ThemeAttributes<HTMLSpanElement>
	]>
{}
