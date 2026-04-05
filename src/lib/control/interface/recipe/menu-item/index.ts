/**
 * Menu Item — элемент меню.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
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
import type { ILabelSlot } from '$stylist/information/interface/proto/label-slot';

export interface MenuItemRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable
	]>
{}
