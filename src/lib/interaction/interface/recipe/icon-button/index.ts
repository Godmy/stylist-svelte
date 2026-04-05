/**
 * IconButton = иконка + клик + размер + тема. Без текста.
 *
 * LEGO-состав (убираем LabelRecipe и IBadgeSlot, оставляем только иконку):
 *   IIconSlot         (information) — icon, iconSize
 *   IClickable        (interaction) — onClick, disabled, loading
 *   IFocusable        (interaction) — tabIndex, onFocus, onBlur
 *   ISizable          (architecture) — size, shape, density
 *   ThemeAttributes   (theme)       — data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export interface IconButtonRecipe
	extends RecordArchitectureMerge<[
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		ThemeAttributes<HTMLButtonElement>
	]>
{}
