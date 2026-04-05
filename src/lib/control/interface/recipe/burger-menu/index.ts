/**
 * Burger Menu — кнопка открытия/закрытия меню.
 *
 * LEGO-состав:
 *   IIconSlot                 (information/icon-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IIconSlot } from '$stylist/information/interface/proto/icon-slot';

export interface BurgerMenuRecipe
	extends RecordArchitectureMerge<[
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}
