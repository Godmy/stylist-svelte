/**
 * Button = Label + иконки + клик + размер + тема.
 *
 * LEGO-состав:
 *   LabelRecipe       (recipe)      — базовый текстовый кирпич
 *   IIconSlot         (information) — iconLeft, iconRight
 *   IClickable        (interaction) — onClick, disabled, loading, cursor
 *   IFocusable        (interaction) — onFocus, onBlur, tabIndex, autoFocus
 *   ISizable          (architecture) — size, density, shape, layoutPadding
 *   IBadgeSlot        (information) — count, dot (опционально, для уведомлений)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { LabelRecipe } from '$stylist/architecture/interface/recipe/label';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/architecture/interface/proto/sizable';
import type { IBadgeSlot } from '$stylist/information/interface/proto/badge-slot';

export interface ButtonRecipe
	extends RecordArchitectureMerge<[
		LabelRecipe,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		IBadgeSlot
	]>
{}
