/**
 * Dropdown Menu — выпадающее меню.
 *
 * LEGO-состав:
 *   ILabelSlot                (information/label-slot)
 *   IIconSlot                 (information/icon-slot)
 *   IClickable                (interaction/clickable)
 *   IFocusable                (interaction/focusable)
 *   ISizable                  (architecture/sizable)
 *   IScrollable               (architecture/scrollable)
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { IScrollable } from '$stylist/layout/interface/proto/scrollable';
import type { ISizable } from '$stylist/layout/interface/proto/sizable';
import type { IIconSlot } from '$stylist/media/interface/proto/icon-slot';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';

export interface DropdownMenuRecipe
	extends RecordArchitectureMerge<[
		ILabelSlot,
		IIconSlot,
		IClickable,
		IFocusable,
		ISizable,
		IScrollable
	]>
{}
